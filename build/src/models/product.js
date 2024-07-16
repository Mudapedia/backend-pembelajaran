"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const schemaProduct = new mongoose_1.default.Schema({
    title: {
        type: String,
        required: true,
    },
    imgURL: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
});
const UserCol = mongoose_1.default.model("product", schemaProduct, "product");
exports.default = UserCol;
