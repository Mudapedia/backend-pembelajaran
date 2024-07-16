"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const t_1 = __importDefault(require("../controllers/t"));
const tRoute = express_1.default.Router();
tRoute.get("/", t_1.default.init);
exports.default = tRoute;
