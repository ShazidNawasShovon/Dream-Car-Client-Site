import { Card, NavLink, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo_404 from "../../images/404 image/404_2 (1).png";
const NotFound = () => {
  return (
    <Card className="text-center " bg="dark">
      <Card.Img className="w-50 mx-auto my-0" variant="top" src={logo_404} />
      <Card.Body>
        <Card.Title className="text-white">
          Looks Like You are lost in the Error World! <br />
          Please Go Back Before it's Too Late
        </Card.Title>
        <NavLink as={Link} to="/">
          <Button variant="danger">Go Back</Button>
        </NavLink>
      </Card.Body>
    </Card>
  );
};

export default NotFound;
