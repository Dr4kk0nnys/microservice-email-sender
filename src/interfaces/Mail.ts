export default interface Mail {
    to: string | string[];
    subject: string;
    body: string;
}