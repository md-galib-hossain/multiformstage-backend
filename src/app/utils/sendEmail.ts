import nodemailer from "nodemailer";
import config from "../config";
const emailSender = async (email: string,html: string) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: config.EMAIL_SENDER.EMAIL,
      pass: config.EMAIL_SENDER.APP_PASSWORD,
    },
    tls:{
        rejectUnauthorized:false
    }
  });

  const info = await transporter.sendMail({
    from: '"Mars Visit 🪐" <mdgalib23@gmail.com>', 
    to: email, 
    subject: "Mars Visit Application Form Succesfully Recieved", 
   
    html: html, 
  });

  console.log("Message sent: %s", info.messageId);
};
export default emailSender;
