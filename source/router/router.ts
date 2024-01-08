import {Hono} from "hono";
import { API_ROUTER } from "./api/router.js";
import { ProxyRouter } from "./proxy/index.js";
export const Router = new Hono();

// = Index Route
Router.get('/', c => {
    return c.json({
        status: "I'm alive :D"
    });
})

// === API Router
Router.route('/api', API_ROUTER)

// === Proxy router
Router.route('/proxy', ProxyRouter);