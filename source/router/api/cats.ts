import {Search} from "@carlosnunezmx/animeflv";
import { Hono } from "hono";
import { CategoriesResponse } from "../../../docs/typescript/Categories.js";

export const CatsRouter = new Hono();
CatsRouter.post('/', c => {
    return c.json<CategoriesResponse>({
        data: {
            genre: []
        }
    })
})