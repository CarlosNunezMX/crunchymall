import { Router } from "express";
import fetch from "node-fetch"

export const routerProxy = Router();

const getFetchHeader = async (headers) => {
    const data = {}
    for (let [key, value] of headers) {
        data[key] = value
    }
    return data
}

routerProxy.get("/", async (req, res) => {
    const { url, method, headers, body } = req.query;
    try {
        const response = await fetch(url, {
          method: method || 'GET',
          headers: headers || {},
          body: JSON.stringify(body) || null,
        });
    
        // Copia todos los encabezados de la respuesta original al proxy
    
        // Configura el tipo de contenido de la respuesta según el tipo de contenido de la respuesta original
        res.type(response.headers.get('content-type') || 'application/octet-stream');
        
        response.body.pipe(res)
      } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
})
