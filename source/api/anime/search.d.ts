import { BasicQuery } from "./utils/types";

export interface SearchQuery extends BasicQuery {
    media_types: "anime",
    classes: 'series',
    q: string,
}