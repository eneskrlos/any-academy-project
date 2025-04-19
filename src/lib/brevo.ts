import brevo from '@getbrevo/brevo'

const apiInstance = new brevo.TransactionalEmailsApi();
const kEY = process.env?.BREVO_API_KEY as string
apiInstance.setApiKey(
    brevo.TransactionalEmailsApiApiKeys.apiKey,
    kEY
)

const smtpEmail = new brevo.SendSmtpEmail();

interface EmailPorps {
    emailPerson: string;
    namePerson: string;
    subject: string;
    body: string;
}


export async function SendEmail({ body, subject, emailPerson, namePerson }: EmailPorps) {
    console.log('aqui entro')
    smtpEmail.subject = subject;
    smtpEmail.to = [{ email: 'erneskrlos@gmail.com', name: 'Anys Academy' }];
    smtpEmail.htmlContent =  body; // '<html><body><h1>This is a test HTML sent from Brevo</h1></body></html>';
    smtpEmail.sender = { name: 'Ernesto', email: 'ernesdevkrlos@gmail.com' };
    smtpEmail.replyTo = { email: namePerson, name: emailPerson };
    await apiInstance.sendTransacEmail(smtpEmail).then((data)=> {
        console.log('API called successfully. Returned data: ' + JSON.stringify(data))
    }).catch((error) => {
        console.log(error)
    });
}
