"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const product_1 = __importDefault(require("../models/product"));
const product_2 = __importDefault(require("../validation/product"));
const mongoose_1 = require("mongoose");
const responseErr_1 = __importDefault(require("../error/responseErr"));
class ProductControl {
    static add(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const body = req.body;
                yield product_2.default.add(body);
                const insert = new product_1.default({
                    title: body.title,
                    imgURL: body.imgURL,
                    description: body.description,
                });
                yield insert.save();
                res.status(201).json({ message: "Product added successfully" });
            }
            catch (err) {
                next(err);
            }
        });
    }
    static getAll(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield product_1.default.find();
                res.status(200).json({ message: "All product", data: data });
            }
            catch (err) {
                next(err);
            }
        });
    }
    static del(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                if (!(0, mongoose_1.isValidObjectId)(id)) {
                    throw new responseErr_1.default(400, "Invalid parameter");
                }
                yield product_1.default.deleteOne({ _id: id });
                res
                    .status(200)
                    .json({ message: "Product has been successfully deleted" });
            }
            catch (err) {
                next(err);
            }
        });
    }
    static edit(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                if (!(0, mongoose_1.isValidObjectId)(id)) {
                    throw new responseErr_1.default(400, "Invalid parameter");
                }
                const body = req.body;
                yield product_2.default.add(body);
                const up = yield product_1.default.updateOne({ _id: id }, {
                    $set: {
                        title: body.title,
                        imgURL: body.imgURL,
                        description: body.description,
                    },
                });
                if (up.matchedCount === 0) {
                    throw new responseErr_1.default(404, "Product not found");
                }
                res.status(201).json({ message: "Product added successfully" });
            }
            catch (err) {
                next(err);
            }
        });
    }
}
exports.default = ProductControl;
