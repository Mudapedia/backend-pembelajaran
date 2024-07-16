import { Request, Response, NextFunction } from "express";
import { RequestBodyProduct } from "../requestBody/product";
import UserCol from "../models/product";
import ProductValidation from "../validation/product";
import { isValidObjectId } from "mongoose";
import ResponseErr from "../error/responseErr";

class ProductControl {
  static async add(req: Request, res: Response, next: NextFunction) {
    try {
      const body: RequestBodyProduct = req.body;
      await ProductValidation.add(body);

      const insert = new UserCol({
        title: body.title,
        imgURL: body.imgURL,
        description: body.description,
      });

      await insert.save();

      res.status(201).json({ message: "Product added successfully" });
    } catch (err) {
      next(err);
    }
  }

  static async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await UserCol.find();
      res.status(200).json({ message: "All product", data: data });
    } catch (err) {
      next(err);
    }
  }

  static async del(req: Request, res: Response, next: NextFunction) {
    try {
      const id: string = req.params.id;

      if (!isValidObjectId(id)) {
        throw new ResponseErr(400, "Invalid parameter");
      }

      await UserCol.deleteOne({ _id: id });

      res
        .status(200)
        .json({ message: "Product has been successfully deleted" });
    } catch (err) {
      next(err);
    }
  }

  static async edit(req: Request, res: Response, next: NextFunction) {
    try {
      const id: string = req.params.id;

      if (!isValidObjectId(id)) {
        throw new ResponseErr(400, "Invalid parameter");
      }
      const body: RequestBodyProduct = req.body;
      await ProductValidation.add(body);

      const up = await UserCol.updateOne(
        { _id: id },
        {
          $set: {
            title: body.title,
            imgURL: body.imgURL,
            description: body.description,
          },
        }
      );

      if (up.matchedCount === 0) {
        throw new ResponseErr(404, "Product not found");
      }

      res.status(201).json({ message: "Product added successfully" });
    } catch (err) {
      next(err);
    }
  }
}

export default ProductControl;
