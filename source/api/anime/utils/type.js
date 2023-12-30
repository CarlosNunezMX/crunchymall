export function ConvertName2Crunchyroll(name){
    let conversions = {
        "Anime": 'series',
        "OVA": 'series',
        "Especial": 'series'
    }

    return conversions[name] ?? name;
}
