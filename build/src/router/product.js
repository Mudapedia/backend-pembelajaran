"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const product_1 = __importDefault(require("../controllers/product"));
const productRoute = express_1.default.Router();
productRoute.post("/api/product", product_1.default.add);
productRoute.get("/api/product", product_1.default.getAll);
productRoute.delete("/api/product/:id", product_1.default.del);
productRoute.put("/api/product/:id", product_1.default.edit);
exports.default = productRoute;
