import { Response } from "./Common.js";

export type CategoriesResponse = Response<{
    genre: {
        tag: string;
        label: string;
    }[]
}>