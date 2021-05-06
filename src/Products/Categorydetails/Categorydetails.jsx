import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { subcatagory } from "../../Actions/Product.action";
import { Card,Container,Row,Button,Col} from 'react-bootstrap';
import {Link  } from 'react-router-dom';
export default function Categorydetails({ match }) {
  let cdetails = match.params.cname;
  console.log(cdetails);
  const DispatchMethod = useDispatch();
  const ProductCategory2 = useSelector((state) => state.Productdata);
  console.log(ProductCategory2);
  useEffect(() => {
    DispatchMethod(subcatagory(cdetails));
  }, [DispatchMethod]);
  return (
    <div>
        <Container>
            <Row>
      {ProductCategory2.Specific_Categorydata.map((e) => (
        <Col md='3'>
        <Card>
          <Card.Img variant="top" src={e.image} />
          <Card.Body>
            <Card.Title>{e.id}</Card.Title>
            <Card.Title>{e.title}</Card.Title>
            <Link to={`/Productdetails/${e.id}`}>
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
