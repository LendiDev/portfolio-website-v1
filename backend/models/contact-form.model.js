const validator = require("validator");

const {
  htmlToSenderTemplate,
  plainTextTemplate,
} = require("../utils/email-templates/to-sender.template");
const transporter = require("../configs/email-transporter");
const validateForm = require("../utils/form-validator");
const CustomError = require("./custom-error.model");

class ContactForm {
  constructor({ name, email, message }) {
    this.name = name;
    this.email = email;
    this.message = validator.escape(message);

    this.htmlEmail = htmlToSenderTemplate(name, this.message);
    this.plainTextEmail = plainTextTemplate(name, this.message);
  }

  validateForm = async () => {
    if (
      !validateForm({
        name: this.name,
        email: this.email,
        message: this.message,
      })
    ) {
      throw new CustomError(400, "Invalid form inputs");
    }
  };

  #sendEmailToSender() {
    return transporter.sendMail({
      from: process.env.SENDER,
      to: `${this.name} <${this.email}>`,
      replyTo: process.env.REPLY_TO,
      priority: "high",
      subject: "Your next top performer is just an email away",
      html: this.htmlEmail,
      text: this.plainTextEmail,
    });
  }

  #sendEmailToReceiver() {
    return transporter.sendMail({
      from: `${this.name} <${this.email}>`,
      sender: process.env.SENDER,
      to: process.env.REPLY_TO,
      replyTo: `${this.name} <${this.email}>`,
      priority: "high",
      subject: "Your next top performer is just an email away",
      html: this.htmlEmail,
      text: this.plainTextEmail,
    });
  }

  sendEmails() {
    return Promise.all([this.#sendEmailToSender(), this.#sendEmailToReceiver()])
      .then(() => true)
      .catch(() => {
        throw new CustomError(
          500,
          "Something went wrong while sending emails"
        );
      });
  }
}

module.exports = ContactForm;
