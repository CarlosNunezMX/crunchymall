import { Hono } from "hono";
import { GetAnimeInfo } from "@carlosnunezmx/animeflv";
export const ListMediaRouter = new Hono();
ListMediaRouter.post('/', async (c) => {
    // @ts-ignore
    const { series_id, limit } = await c.req.parseBody();
    const info = await GetAnimeInfo(series_id);
    return c.json({
        data: info.Episodes.map((episode, i) => ({
            series_id: info.Id,
            collection_name: info.Title,
            episode_number: i + 1,
            name: info.Title,
            collection_id: info.Id,
            available: true,
            description: info.Description,
            screenshot_image: {
                fwidestar_url: episode.Image,
                fwide_url: episode.Image
            },
            media_id: episode.Id,
            free_available: true,
            premium_available: true,
            premium_only: false,
        }))
    });
});
