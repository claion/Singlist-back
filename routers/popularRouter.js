import express from "express";
import routes from "./routes";

const popularRouter = express.Router();

popularRouter.get("", (req, res) => res.send("popular"));
popularRouter.get(routes.popular_chart, (req, res) => res.send("chart"));
popularRouter.get(routes.popular_artist, (req, res) => res.send("artist"));

export default popularRouter;
