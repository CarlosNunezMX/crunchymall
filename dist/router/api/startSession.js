import { Hono } from "hono";
export const SessionRouter = new Hono();
SessionRouter.post('/', async (ctx) => {
    const body = await ctx.req.parseBody();
    return ctx.json({
        data: {
            session_id: Math.random().toString(32)
        }
    });
});
