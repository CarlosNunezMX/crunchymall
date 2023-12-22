import {Router} from 'express'
import { VersionRouter } from './version.js';
import { SessionRouter } from './starSession.js';
import {LocaleRouter} from './list_locales.js'
import { TranslationsRouter } from './translations.js';
import { ClientOptionsRouter } from './clientOptions.js';
import { AnimeRouter } from './anime/animes.js';

export const APIRouter = Router();
APIRouter.use('/start_session.json', SessionRouter);
APIRouter.use('/version', VersionRouter);
APIRouter.use('/list_locales.json', LocaleRouter)
APIRouter.use('/translations.json', TranslationsRouter)
APIRouter.use('/client_options.json', ClientOptionsRouter)
APIRouter.use('/list_series.json', AnimeRouter)