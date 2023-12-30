import { Router } from "express";
import { GetAnimeInfo } from '@carlosnunezmx/animeflv'
export const EpisodeRouter = Router();

EpisodeRouter.post('/', async (req, res) => {
    let { series_id } = req.body;
    let info = await GetAnimeInfo(series_id);
    return res.json({
        data: info.Episodes.map((episode, i) => ({
            series_id: info.Id,
            collection_name: info.Title,
            episode_number: i + 1,
            name: info.Title,
            collection_id: info.Id,
            available: true,
            description: info.Description,
            screenshot_image: {
                fwidestar_url: !req.isWiiU ? episode.Image : process.env["PROXY_SERVER"] + `?url=${episode.Image}`,
                fwide_url: !req.isWiiU ? episode.Image : process.env["PROXY_SERVER"] + `?url=${episode.Image}`
            },
            media_id: episode.Id,
            free_available: true,
            premium_available: true,
            premium_only: false,
            episode_number: i + 1,
        }))
    })
})