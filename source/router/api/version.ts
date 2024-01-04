import { Hono } from 'hono'
import type {VersionRequest, VersionResponse} from '../../../docs/typescript/Version.js'

export const VersionRouter = new Hono()
VersionRouter.post("/", (ctx) => {
    return ctx.json<VersionResponse>({
        version: "2024.1.1"
    });
})