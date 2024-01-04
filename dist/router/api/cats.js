import { Hono } from "hono";
export const CatsRouter = new Hono();
CatsRouter.post('/', c => {
    return c.json({
        data: {
            genre: []
        }
    });
});
