import express from 'express';
import nodemailer from 'nodemailer';
const app = express();
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
const port = 5000;

app.use(cors());
app.use(express.json({ limit: '100mb' }));
app.use(express.urlencoded({ limit: '100mb' }));

const sendEmail = ( name, email, message) => {
  return new Promise((resolve, reject) => {
    var transporter = nodemailer.createTransport({
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
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
            return reject({message: 'Something went wrong'});
        } 
        return resolve({message: 'Email sent successfully'});
        });
    });
}

app.get('/', (req, res) => {
    sendEmail()
    .then(response => res.send(response.message))
    .catch(error => res.status(500).send(error.message));
});

app.post('/send-email', (req, res) => {
    const { name, email, message } = req.body;
    sendEmail(name, email, message)
    .then(response => res.send(response.message))
    .catch(error => res.status(500).send(error.message));
});

app.listen(port, () => { 
    console.log(`Server is running on port ${port}`);
});

