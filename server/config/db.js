import  mongoose from "mongoose";
import colors from "colors";
// import dotenv from "dotenv"
// dotenv.config()
// const MONGO_URI = process.env.MONGO_URI
const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://3mr123:tddyXgwSEzxH51zF@ecommercecourse.yrlzgzd.mongodb.net/?retryWrites=true&w=majority&appName=ecommerceCourse/shop")
        console.log(`db connected : ${mongoose.connection.host}`.cyan.underline)
    } catch (err) {
        console.error(`[ERROR] mongoose connection error: ${err.message}`.red.underline)
        process.exit(1)
    }
};

export default connectDB;
