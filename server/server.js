import express from "express";
import products from "./data/Products.js";

const app = express();

const port = 5000;

app.get("/", (req, res) => res.send("Hello World"));
app.get("/api/products", (req, res) => res.json(products));
app.get("/api/products/:id", (req, res) => {
    const product = products.find((p) => p.id === Number(req.params.id));
    res.json(product);
})
app.listen(port, () => console.log(`Server started on port ${port}`));
