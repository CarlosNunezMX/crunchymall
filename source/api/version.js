import { Router } from "express";

export const VersionRouter = Router();

VersionRouter.post('/', (req, res) => {
    return res.json({
        version: 2024,
    })
})