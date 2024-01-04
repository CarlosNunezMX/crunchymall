/**
 * @author CarlosNunezMX
 * @description Types for searching, it includes the base search query, it hasn't types for genres and drama
 */
import { CommonQuery,  Response } from "./Common.js";

export interface SearchQuery extends CommonQuery {
    /**
     * @description **This is your query**
     */
    q: string;
    /**
     * @description Filter for genres
     */
    classes: string;
}

export type SearchItem = {
    in_queue: boolean;
    name: string;
    portrait_image: {
        full_url: string;
    };
    series_id: string;
}

export type SearchResult = Response<SearchItem[]>;