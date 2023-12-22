import Express from "express";
import cors from 'cors'
import { APIRouter } from "./api/router.js";
import morgan from 'morgan'

const app = Express();
app.use(Express.json());
app.use(morgan("dev"))
app.use(cors({origin: '*'}));

app.use('/api', APIRouter)


app.listen(process.env.PORT || 4000)