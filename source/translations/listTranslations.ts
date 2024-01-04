import { readdirSync } from "fs"
import { resolve } from "path";
import { Translations } from "../../docs/typescript/Translations.js";


export async function ListLocales() {
    const currentDirectory = process.cwd();
    const TranslationDirectory = resolve(currentDirectory, "dist", "translations");
    const files = readdirSync(TranslationDirectory, { encoding: "utf-8" })
        .filter(e => !e.startsWith('listTranslations'))
    let Res: { lang: string, translation: Translations }[] = [];

    for (let i = 0; i < files.length; i++) {
        let filename = files[i];
        const importURL = `./${filename}`;
        const imported = (await import(importURL));
        Res.push({
            translation: imported["translations"],
            lang: filename.replace('.js', '')
        });
    }
    return Res;
}
