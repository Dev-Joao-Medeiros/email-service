const nodemailer = require("nodemailer");

const {
  MAIL_HOST,
  MAIL_PORT,
  MAIL_SECURE,
  MAIL_USER,
  MAIL_PASS,
} = require("../config");

class EmailService {
  constructor() {
    this.service = nodemailer.createTransport({
      host: MAIL_HOST,
      port: Number(MAIL_PORT),
      secure: MAIL_SECURE,
      auth: {
        user: MAIL_USER,
        pass: MAIL_PASS,
      },
    });
  }

  async send({ from, to, subject, text }) {
    await this.service.sendMail({
      from,
      to,
      subject,
      text,
    });

    console.log("E-mail enviado com sucesso!");
  }
}

module.exports = new EmailService();
