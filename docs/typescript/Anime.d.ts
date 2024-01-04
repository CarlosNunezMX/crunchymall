/**
 * @author CarlosNunezMX
 * @description Type declarations for `/api/list_series.json`, where you could find
 *              declarations for responses in homescreen for anime and drama(pending)
 * @license MIT
*/

import { Response, MediaType, CommonQuery } from "./Common.js";

export type Filter = "popular" | "simulcast" | "updated" | "alpha";

export interface ListSeriesRequest extends CommonQuery {
    filter: Filter;
    limit: number;
}

export type ListSeriesResponse = Response<ListSerieItem[]>

export type ListSerieItem = {
    description: string;
    name: string;
    media_type: string;
    in_queue: boolean;
    series_id: string;
    portrait_image: {
        large_url: string;
    };
}