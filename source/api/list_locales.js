import {Router} from 'express'
export const LocaleRouter = Router();

LocaleRouter.post('/', (req, res) => {
    res.json([
        {
            locale_id: "esMX"
        }
    ])
})