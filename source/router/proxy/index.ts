import { Hono } from "hono";

export const ProxyRouter = new Hono();
ProxyRouter.get('/', (c) => {
    let todo = c.req.query("todo");
    let url = c.req.query('url')
    if(todo) url = atob(todo);
    if(!todo && !url)
        return c.text('not fount!', 400)
    return fetch(url ?? "", {
        headers: {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 Edg/120.0.0.0"
        }
    });

})