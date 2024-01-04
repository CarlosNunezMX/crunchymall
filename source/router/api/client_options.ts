import { Hono } from "hono";
import { ClientOptionsResponse } from "../../../docs/typescript/ClientOptions.js";

export const ClientOptionsRouter = new Hono();
ClientOptionsRouter.post('/', c => {
    return c.json<ClientOptionsResponse>({
        data: [
            {
                name: "feature_matrix",
                view_count_between_upsell: 1
            }
        ]
    })
})