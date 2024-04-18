import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Button,
  Card,
  Container,
  ListGroupItem,
} from "react-bootstrap";
import Rating from "../components/Rating";

function ProductScreen() {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [singleProduct, setSingleProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("https://fakestoreapi.com/products/");
        setProducts(data);

        // Find product by id after fetching products
        const foundProduct = data.find(
          (product) => product.id === parseInt(id)
        );
        setSingleProduct(foundProduct);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <Container className="mb-5">
      <Link to="/" className="btn btn-light my-3">
        Go back
      </Link>
      <Row>
        <Col md={6}>
          <Image
            src={singleProduct?.image}
            className="img-fluid w-75 "
            alt={singleProduct?.title}
          />
        </Col>
        <Col md={3} className="mt-5">
          <ListGroup variant="flush">
            <ListGroup.Item className="pt-4 pb-4">
              <h3 className="h5">{singleProduct?.title}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating value={singleProduct?.rating} colorValue="gold" />
            </ListGroup.Item>
            <ListGroup.Item className="pt-4 pb-4">
              <Row>
                <Col>Price:</Col>
                <Col>${singleProduct?.price}</Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>Description :</Col>
               <Row>{singleProduct?.description}</Row> 
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
    </Container>
  );
}

export default ProductScreen;
