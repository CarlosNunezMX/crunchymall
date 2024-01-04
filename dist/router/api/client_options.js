import { Hono } from "hono";
export const ClientOptionsRouter = new Hono();
ClientOptionsRouter.post('/', c => {
    return c.json({
        data: [
            {
                name: "feature_matrix",
                view_count_between_upsell: 1
            }
        ]
    });
});
