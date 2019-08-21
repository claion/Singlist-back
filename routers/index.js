import express from "express";
import routes from "./routes";
import popularRouter from "./popularRouter";
import recommendRouter from "./recommendRouter";
import userRouter from "./userRouter";
import songRouter from "./songRouter.js";

const indexRouter = express.Router();

indexRouter.use(routes.login, (req, res) => res.send("login")); //Home이랑 login이랑 같이했음
indexRouter.use(routes.logout, (req, res) => res.send("logout"));

indexRouter.use(routes.popular, popularRouter);
indexRouter.use(routes.recommend, recommendRouter);
indexRouter.use(routes.events, (req, res) => res.send("events"));
indexRouter.use(routes.users, userRouter);
indexRouter.use(routes.songs, songRouter);

export default indexRouter;
