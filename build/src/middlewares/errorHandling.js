"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const responseErr_1 = __importDefault(require("../error/responseErr"));
const errorHandling = (error, req, res, next) => {
    if (!error) {
        next();
        return;
    }
    else if (error instanceof joi_1.default.ValidationError) {
        return res.status(400).json({ errors: error.message.split(".") });
    }
    else if (error instanceof responseErr_1.default) {
        return res.status(error.getStatus).json({ errors: [error.message] });
    }
    return res.status(500).json({ errors: [error.message] });
};
exports.default = errorHandling;
