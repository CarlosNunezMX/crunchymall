import { Hono } from 'hono';
export const VersionRouter = new Hono();
VersionRouter.post("/", (ctx) => {
    return ctx.json({
        version: "2024.1.1"
    });
});
