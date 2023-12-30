import { GetAnimeInfo } from "@carlosnunezmx/animeflv";
import { Router } from "express";

export const InfoRouter = Router();
InfoRouter.post('/', async (req, res) => {
    /**@type {import("./utils/types").fields} */
    let {fields} = req.body;
    if(fields === "series.portrait_image"){
        let {series_id} = req.body;
        let {Image} = await GetAnimeInfo(series_id);

        return res.json({
            data: {
                portrait_image: {
                    full_url: Image
                }
            }
        })
    }
    console.log(req.body);
    res.json({
        'ok': true
    })
})