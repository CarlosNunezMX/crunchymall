import { Hono } from "hono";
import { VersionRouter } from './version.js'
import { SessionRouter } from "./startSession.js";
import { SeriesRouter } from "./listSeries.js";
import { SearchRouter } from "./search.js";
import { cors } from "hono/cors";
import { ListTranslationsRouter, TranslationsRouter } from "./translations.js";
import { CatsRouter } from "./cats.js";
import { ClientOptionsRouter } from "./client_options.js";
import { InfoRouter } from "./info.js";
import { ListMediaRouter } from "./list_media.js";

export const API_ROUTER = new Hono()

API_ROUTER.use('*', cors())
API_ROUTER.route('/version', VersionRouter)
API_ROUTER.route('/start_session', SessionRouter)
API_ROUTER.route('/list_series', SeriesRouter)
API_ROUTER.route('/search', SearchRouter)
API_ROUTER.route('/list_locales', ListTranslationsRouter)
API_ROUTER.route('/translations', TranslationsRouter)
API_ROUTER.route('/categories', CatsRouter)
API_ROUTER.route('/client_options', ClientOptionsRouter)
API_ROUTER.route('/info', InfoRouter)
API_ROUTER.route('/list_media', ListMediaRouter)
