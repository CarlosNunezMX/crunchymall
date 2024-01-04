import { Hono } from "hono";
import { ListSerieItem, ListSeriesRequest, ListSeriesResponse } from "../../../docs/typescript/Anime.js";
import { GetNewSeries } from "@carlosnunezmx/animeflv"
export const SeriesRouter = new Hono();
SeriesRouter.post('/', async ctx => {
    // @ts-ignore
    let body: ListSeriesRequest = await ctx.req.parseBody();
    return ctx.json<ListSeriesResponse>({
        data: (await GetNewSeries()).map(e => ({
            description: e.Description,
            in_queue: false,
            media_type: "series",
            name: e.Title,
            portrait_image: {
                large_url: e.Image
            },
            series_id: e.Id
        }))
    })
})