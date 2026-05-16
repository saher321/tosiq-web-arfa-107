import { customAlphabet } from 'nanoid'
import nodemailer from 'nodemailer'

export const generateOTP = () => {
  const nanoid = customAlphabet('1234567890abcdef', 8)
  const otp = nanoid() //=> "_ _ _ _ _ _ _"
  return otp
}

export const sendEmail = async (to, subject, html) => {
  try {
    // Create a transporter using SMTP
    const transporter = nodemailer.createTransport({
      host: "smtp.example.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const info = await transporter.sendMail({
      from: '"Example Team" <team@example.com>', // sender address
      to: to,
      subject: subject, // subject line
      html: html, // HTML body
    });

  console.log("Message sent: %s", info.messageId);
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

  } catch (error) {
    console.log("ERR:", error)
  }
}
