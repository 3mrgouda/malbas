import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FaCartShopping, FaUser } from "react-icons/fa6";
import { LinkContainer } from "react-router-bootstrap";

export default function Header() {
  return (
    <header>
      <Navbar bg="black">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand className="text-white">Our shop</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" />
          <Nav className="ml-auto">
          <LinkContainer to="/cart">
          <Nav.Link className="text-white">
              <FaCartShopping /> Cart
            </Nav.Link>
          </LinkContainer>
            <LinkContainer to="/signin">
             <Nav.Link className="text-white">
              <FaUser /> Sign In
            </Nav.Link>
            </LinkContainer>
           
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
}
