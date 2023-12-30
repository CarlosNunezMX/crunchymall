import { Router } from "express";

export const VersionRouter = Router();

VersionRouter.post('/', (req, res) => {
    return res.json({
        version: '2024.1.1',
        "app-url": "http://192.168.100.206:4000/api"
    })
})