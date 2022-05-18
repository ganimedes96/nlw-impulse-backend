import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer'





const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "e0191984057e9c",
      pass: "1b30bb0b9b96ac"
    }
  });

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({subject, body}:SendMailData) {
    await transport.sendMail({
        from: 'Equipe Feedget <oi@feedget.com>',
        to: 'Hudson Felipe <ganimedes409@gmail.com>',
        subject,
        html: body,
    })
  }
}
