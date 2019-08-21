import express from "express";
import routes from "./routes";
import { searchSong, deleteSong } from "../controllers/songController";

const songRouter = express.Router();

songRouter.get("", (req, res) => res.send("songs"));
songRouter.get(routes.searchSong, searchSong);
songRouter.get(routes.deleteSong, deleteSong);

export default songRouter;
