import { Hono } from "hono";

export const ListAdsRouter = new Hono();
ListAdsRouter.post('/', (c) => {
    return c.json({
        data: {
            ad_slots: []
        }
    })
})