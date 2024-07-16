"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
class Schema {
    static get productAddSchema() {
        return joi_1.default.object({
            title: joi_1.default.string().required(),
            imgURL: joi_1.default.string().required(),
            description: joi_1.default.string().required(),
        });
    }
}
class ProductValidation extends Schema {
    static add(body) {
        return this.productAddSchema.validateAsync(body, {
            abortEarly: false,
        });
    }
}
exports.default = ProductValidation;
