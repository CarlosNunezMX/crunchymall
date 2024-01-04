import { Hono } from "hono";
import { Session, SessionRequest, SessionResponse } from "../../../docs/typescript/StartSession.js";

export const SessionRouter = new Hono();
SessionRouter.post('/', async ctx => {
    const body = await ctx.req.parseBody()

    return ctx.json<SessionResponse>({
        data: {
            session_id: Math.random().toString(32)
        }
    })
})