import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Rating from "../components/Rating";
import axios from "axios";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Button,
  Container,
} from "react-bootstrap";

function ProductScreen() {
  const { id } = useParams();
const [product , setProduct] = useState();
useEffect(() => {
  const fetchProduct = async () => {
    const {data} = await axios.get(`/api/products/${id}`);
    setProduct(data);
  };
  fetchProduct();
},[])
console.log(product)
  return (
    <Container className="mb-5">
      <Link to="/" className="btn btn-light my-3">
        Go back
      </Link>
      {product && (
        <Row>
          <Col md={6}>
            <Image
              src={product.image}
              className="img-fluid w-75 "
              alt={product.title}
            />
          </Col>
          <Col md={3} className="mt-5">
            <ListGroup variant="flush">
              <ListGroup.Item className="pt-4 pb-4">
                <h3 className="h5">{product.title}</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                <Rating value={product.rating} colorValue="gold" />
              </ListGroup.Item>
              <ListGroup.Item className="pt-4 pb-4">
                <Row>
                  <Col>Price:</Col>
                  <Col>${product.price}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <p>Description :</p>
                  <Col>{product.description}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item className="pt-4 pb-4">
                <Button
                  type="button"
                  className="btn-block"
                  onClick={() => alert("Added to Cart")}
                >
                  Add to Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      )}
    </Container>
  );
}

export default ProductScreen;

