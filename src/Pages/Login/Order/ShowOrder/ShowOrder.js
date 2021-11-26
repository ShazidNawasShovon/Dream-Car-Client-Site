import { Card, Col, Button } from "react-bootstrap";
import Rating from "react-rating";

const ShowOrder = (props) => {
  const { name, price, place, rating, days, details, img } =
    props.order.cart[0];
  const { _id, status } = props.order;
  return (
    <div>
      <Col className="h-100">
        <Card variant=" mx-auto " className="h-100">
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
            <Card.Text>
              {" "}
              <small className="">
                {" "}
                Booked By : <span className="fw-bold"> {props.order.name}</span>
              </small>{" "}
            </Card.Text>
            <Card.Text>
              {status === true ? (
                <small className="">
                  Status: <span className="text-success">Shipped</span>{" "}
                </small>
              ) : (
                <span className="">
                  Status: <span className="text-danger">Pending</span>{" "}
                </span>
              )}
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
              {props.showBtn === true ? (
                <Button
                  onClick={() => props.handleStatus(_id)}
                  variant={
                    status ? "outline-success mb-2" : "outline-dark mb-2"
                  }
                >
                  <i className="fas fa-check-circle fs-4"></i>
                </Button>
              ) : (
                ""
              )}
            </small>
            <small className="text-muted">
              <Button
                onClick={() => props.handleDeleteUser(_id)}
                variant="outline-danger mb-2"
              >
                <i className="far fa-times-circle fs-4"></i>
              </Button>
            </small>
          </Card.Footer>
        </Card>
      </Col>
    </div>
  );
};

export default ShowOrder;
