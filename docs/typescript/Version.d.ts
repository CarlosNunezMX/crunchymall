import { CommonQuery } from "./Common";

export interface VersionRequest extends CommonQuery{
    accessToken: string;
    deviceType: "com.crunchyroll.wiiu";
};

export type VersionResponse = {
    "app-url"?: string;
    /**
     * Use this format **x.x.x**
     */
    version: string;
};