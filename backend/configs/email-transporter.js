const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  connectionTimeout: 5000,
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false,
  auth: {
    user: process.env.SMTP_AUTH_LOGIN,
    pass: process.env.SMTP_AUTH_PASS,
  },
});

module.exports = transporter;
