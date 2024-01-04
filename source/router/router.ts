import {Hono} from "hono";
import { API_ROUTER } from "./api/router.js";
export const Router = new Hono();


// === API Router
Router.route('/api', API_ROUTER)