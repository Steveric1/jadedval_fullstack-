const nodemailer = require('nodemailer');


const sendEmail = async (options) => {
    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secure: false,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        },
    });

    const mailOptions = {
        from: `jadedval <${process.env.EMAIL_USER}>`,
        to: options.email,
        subject: options.subject,
        html: options.html
    };

    try {
        await transporter.sendMail(mailOptions);
    } catch (error) {
        console.error('Error sending email:', error);
        throw new Error('Email not sent');
    }
};

module.exports = sendEmail;