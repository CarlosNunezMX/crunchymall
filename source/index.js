import Express from "express";
import cors from 'cors'
import { APIRouter } from "./api/router.js";
import morgan from 'morgan'

const app = Express();
app.use(Express.json());
app.use(morgan("dev"))
app.use(cors('*'));

app.use('/api', APIRouter)


app.listen(4000)