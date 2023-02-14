const ContactForm = require("../models/contact-form.model");
const ReCaptcha = require("../models/recaptcha.model");
const validateForm = require("../utils/form-validator");

const sendEmail = async (req, res, next) => {
  const data = {
    name: req.body.name.trim(),
    email: req.body["e-mail"].trim(),
    message: req.body.message.trim(),
    recaptchaToken: req.body.recaptchaToken,
  };

  console.log("received:", data);

  if (!validateForm(data)) {
    return next({ error: true, errorMessage: "inputs are invalid" });
  }

  const recaptcha = new ReCaptcha(data.recaptchaToken);

  recaptcha
    .validateHuman()
    .then(() => {
      const contactForm = new ContactForm(data.name, data.email, data.message);
      return contactForm.sendEmails();
    })
    .then(() => {
      res.status(200).json({
        error: false,
        successMessage: "Emails are sent!",
      });
    })
    .catch((err) => {
      next(err);
    });
};

module.exports = { sendEmail };
