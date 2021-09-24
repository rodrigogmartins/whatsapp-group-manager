import nodemailer, { Transporter } from 'nodemailer'
import SMTPTransport from 'nodemailer/lib/smtp-transport'

interface EmailOptions {
  from: string
  to: string
  subject: string
  html: string
}
export class EmailAdapter {
  private transporter: Transporter<SMTPTransport.SentMessageInfo>

  constructor () {
    this.transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT) || 25,
      secure: process.env.EMAIL_SECURE === 'true',
      requireTLS: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    })
  }

  send (emailOptions: EmailOptions): Promise<SMTPTransport.SentMessageInfo> {
    return this.transporter.sendMail(emailOptions)
  }
}
