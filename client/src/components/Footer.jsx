import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function FooterComponent() {
  return (
    <footer className="py-3 bg-dark text-white">
      <Container>
        <Row>
          <Col className="text-center text-md-start">
            <span>Copyright © 2024 E-Commerce. All rights reserved</span>
            <span>&nbsp;</span>
            <span>Made with <span className="text-danger">&#9829;</span> by 3mr Gouda</span>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

