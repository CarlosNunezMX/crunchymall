import { CollectionFields, MediaFields, SeriesFields } from "./fields.js";
export type Fields = SeriesFields | CollectionFields | MediaFields;
export type MediaType = "anime" | "drama";
export type CommonQuery = {
    media_types: MediaType;
    fields: Fields;
    session_id: string;
    // TODO: Make a type with all locales.
    locale: string;
}
export type Response<Data> = {
    data: Data;
}