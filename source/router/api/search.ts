import { Search } from "@carlosnunezmx/animeflv";
import type { SearchItem, SearchQuery, SearchResult } from "../../../docs/typescript/Search.js";
import { Hono } from "hono";
import { HomeElement } from "@carlosnunezmx/animeflv/types/scrappers/main_page.js";

export const SearchRouter = new Hono();

SearchRouter.post('/', async c => {
    // @ts-ignore
    const { q }: SearchQuery = await c.req.parseBody();
    if (!q)
        return c.json<SearchResult>({
            data: []
        })
    // @ts-ignore
    const data: HomeElement[] = await Search(q)
    return c.json<SearchResult>({
        data: data.map(serie => ({
            in_queue: false,
            name: serie.Title,
            portrait_image: {
                full_url: serie.Image
            },
            series_id: serie.Id
        }))
    })
})