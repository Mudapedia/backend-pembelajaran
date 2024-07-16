"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const product_1 = __importDefault(require("./router/product"));
const errorHandling_1 = __importDefault(require("./middlewares/errorHandling"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(product_1.default);
app.use(errorHandling_1.default);
exports.default = app;
