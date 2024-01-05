import { CommonQuery, MediaType, Response } from "./Common.js";

export interface InfoReq extends CommonQuery {
    series_id: string;
    media_id: string;
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
    };
    free_available: boolean;
    premium_available: boolean;
    media_type: MediaType;
    stream_data: {
        format: 'hls' | 'mp4',
        streams: {
            quality: string;
            url: string;
            video_id: string;
            video_encode_id: string;
        }[]
    };
    episode_number: number
}

export type InfoResponse = Response<Partial<Info>>;