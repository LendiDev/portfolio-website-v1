const validator = require("validator");

const {
  htmlToSenderTemplate,
  plainTextTemplate,
} = require("../utils/email-templates/to-sender.template");
const transporter = require("../utils/email-transporter");

class ContactForm {
  constructor(name, email, message) {
    this.name = name.trim();
    this.email = email;
    this.message = validator.escape(message);

    this.htmlEmail = htmlToSenderTemplate(name, this.message);
    this.plainTextEmail = plainTextTemplate(name, this.message);
  }

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
    return Promise.all([
      this.#sendEmailToSender(),
      this.#sendEmailToReceiver(),
    ]);
  }
}

module.exports = ContactForm;
