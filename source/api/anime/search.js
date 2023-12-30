import { Router } from 'express'
import { Search } from '@carlosnunezmx/animeflv'
import { ConvertName2Crunchyroll } from './utils/type.js';

export const SearchRouter = Router();

SearchRouter.post('/', async (req, res) => {
    /** @type {import('./search.js').SearchQuery} */
    let body = req.body;
    let Results = await Search(body.q);
    console.log(Results);
    if (body.media_types == "anime") {
        return res.json({
            data: Results.map(
                (serie) => ({
                    series_id: serie.Id,
                    portrait_image: {
                        full_url: serie.Image,
                    },
                    name: serie.Title,
                    in_queue: false
                }))
        })
    }
})