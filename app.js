import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import indexRouter from "./routers/index";

const app = express();

//middelwares
app.use(morgan("dev"));
app.use(helmet());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//routers
app.use("/", indexRouter);

export default app;
