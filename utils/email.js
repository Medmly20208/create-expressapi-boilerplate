const nodemailer = require("nodemailer");

const sendEmail = async (options) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "FOMATION123456@gmail.com",
      pass: "tqfdmvlhixeiirie",
    },
  });

  const mailOptions = {
    from: "FOMATION123456@gmail.com",
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  await transporter.sendMail(mailOptions);
};

const receiveEmail = async (options) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "FOMATION123456@gmail.com",
      pass: "tqfdmvlhixeiirie",
    },
  });

  const message =
    "message from " + options.email + " " + "message : " + options.message;

  const mailOptions = {
    from: options.email,
    to: "FOMATION123456@gmail.com",
    subject: options.subject,
    text: message,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = { sendEmail, receiveEmail };
