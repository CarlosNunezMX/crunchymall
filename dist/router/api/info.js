import { Hono } from "hono";
import { GetAnimeInfo } from "@carlosnunezmx/animeflv";
export const InfoRouter = new Hono();
function ParseProps(props) {
    // @ts-ignore
    return props.split(', ');
}
InfoRouter.post('/', async (c) => {
    // @ts-ignore
    const body = await c.req.parseBody();
    let Response = {};
    let Props = ParseProps(body.fields);
    const AnimeDetails = await GetAnimeInfo(body.series_id);
    if (Props.includes('series.portrait_image'))
        Response.portrait_image = {
            full_url: AnimeDetails.Image,
            fwide_url: AnimeDetails.Image,
            fwidestar_url: AnimeDetails.Image
        };
    if (Props.includes('series.description'))
        Response.description = AnimeDetails.Title;
    if (Props.includes('series.media_count'))
        Response.media_count = AnimeDetails.Episodes.length;
    if (Props.includes('series.in_queue'))
        Response.in_queue = false;
    if (Props.includes('series.year'))
        Response.year = 9999;
    if (Props.includes('series.publisher_name'))
        Response.publisher_name = "Comming Soon...";
    if (Props.includes('series.name'))
        Response.name = AnimeDetails.Title;
    return c.json({
        data: Response
    });
});
