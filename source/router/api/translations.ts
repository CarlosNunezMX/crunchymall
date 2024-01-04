import { Hono } from "hono";
import { ListLocales } from "../../translations/listTranslations.js";
import { LocaleItem, LocaleResponse } from "../../../docs/typescript/ListLocales.js";
import { CommonQuery } from "../../../docs/typescript/Common.js";
import { TranslationsResponse } from "../../../docs/typescript/Translations.js";
export const ListTranslationsRouter = new Hono();

ListTranslationsRouter.post('/', c => {
    return c.json<LocaleResponse>({
        data: ['esLA', 'esMX', 'enUS'].map(e => ({locale_id: e}))
    })    
})

export const TranslationsRouter = new Hono();

TranslationsRouter.post('/', async c => {
    let Locales = await ListLocales();
    // @ts-ignore
    let x: CommonQuery = await c.req.parseBody()
    console.log(x);
    
    const trans = x.locale.slice(0, 2);

    const res_locale = Locales.find(e => e.lang === trans);
    if(!res_locale)
        return c.json<TranslationsResponse>({
            data: Locales[0].translation
        })
    return c.json<TranslationsResponse>({
        data: res_locale.translation
    })
})