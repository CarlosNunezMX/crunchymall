import { Hono } from "hono";
import { ListLocales } from "../../translations/listTranslations.js";
export const ListTranslationsRouter = new Hono();
ListTranslationsRouter.post('/', c => {
    return c.json({
        data: ['esLA', 'esMX', 'enUS'].map(e => ({ locale_id: e }))
    });
});
export const TranslationsRouter = new Hono();
TranslationsRouter.post('/', async (c) => {
    let Locales = await ListLocales();
    // @ts-ignore
    let x = await c.req.parseBody();
    console.log(x);
    const trans = x.locale.slice(0, 2);
    const res_locale = Locales.find(e => e.lang === trans);
    if (!res_locale)
        return c.json({
            data: Locales[0].translation
        });
    return c.json({
        data: res_locale.translation
    });
});
