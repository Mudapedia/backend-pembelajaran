import joi from "joi";
import { RequestBodyProduct } from "../requestBody/product";

class Schema {
  protected static get productAddSchema() {
    return joi.object({
      title: joi.string().required(),
      imgURL: joi.string().required(),
      description: joi.string().required(),
    });
  }
}

class ProductValidation extends Schema {
  static add(body: RequestBodyProduct) {
    return this.productAddSchema.validateAsync(body, {
      abortEarly: false,
    });
  }
}

export default ProductValidation;
