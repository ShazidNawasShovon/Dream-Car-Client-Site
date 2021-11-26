import React from "react";
import { Card, Col, NavLink, Button } from "react-bootstrap";
import Rating from "react-rating";
import { Link } from "react-router-dom";

import "./ShowProducts.css";
const ShowProducts = (props) => {
  // Destructuring Data
  // const { admin } = useAuth();
  const { name, price, place, rating, days, details, img, _id } = props.product;
  return (
    <div>
      <Col className="h-100 ">
        <Card variant=" mx-auto " className="h-100 card-shadow">
          <Card.Img variant="top p-3  " src={img} className="rounded" />
          <Card.Body>
            <Card.Title>
              {" "}
              <strong className="fw-bold">{name},</strong>{" "}
              <small>{place}</small>
            </Card.Title>
            <Card.Text className="d-flex justify-content-between align-items-center">
              {" "}
              <span className="text-muted">{days}</span>
              <span className="  p-2 price">
                <strong className="fw-bold fs-4">Just $</strong>{" "}
                <strong className="fw-bold fs-4"></strong>{" "}
                <span className="text-danger price">{price}</span>
              </span>
            </Card.Text>
            <Card.Text>
              {" "}
              <span className="text-muted">{details}</span>{" "}
            </Card.Text>
          </Card.Body>
          <Card.Footer className=" d-flex justify-content-between align-items-center">
            <span>
              <Rating
                className="text-warning"
                initialRating={rating}
                emptySymbol="far fa-star icon-color"
                fullSymbol="fas fa-star icon-color"
                readonly
              ></Rating>
              <strong> ({rating})</strong>
            </span>

            <small className="text-muted">
              {/* {!admin ? ( 
                <small>*/}
              {props.dltBtn ? (
                <Button
                  onClick={() => props.handleDeleteProduct(_id)}
                  variant="outline-danger"
                >
                  Delete <i className="far fa-times-circle fs-4"></i>
                </Button>
              ) : (
                <NavLink as={Link} to={`/purchase/${_id}`}>
                  <Button variant="outline-danger">Buy Now</Button>
                </NavLink>
              )}
              {/* </small>
              ) : (
                <small>Admin Can't Order</small> 
              )}*/}
            </small>
          </Card.Footer>
        </Card>
      </Col>
    </div>
  );
};

export default ShowProducts;
