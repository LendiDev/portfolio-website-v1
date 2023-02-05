const ContactForm = require("../models/contact-form.model");
const ReCaptcha = require("../models/recaptcha.model");
const validateForm = require("../utils/form-validator");

const sendEmail = async (req, res, next) => {
  const data = {
    name: req.body.name.trim(),
    email: req.body.email.trim(),
    message: req.body.message.trim(),
    reCaptchaToken: req.body["g-recaptcha-response"],
  };

  if (!validateForm(data)) {
    return next({ error: true, errorMessage: "inputs are invalid" });
  }

  const recaptcha = new ReCaptcha(data.reCaptchaToken);

  let isHuman;
  try {
    isHuman = await recaptcha.validateHuman();
  } catch (error) {
    return next({
      error: true,
      errorMessage: "something wrong with g-recaptcha-response",
    });
  }

  if (isHuman) {
    const contactForm = new ContactForm(data.name, data.email, data.message);
    contactForm
      .sendEmails()
      .then(() => {
        res.json({
          error: false,
          successMessage: "Emails are sent!",
        });
      })
      .catch((err) => {
        return next(err);
      });
  } else {
    return next({
      error: true,
      errorMessage: "you are robot",
    });
  }
};

module.exports = { sendEmail };
