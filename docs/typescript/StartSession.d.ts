import e from "express";
import { Response } from "./Common";

export type SessionRequest = {
    auth: unknown;
    /**
     * Format **x.x**
     */
    version: "0.3";
    locale: string;
    device_type: "com.crunchyroll.wiiu";
    access_token: string;
    device_id: string;
}

export type Session = {
    session_id: string;
    auth?: {
        user: {
            email: string;
            first_name: string;
            last_name: string;
            premium: boolean;
            user_id: string;
            username: string;
        }
    }
}


export type SessionResponse = Response<Session>