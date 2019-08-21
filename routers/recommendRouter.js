import express from "express";
import routes from "./routes";

const recommendRouter = express.Router();

recommendRouter.get("", (req, res) => res.send("recommend"));
recommendRouter.get(routes.recommend_detail, (req, res) =>
  res.send("recommend_detail")
);

export default recommendRouter;
