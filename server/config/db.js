import mongoose from "mongoose";
import colors from "colors";
import dotenv from "dotenv";

dotenv.config();
const mongoURI = process.env.MONGO_URI;
const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log(`db connected : ${mongoose.connection.host}`.cyan.underline);
  } catch (err) {
    console.error(
      `[ERROR] mongoose connection error: ${err.message}`.red.underline
    );
    process.exit(1);
  }
};

export default connectDB;
