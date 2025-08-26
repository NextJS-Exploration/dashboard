import nodemailer from 'nodemailer';

export async function sendActivationEmail(to: string, firstName: string, lastName: string, token: string) {
    const message = {
        from: `Learning Platform <${process.env.SMTP_USER}>`,
        to,
        subject: 'Learning Platform Activation',
        html: `
            <p>Hello ${firstName} ${lastName},</p>
            <p>Please confirm to activate your account by clicking the button or link below.</p>
            <a style="
                display: inline-block; 
                padding: 10px 20px; 
                background-color: #20c000ff; 
                color: white;
                text-decoration: none;
                border-radius: 5px;
            " href="${process.env.ROOT_URL}/activate/${token}">Confirm my email</a><br>
            <a href="${process.env.ROOT_URL}/activate/${token}">${process.env.ROOT_URL}/activate/${token}</a>
        `,
        headers: {
            "X-Entity-Ref-ID": "newmail",
        }
    };

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASSWORD
        },
        tls: {
            rejectUnauthorized: false,
        }
    });

    await transporter.sendMail(message);
}