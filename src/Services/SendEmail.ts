'use server'
import nodemailer, { Transporter } from 'nodemailer';

interface EmailPorps {
    to: string;
    subject: string;
    body: string;
}

interface EmailSendPorps {
    from: string;
    to: string;
    subject: string;
    body: string;
}

export async function procesSendEmail({ to, subject, body }: EmailPorps) {
    const SMTP_EMAIL = ''; // process.env.SMTP_EMAIL;
    const SMTP_PASSWORD = '' // process.env.SMTP_PASSWORD;
    console.log(SMTP_PASSWORD, SMTP_EMAIL)
    if (!SMTP_EMAIL || !SMTP_PASSWORD) {
        throw new Error('Los valores de SMTP no estan definidos');
    } else {
        const transporter = nodemailer.createTransport({
            host: 'gmail',
            auth: {
                user: SMTP_EMAIL,
                pass: SMTP_PASSWORD
            }
        });

        const resultEmialVerifed = veriafyEmail(transporter)

        console.log(resultEmialVerifed)
    

        const resultEmailSended = await sendEmail({
            from: SMTP_EMAIL,
            to: to,
            subject: subject,
            body: body
        }, transporter)
    
        console.log(resultEmailSended)
    }
}

async function veriafyEmail(transporter: Transporter) {
    try {
        const testResult = await transporter.verify();
        return testResult;
    } catch (error) {
        console.log(error)
        return;
    }
}

async function sendEmail({ from, to, subject, body }: EmailSendPorps, transporter: Transporter) {
    try {
        const sendResult = await transporter.sendMail({
            from: from,
            to: to,
            subject: subject,
            html: body
        })
        return sendResult;
    } catch (error) {
        console.log(error)
        return;
    }
}