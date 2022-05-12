import AWS from 'aws-sdk';

import Mail from 'interfaces/Mail';

/* Configurations */
const SES_CONFIG = {
    accessKeyId: process.env.accessKeyId,
    secretAccessKey: process.env.secretAccessKey,
    region: 'us-west-2'
};
const AWS_SES = new AWS.SES(SES_CONFIG);

const sendMail = async ({ to, subject, body }: Mail) => {

    return AWS_SES.sendEmail({
        Source: process.env.EMAIL_SENDER,
        Destination: {
            ToAddresses: typeof (to) === 'string' ? [to] : to,
        },
        ReplyToAddresses: [],
        Message: {
            Body: {
                Html: {
                    Charset: 'UTF-8',
                    Data: body,
                },
            },
            Subject: {
                Charset: 'UTF-8',
                Data: subject,
            }
        },
    });

}

export { sendMail };