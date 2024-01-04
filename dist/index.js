import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { logger } from "hono/logger";
import { Router } from "./router/router.js";
const App = new Hono();
App.route('/', Router);
App.use("*", logger());
serve(App);
