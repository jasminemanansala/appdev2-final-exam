const nodemailer = require('nodemailer');
const pug = require('pug');
const path = require('path');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendEmail = async ({ to, subject, template, context }) => {
  const html = pug.renderFile(path.join(__dirname, `../emails/${template}.pug`), context);
  await transporter.sendMail({ from: process.env.EMAIL_USER, to, subject, html });
};

module.exports = sendEmail;