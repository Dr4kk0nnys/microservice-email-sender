import { Router } from "express";
const router = Router();

router.post('/send-mail', async (req, res) => {
    return res.status(200).json({
        success: true
    });
});

export { router };