'use server'
import { SendEmail } from '@/lib/brevo'

interface EmailPorps {
    
    subject: string;
    messagePerson: string;
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

export async function procesSendEmail({ subject, messagePerson, emailPerson, namePerson, phone }: EmailPorps) {
    
    console.log('procesando envio de correo')
    
    try {
        const response = await SendEmail({
            emailPerson: emailPerson,
            namePerson: namePerson,
            subject: subject,
            body: `<html>
            <head>
              <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>Nuevo Mensaje de Contacto</title>
              <style type="text/css">
                body { margin: 0; padding: 0; font-family: sans-serif; }
                table { border-collapse: collapse; } 
              </style>
            </head>
            <body style="margin: 0; padding: 0; background-color: #f4f4f4;"> <!-- Opcional: color de fondo general -->
              <table width="100%" border="0" cellspacing="0" cellpadding="0">
                <tr>
                  <td align="center">
                    <table width="600" border="0" cellspacing="0" cellpadding="20" style="background-color: #ffffff; max-width: 600px;"> <!-- Tabla contenedora principal -->
                      <tr>
                        <td>
                          <h1>Nuevo mensaje recibido desde el formulario de contacto</h1>
                          <p><strong>Nombre:</strong> ${namePerson}</p>
                          <p><strong>Correo:</strong> ${emailPerson}</p>
                          ${phone ? `<p><strong>Teléfono:</strong> ${phone}</p>` : ''}
                          <hr>
                          <p><strong>Mensaje:</strong></p>
                          <p>${messagePerson.replace(/\n/g, '<br>')}</p>
                          <br>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td align="center">
                    <!-- Contenedor para la imagen de pie de página -->
                    <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: rgb(106, 158, 218); max-width: 600px;"> <!-- Limita el ancho máximo si es necesario -->
                        <tr>
                            <td align="center" style="padding: 20px 0;">
                                <img
                                    src="https://anyslacademy.com/resources/images/Logo_Footer.png"
                                />
                            </td>
                        </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </body>
        </html>`
        });
        const { code , message} = response
        console.log('Se ha enviado el correo correctamente')
        return {
          code, message
        };
    } catch (error) {
        console.log(error)
        return {
            code: 500,
            message: 'A ocurrido error. Interte mas tarde',
            data: null
        };
    }
}

