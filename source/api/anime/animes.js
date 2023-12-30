import { Router } from 'express'
import { GetHome } from '@carlosnunezmx/animeflv'
import { ConvertName2Crunchyroll } from './utils/type.js';

export const AnimeRouter = Router();

AnimeRouter.post('/', async (req, res) => {
    let { media_type, filter } = req.body;
    let homePage = await GetHome();
    res.json(
        {data: homePage.Series.map((e) => {
            return ({
                name: e.Title,
                description: e.Description,
                portrait_image: {
                    large_url: e.Image
                },
                series_id: e.Id,
                media_type: ConvertName2Crunchyroll(e.Type),
                in_queue: false
                
            })
        })}
    )
})