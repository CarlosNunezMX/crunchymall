import { Hono } from "hono";
import { Info, InfoReq, InfoResponse } from "../../../docs/typescript/Info.js";
import { Fields } from "../../../docs/typescript/Common.js";
import { GetAnimeInfo, GetResources } from "@carlosnunezmx/animeflv";
import { OkRUSources } from "../../utils/okru.js";

export const InfoRouter = new Hono();

function ParseProps(props: string): Fields[] {
    // @ts-ignore
    return props.split(', ');
}


InfoRouter.post('/', async c => {
    // @ts-ignore
    const body: InfoReq = await c.req.parseBody()
    let Response: Partial<Info> = {};
    let Props = ParseProps(body.fields);
    const AnimeDetails = await GetAnimeInfo(body.series_id);

    if (Props.includes('media.premium_available'))
        Response.premium_available = true
    if (Props.includes('media.free_available'))
        Response.free_available = true
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
        Response.name = AnimeDetails.Title
    console.log(body);

    if (body.media_id) {
        const episodeServers = await GetResources(body.media_id);
        let okRU;
        if (episodeServers.LAT) {
            okRU = episodeServers.LAT.find(e => e.server === 'okru')
        }
        else {
            okRU = episodeServers.SUB.find(e => e.server === 'okru');
        }

        const okRU_url = okRU?.code.replace('embed', '') ?? "";
        let sources = await OkRUSources(okRU_url);

        if (Props.includes('media.episode_number'))
            Response.episode_number = Number(body.media_id.split('-').pop());

        if (Props.includes('media.stream_data')) {
            if(sources){
                Response.stream_data = {
                    format: 'mp4',
                    streams: sources.map(source => ({
                        quality: source.quality,
                        url: process.env["PROXY_SERVER"] + btoa(source.url),
                        video_id: body.media_id,
                        video_encode_id: body.media_id
                    }))
                }
            }
        }

    }
    return c.json<InfoResponse>({
        data: Response
    })
})