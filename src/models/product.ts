import mongoose from "mongoose";

const schemaProduct = new mongoose.Schema({
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

const UserCol = mongoose.model("product", schemaProduct, "product");
export default UserCol;
