import { Card, NavLink, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ResetPassword = () => {
  return (
    <div className="container">
      <div
        className="container mt-5 border p-5 rounded-3"
        variant="rounded"
        style={{ width: "30rem", height: "40rem" }}
      >
        <h4 className="fw-bold fs-3">Reset Password</h4>
        <Card className="text-center">
          <Card.Header>You are Lucky</Card.Header>
          <Card.Body>
            <Card.Title>Thank You For Your Patients</Card.Title>
            <Card.Text>
              <span className="fw-bold">Please Check Your Email</span>
              <br />A link will send to your Email. Then You can Reset Your
              Password By clicking the link.
            </Card.Text>
          </Card.Body>
          <Card.Footer className="text-muted">
            <NavLink as={Link} to="/home">
              <Button variant="danger">Go Back To Home</Button>
            </NavLink>
          </Card.Footer>
        </Card>
      </div>
    </div>
  );
};

export default ResetPassword;
