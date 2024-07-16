import app from "./src/app";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

async function main() {
  try {
    if (!process.env.DB) {
      throw new Error("Invalid");
    }

    await mongoose.connect(process.env.DB);

    app.listen(3000, function () {
      console.log("Server is listening");
    });
  } catch (err) {
    console.log(err);
  }
}

main();
