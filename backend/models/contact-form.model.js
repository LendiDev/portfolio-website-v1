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
      from: "Nikita Lendiak <no-reply@lendi.dev>",
      to: `${this.name} <${this.email}>`,
      replyTo: `Nikita Lendiak <lendiak93@gmail.com>`,
      priority: "high",
      subject: "Your next top performer is just an email away",
      html: this.htmlEmail,
      text: this.plainTextEmail,
    });
  }

  #sendEmailToReceiver() {
    return transporter.sendMail({
      from: "Nikita Lendiak <no-reply@lendi.dev>",
      to: `Nikita Lendiak <lendiak93@gmail.com>`,
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
