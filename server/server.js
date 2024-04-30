import express from "express";
import products from "./data/Products.js";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
dotenv.config();
connectDB();
const app = express();

app.get("/", (req, res) => {
  res.send("API is running...");
});
app.use("/api/products", productRoutes);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running  on port ${port}`));
