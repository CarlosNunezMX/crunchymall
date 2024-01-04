import { Search } from "@carlosnunezmx/animeflv";
import { Hono } from "hono";
export const SearchRouter = new Hono();
SearchRouter.post('/', async (c) => {
    // @ts-ignore
    const { q } = await c.req.parseBody();
    if (!q)
        return c.json({
            data: []
        });
    // @ts-ignore
    const data = await Search(q);
    return c.json({
        data: data.map(serie => ({
            in_queue: false,
            name: serie.Title,
            portrait_image: {
                full_url: serie.Image
            },
            series_id: serie.Id
        }))
    });
});
