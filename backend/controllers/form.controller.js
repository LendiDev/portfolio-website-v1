const ContactForm = require("../models/contact-form.model");

const sendEmail = async (req, res, next) => {
  const formData = req.body;
  const contactForm = new ContactForm(formData);

  try {
    await contactForm.validateForm();
    await contactForm.sendEmails();

    res.status(200).send({
      error: false,
      successMessage: "Emails are sent!",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { sendEmail };
