'use server'
import { SendEmail } from '@/lib/brevo'

interface EmailPorps {
    
    subject: string;
    message: string;
    emailPerson: string;
    namePerson: string;
    phone: string
}

/* interface EmailSendPorps {
    from: string;
    to: string;
    subject: string;
    body: string;
} */

export async function procesSendEmail({ subject, message, emailPerson, namePerson, phone }: EmailPorps) {
    
    console.log('procesando envio de correo')
    
    try {
        await SendEmail({
            emailPerson: emailPerson,
            namePerson: namePerson,
            subject: subject,
            body: `<html>
        <body>
            <h1>Nuevo mensaje recibido desde el formulario de contacto</h1>
            <p><strong>Nombre:</strong> ${namePerson}</p>
            <p><strong>Email:</strong> ${emailPerson}</p>
            ${phone ? `<p><strong>Teléfono:</strong> ${phone}</p>` : ''}
            <hr>
            <p><strong>Mensaje:</strong></p>
            <p>Mensaje:${message}</p>   
            </body>
        </html>`
        }); // replace()
        console.log("envio el correo")
    } catch (error) {
    console.log(error)
        return {
            code: 500,
            message: 'A ocurrido error. Interte mas tarde',
            data: null
        };
        
    }
}

/* async function veriafyEmail(transporter: Transporter) {
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
} */