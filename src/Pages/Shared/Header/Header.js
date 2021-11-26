import {
  Container,
  Nav,
  Navbar,
  Button,
  NavDropdown,
  Col,
  Image,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../../images/logo/logo4 (2).png";
import "bootstrap/dist/css/bootstrap.min.css";
import useAuth from "../../../Hooks/useAuth";

const Header = () => {
  // Use Auth for destructuring
  const { user, logOut } = useAuth();
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        sticky="top"
      >
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              style={{ maxHeight: "100px" }}
              className="img-fluid"
              src={logo}
              alt=""
            />
          </Navbar.Brand>
          <Navbar.Brand as={Link} to="/">
            Home
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/allVehicles">
                VEHICLES
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                ABOUT US
              </Nav.Link>
              <NavDropdown title="MORE" id="collasible-nav-dropdown">
                <NavDropdown.Item as={Link} to="/contact">
                  CONTACT US
                </NavDropdown.Item>
                {user.email && (
                  <>
                    <NavDropdown.Divider />
                    <NavDropdown.Item as={Link} to="/dashboard">
                      DASHBOARD
                    </NavDropdown.Item>
                  </>
                )}
              </NavDropdown>
            </Nav>
            <Nav>
              {user.email && (
                // <span>
                <span className=" my-auto text-white d-flex justify-content-center align-items-center mx-3 mb-1">
                  <span className="fw-bold me-2"> {user?.displayName} </span>

                  <Col xs={1} md={6} style={{ width: "40px" }}>
                    {user?.photoURL ? (
                      <span className="mx-auto fs-4">
                        <Image src={user?.photoURL} roundedCircle fluid />
                      </span>
                    ) : (
                      <span className="mx-auto fs-4">
                        <i className="fas fa-user-circle"></i>
                      </span>
                    )}
                  </Col>
                </span>
              )}

              {user.email ? (
                <Button
                  onClick={logOut}
                  variant="outline-danger "
                  className="ms-1"
                >
                  <i className="fas fa-sign-out-alt"></i>
                </Button>
              ) : (
                <>
                  <Nav.Link as={Link} to="/login">
                    <span className="my-auto">
                      LOGIN <i className="fas fa-user-tie  fs-4 "></i>
                    </span>
                  </Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
