import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import axios from "axios";

export default function HomeScreen() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get("/api/products");
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products", error);
      }
    };
    fetchProducts();
  }, []);
  return (
    <Row>
      {products.map((product, i) => (
        <Col key={i} sm={12} md={6} lg={4} xl={3}>
          <Product item={product} />
        </Col>
      ))}
    </Row>
  );
}
