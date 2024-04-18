import React, { useEffect, useState} from "react";
import axios from "axios";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";

export default function HomeScreen() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/")
      .then((respone) => {
        setProducts(respone.data);
      })
      .catch((error) => {
        console.log(error);
      });
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
