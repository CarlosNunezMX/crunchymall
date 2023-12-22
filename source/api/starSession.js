import { Router } from "express";

export const SessionRouter = Router();

SessionRouter.post('/', (req, res) => {
    console.log(req.headers);
    return res.json({
        data: {
            session_id: Math.random().toString(32),
            auth: {
                user: Math.random().toString(32),
            }
        }
    })
})