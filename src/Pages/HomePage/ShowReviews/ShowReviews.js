import React from "react";
import { Card, Col, Container } from "react-bootstrap";
import Rating from "react-rating";

import userIMG from "../../../images/User Photo/user-circle-solid.svg";
const ShowReviews = (props) => {
  const { name, details, photoURL, rating } = props.review;
  return (
    <Container>
      <Col className="h-100 ">
        <Card variant=" mx-auto " className="h-100 w-75 card-shadow">
          <Card.Img
            variant="top p-3  "
            src={!photoURL ? `${userIMG}` : `${photoURL}`}
            className="rounded-circle w-50 mx-auto"
          />
          <Card.Body>
            <Card.Title>
              {" "}
              <strong className="fw-bold">{name}</strong>
            </Card.Title>

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
          </Card.Footer>
        </Card>
      </Col>
    </Container>
  );
};

export default ShowReviews;
