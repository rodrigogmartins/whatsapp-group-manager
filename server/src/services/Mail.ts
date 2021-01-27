import nodemailer from 'nodemailer'
import dotenv from 'dotenv'

dotenv.config()

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: Number(process.env.EMAIL_PORT) || 25,
  secure: process.env.EMAIL_SECURE === 'true',
  requireTLS: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
})

interface IEmailOptions {
  from: string
  to: string
  subject: string
  html: string
}

export const sendMail = (emailOptions: IEmailOptions): Promise<any> => {
  return transporter.sendMail(emailOptions)
}
