import { saveLog } from "controllers/database";
import { Router } from "express";
import { sendMail } from "services/sendMail";
const router = Router();

router.post('/send-mail', async (req, res) => {

    const { subject, body, to } = req.body;

    await sendMail({ subject, body, to });

    await saveLog({ subject, body, to, date: new Date() });

    return res.status(200).json({ success: true });
});

export { router };