import { Response } from "./Common.js";

export type LocaleItem = {
    locale_id: string;
}

export type LocaleResponse = Response<LocaleItem[]>