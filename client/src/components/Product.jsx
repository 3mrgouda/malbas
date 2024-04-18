import React from "react";
import { Card, Image } from "react-bootstrap";
import Rating from "./Rating";
import { Link } from "react-router-dom";
import ProductScreen from "../screens/ProductScreen";

export default function item({ item }) {
  return (
    <Card
      style={{
        width: "18rem",
        margin:"1em auto"
      }}
    >
      <Link className="text-center" to={`/product/${item.id}`}>
        <Image
          style={{ objectFit: "contain", height: "200px" , aspectRatio:1 , padding:"1em"}}
          variant="top"
          src={item.image}
          alt={item.name}
        />
      </Link>
      <Card.Body style={{textAlign:"center"}}>
        <Card.Title>{item.title.substring(0, 18)}</Card.Title>
        <Card.Body style={{display:"flex",justifyContent:"space-between"}}>
        <Card.Text>${item.price}</Card.Text>  
        <Rating value={item.rating} colorValue="gold" />
        </Card.Body>
       
      </Card.Body>
    </Card>
  );
}
