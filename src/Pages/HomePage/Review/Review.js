import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import ShowReviews from "../ShowReviews/ShowReviews";

const Review = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://damp-retreat-54867.herokuapp.com/home/review")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <Container>
      <Row xs={1} md={3} className="g-4" style={{ margin: "20px" }}>
        {reviews?.map((review) => (
          <ShowReviews key={review._id} review={review}></ShowReviews>
        ))}
      </Row>
    </Container>
  );
};

export default Review;
