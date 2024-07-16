import express from "express";
import cors from "cors";
import productRoute from "./router/product";
import errorHandling from "./middlewares/errorHandling";

const app: express.Express = express();

app.use(cors());
app.use(express.json());
app.use(productRoute);
app.use(errorHandling);

export default app;
