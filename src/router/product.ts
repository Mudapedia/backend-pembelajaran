import express from "express";
import ProductControl from "../controllers/product";

const productRoute: express.Router = express.Router();

productRoute.post("/api/product", ProductControl.add);
productRoute.get("/api/product", ProductControl.getAll);
productRoute.delete("/api/product/:id", ProductControl.del);
productRoute.put("/api/product/:id", ProductControl.edit);

export default productRoute;
