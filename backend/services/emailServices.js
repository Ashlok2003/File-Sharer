const nodemailer = require('nodemailer');

async function sendMail({ from, to, subject, text, html }) {
    let transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secure: false,
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS
        }
    });

    try {
        console.log('Inside the emailServices');
        await transporter.sendMail({
            from: `FileSharerx <${from}>`,
            to: to,
            subject: subject,
            text: text,
            html: html
        });

        // console.log('Message sent: %s', info.messageId);
        
    } catch (error) {
        // console.error('Error occurred while sending email:', error);
        throw error;
    }
}

module.exports = sendMail;
