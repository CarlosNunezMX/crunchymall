import { readdirSync } from "fs";
import { resolve } from "path";
export async function ListLocales() {
    const currentDirectory = process.cwd();
    const TranslationDirectory = resolve(currentDirectory, "dist", "translations");
    const files = readdirSync(TranslationDirectory, { encoding: "utf-8" })
        .filter(e => !e.startsWith('listTranslations'));
    let Res = [];
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
