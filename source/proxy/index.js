import { Router } from "express";
import fetch from "node-fetch"
import { Agent } from 'https'

const headers = {
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:122.0) Gecko/20100101 Firefox/122.0',
  'Content-Type': 'application/x-www-form-urlencoded',
};

export const routerProxy = Router();
const httpAgent = new Agent({
  rejectUnauthorized: false,

})
const getFetchHeader = async (headers) => {
  const data = {}
  for (let [key, value] of headers) {
    data[key] = value
  }
  return data
}

routerProxy.all("/", async (req, res) => {
  const { url } = req.query;
  const method = req.method;
  const headers = req.headers;
  const body = req.body;
  try {
    const response = await fetch(url, {
      method: method ?? "GET",
      headers: headers ?? {},
      body: (!!body) ? JSON.stringify(body) : "",
      insecureHTTPParser: true,
      agent: httpAgent
    });
    // Configura el tipo de contenido de la respuesta según el tipo de contenido de la respuesta original
    res.type(response.headers.get('content-type') || 'application/octet-stream');
    response.body.pipe(res)
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error', error });
  }
})


routerProxy.post('/gTranslate', async (req, res) => {
  try {
    const body = req.body;
    const customURL = req.query.customURL;
    if (!body.source_lang || !body.target_lang || !body.text)
      return res.status(400).json({
        message: "ProxyError: All fields are required!",
      });
    const response = await fetch(customURL ?? process.env["DEFAULT_URL"], {
      method: "POST",
      body: new URLSearchParams(body).toString(),
      headers
    })
    if (!response.ok)
      res.status(404).json({
        message: "ProxyError: Problem found in request",
        statusCode: response.status,
      })
    const json = await response.json();
    return res.json(json);
  }
  catch(err){
    res.status(500)
      .json({
        message: "ProxyError: Error was fount in request sending!",
        error: err,
        easterEgg: 'Wanna excuse meeeeeee!'
      })
  }
})