import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProductCate } from "../../Actions/Product.action";
import { Container,Col,Card,Row,Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
export default function Productcategory() {
  const DispatchMethod = useDispatch();
  const ProductCategory1 = useSelector((state) => state.Productdata);
  console.log(ProductCategory1);
  useEffect(() => {
    DispatchMethod(ProductCate());
  },[DispatchMethod]);
  return (
    <div>
        <Container>
          <Row>
      {ProductCategory1.AllCategories.map((e) => (
        
        <Col>
        <Card >
        <Card.Img variant="top"/>
        <Card.Body>
          <Card.Title>{e}</Card.Title>
          <Link to={`/Categorydetails/${e}`}>
          <Button variant="primary">Click</Button>
          </Link>
        </Card.Body>
      </Card>
      </Col>
          
      ))}
      </Row>
        </Container>
    </div>
  );
}
