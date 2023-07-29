import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

const app = express();
dotenv.config();
const port = process.env.PORT ||5000;

app.use(cors());
app.use(express.json({ limit: '100mb' }));
app.use(express.urlencoded({ limit: '100mb' }));

const sendEmail = (name, email, message) => new Promise((resolve, reject) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  const mailOptions = {
    from: `${email}`,
    to: process.env.EMAIL,
    subject: `Message from ${email}`,
    text: `${message}.....${name}`,
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      return reject({ message: 'Something went wrong' });
    }
    return resolve({ message: 'Email sent successfully' });
  });
});

app.get('/', (req, res) => {
  sendEmail()
    .then((response) => res.send(response.message))
    .catch((error) => res.status(500).send(error.message));
});

app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;
  sendEmail(name, email, message)
    .then((response) => res.send(response.message))
    .catch((error) => res.status(500).send(error.message));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
