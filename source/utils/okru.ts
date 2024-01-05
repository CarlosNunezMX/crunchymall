import {parse} from 'node-html-parser'
type OkRuResponse = {
    url: string;
    title: string;
    thumbnail: string;
    duration: string;
    source: string;
    medias: {
        url: string;
        quality: string;
        extension: string;
        size: number;
        formattedSize: string;
        videoAvailable: boolean;
        audioAvailable: boolean;
        chunked: boolean;
        cached: boolean;
    }[]
}
const headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36',
    "Accept": "application/json",
    "Content-Type": "application/x-www-form-urlencoded"
}

export async function fastsavenow(){
    const url2req = "https://fastsavenow.com/okru-video-downloader/";
    const req = await fetch(url2req, {headers});
    let text = await req.text();
    const body = parse(text);
    const $token = body.querySelector('input#token');

    if(!$token)
         throw new Error('Cannot get token element from fastsavenow');
    
    const token = $token.getAttribute('value');
    if(!token)
        throw new Error('Cannot get token value from fastsavenow');
    return token;
}

export async function OkRUSources(url: string){
    const token = await fastsavenow();
    const body = new URLSearchParams({
        url,
        token
    }).toString();

    const data = await fetch('https://fastsavenow.com/wp-json/aio-dl/video-data/', {
        body,
        headers,
        method: "POST"
    });

    const parsed: OkRuResponse = await data.json();

    // find more quality
    const available = parsed.medias.filter(e => e.videoAvailable);
    if(available.length === 0)
        return;
    return available;
}