import MailProvider from '../providers/mail.provider';

const _mail = MailProvider;

const sendMail = (mailData: { name: string, email: string, subject: string, message: string }): void => {
    void _mail.sendMail({
        from: `School <info@test.com>`,
        to: `${mailData.name} <${mailData.email}>`,
        subject: mailData.subject,
        text: mailData.message,
        html: `<h1>${mailData.subject}</h1><br><p>${mailData.message}</p>`
    });
}

export { sendMail };