import { CollectionFields, MediaFields, SeriesFields } from "./fields";

export type MediaType = "anime" | "drama";
export type CommonQuery = {
    media_types: MediaType;
    fields: SeriesFields | CollectionFields | MediaFields;
    session_id: string;
    // TODO: Make a type with all locales.
    locale: string;
}
export type Response<Data> = {
    data: Data;
}