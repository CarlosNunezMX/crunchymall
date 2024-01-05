import { CommonQuery, Response } from "./Common.js";

export interface ListMediaRequest extends CommonQuery {
    limit: number;
    series_id: string;
}

export type ListMediaItem = {
    series_id: string;
    playhead: number;
    collection_name: string,
    episode_number: number,
    name: string,
    collection_id: string,
    available: boolean,
    description: string,
    screenshot_image: {
        fwidestar_url: string,
        fwide_url: string
    },
    media_id: string,
    free_available: boolean,
    premium_available: boolean,
    premium_only: boolean,
}

export type ListMediaResponse = Response<ListMediaItem[]>