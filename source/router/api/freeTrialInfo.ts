import { randomUUID } from "crypto";
import { Hono } from "hono";

export const FreeTrialInfoRouter = new Hono()

FreeTrialInfoRouter.post('/', c => {
    return c.json({
        data: {
            auth: "OK",
            user: {
                user_id: randomUUID(),
                username: Math.random().toString(),
                email: 'test@gmail.com',
                premium: true,
                first_name: 'Carlos',
                last_name: 'Nunez'
            }
        }
    })
})