import brevo from '@getbrevo/brevo'

const apiInstance = new brevo.TransactionalEmailsApi();
const KEY = process.env?.BREVO_API_KEY as string

const EMAIL_ACADEMY='erneskrlos@gmail.com'
const NAME_ACADEMY='Anys Academy'
const EMAIL_VERIFY='erneskrlos@gmail.com'
const NAME_VERIFY='Anys Academy'

// Asegúrate de que KEY no sea 
const validateKey = () => {

    if (!KEY) {
        console.error("Error: BREVO_API_KEY no está definida.");
        // Considera lanzar un error o manejar esta situación apropiadamente
       return 'error'
    } else {
         apiInstance.setApiKey(
            brevo.TransactionalEmailsApiApiKeys.apiKey,
            KEY
        );
        return 'ok'
    }
}





interface EmailPorps {
    emailPerson: string;
    namePerson: string;
    subject: string;
    body: string;
}


export async function SendEmail({ body, subject, emailPerson, namePerson }: EmailPorps) {
    if (validateKey() === 'error' ) {
        return {
            code: 500,
            message: 'Error sending email',
            data: null
        }
    } 
    const smtpEmail = new brevo.SendSmtpEmail();
    
    smtpEmail.subject = subject;
    smtpEmail.to = [{ email: EMAIL_ACADEMY, name: NAME_ACADEMY }];
    smtpEmail.htmlContent =  body;
    smtpEmail.sender = { name: NAME_VERIFY, email: EMAIL_VERIFY };
    smtpEmail.replyTo = { name: namePerson, email: emailPerson  };

    await apiInstance.sendTransacEmail(smtpEmail).then((data)=> {
        console.log('API called successfully. Returned data: ' + JSON.stringify(data))
        return {
            code: 200,
            message: 'Email sent successfully',
            data: data
        }
    }).catch((error) => {
        console.log("Erroro", error.body)
        return {
            code: 500,
            message: 'Error sending email',
            data: null
        }
    });
}
