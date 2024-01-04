import { CommonQuery, Response } from "./Common";

export interface SeriesPortraitImage_InfoReq extends CommonQuery {
    series_id: string;
}

export type SeriesPortraitImage_Info = {
    portrait_image: {
        full_url: string;
    } 
}

export type SeriesPortraitImage_InfoResponse = Response<SeriesPortraitImage_Info>;