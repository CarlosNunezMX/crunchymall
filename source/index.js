import Express from "express";
import cors from 'cors'
import morgan from 'morgan'
import { routerProxy } from "./proxy/index.js";
import { APIRouter } from "./api/router.js";

const app = Express();
app.use(Express.urlencoded({extended: false}))
app.use(Express.json());
app.use(morgan("dev"))
app.use("*", (req, res, next) => {
    req.isWiiU = req.headers["user-agent"].includes('WiiU')
    console.log(req.isWiiU);
    console.log(req.headers.origin);
    next()
})
app.use(cors({origin: '*'}));

app.use('/api', APIRouter)
app.use('/proxy', routerProxy)


app.listen(process.env.PORT || 4000)