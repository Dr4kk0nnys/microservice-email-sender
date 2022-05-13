import { saveLog } from "controllers/database";
import { Router } from "express";
import { sendMail } from "services/sendMail";
const router = Router();

router.post('/send-mail', async (req, res) => {

    await sendMail(req.body);
    await saveLog({ ...req.body, date: new Date() });

    return res.status(200).json(req.body);
});

export { router };