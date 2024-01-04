import { CommonQuery, Response } from "./Common.js";

export interface InfoReq extends CommonQuery {
    series_id: string;
}

export type Info = {
    description: string;
    in_queue: boolean;
    media_count: number;
    year: number;
    publisher_name: string;
    name: string;
    portrait_image: {
        full_url: string;
        fwidestar_url: episode.Image;
        fwide_url: episode.Image;
    } 
}

export type InfoResponse = Response<Partial<Info>>;