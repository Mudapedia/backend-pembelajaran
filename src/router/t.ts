import express from "express";
import TControl from "../controllers/t";

const tRoute: express.Router = express.Router();

tRoute.get("/", TControl.init);

export default tRoute;
