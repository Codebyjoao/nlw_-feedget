import nodemailer from "nodemailer"
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "0d9e85a9960e5c",
    pass: "e9478ed35d059c"
  }
})

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({subject, body}: SendMailData)  {
    await transport.sendMail({
      from: "Equipe Feedget <oi@feedget.com> ",
      to: "João <joao.goncalves@gmail.com>",
      subject,
      html: body,
    });
  }
}