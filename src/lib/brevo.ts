import * as brevo from '@getbrevo/brevo'

let apiInstance: brevo.TransactionalEmailsApi | null = null;
const KEY = process.env?.BREVO_API_KEY as string
let isBrevoInitialized = false;
const EMAIL_ACADEMY= process.env?.EMAIL_ACADEMY as string
const NAME_ACADEMY='Anys Academy'
const EMAIL_VERIFY= process.env?.EMAIL_VERIFY as string
const NAME_VERIFY='Anys Academy'

if (!KEY) {
    console.error("CRITICAL ERROR: BREVO_API_KEY no está definida en las variables de entorno.");
    // Aquí podrías incluso lanzar un error para detener el inicio si es crítico
    // throw new Error("BREVO_API_KEY is not defined");
} else if (!EMAIL_ACADEMY || !EMAIL_VERIFY) {
    console.error("CRITICAL ERROR: EMAIL_ACADEMY o EMAIL_VERIFY no están definidas.");
}
else {
    try {
        apiInstance = new brevo.TransactionalEmailsApi(); // Ahora debería funcionar con el import *
        apiInstance.setApiKey(
            brevo.TransactionalEmailsApiApiKeys.apiKey,
            KEY
        );
        isBrevoInitialized = true;
        console.log("Cliente Brevo inicializado correctamente.");
    } catch (error) {
        console.error("Error al inicializar el cliente Brevo:", error);
        // Mantener apiInstance como null y isBrevoInitialized como false
    }
}

// Asegúrate de que KEY no sea  
/*const validateKey = () => {

    if (!KEY) {
        // console.error("Error: BREVO_API_KEY no está definida.");
        // Considera lanzar un error o manejar esta situación apropiadamente
       return 'error'
    } else {
         apiInstance.setApiKey(
            brevo.TransactionalEmailsApiApiKeys.apiKey,
            KEY
        );
        return 'ok'
    }
} */





interface EmailPorps {
    emailPerson: string;
    namePerson: string;
    subject: string;
    body: string;
}


export async function SendEmail({ body, subject, emailPerson, namePerson }: EmailPorps) {
    if (!isBrevoInitialized || !apiInstance) {
        console.error("Error: Intento de enviar email pero Brevo no está inicializado correctamente (falta API Key o hubo un error previo).");
        return {
            code: 500,
            message: 'Error interno del servidor al configurar el servicio de correo.',
            data: null
        };
    }
    const smtpEmail = new brevo.SendSmtpEmail();
    
    smtpEmail.subject = subject;
    smtpEmail.to = [{ email: EMAIL_ACADEMY, name: NAME_ACADEMY }];
    smtpEmail.htmlContent =  body;
    smtpEmail.sender = { name: NAME_VERIFY, email: EMAIL_VERIFY };
    smtpEmail.replyTo = { name: namePerson, email: emailPerson  };

    const response = await apiInstance.sendTransacEmail(smtpEmail).then((data)=> {
        // console.log('API called successfully. Returned data: ' + JSON.stringify(data))
        return {
            code: 200,
            message: 'Correo enviado satisfactoriamente',
            data: data
        }
    }).catch((error) => {
        console.log("Erroro", error.body)
        return {
            code: 500,
            message: 'No se pudo enviar el correo. Intente más tarde.',
            data: null
        }
    });

    return response;
}
