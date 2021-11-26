import React from "react";
import {
  Card,
  Col,
  Container,
  Image,
  NavLink,
  Row,
  Button,
} from "react-bootstrap";
import img4 from "../../images/about us/mission.jpg";
import img5 from "../../images/about us/vision.jpg";
import img6 from "../../images/about us/goal.jpg";
import { Link } from "react-router-dom";
import Header from "../Shared/Header/Header";
import Footer from "../Shared/Footer/Footer";
const About = () => {
  return (
    <>
      <Header />
      <div className="container-fluid">
        <Row>
          <Image
            src="https://www.dodge.com/content/dam/fca-brands/na/dodge/en_us/brotherhood-hub/desktop/2020-dodge-culture-wallpaper.jpg.image.1440.jpg"
            fluid
            rounded
          />
          <h2 className="text-center fw-bold  fs-1  text-dark">
            ABOUT-<span className="">US</span>{" "}
          </h2>
        </Row>
        <Container>
          <p>
            <span className="fw-bold">Dream-Car</span> We’re in the business of
            dealing great muscle cars. But we also work every day to apply and
            share our know-how in ways that benefit people, the community, and
            our planet in order to build a better tomorrow.
          </p>

          <span className="fw-bold">
            Our experience involves identifying, coordinating, and dealing best
            muscle cars.
          </span>
          <NavLink className="text-center my-5" as={Link} to="/contact">
            <Button variant="outline-dark ">CONTACT US</Button>
          </NavLink>
        </Container>
        <Container className="my-4">
          <Row xs={1} md={3} className="g-4">
            <Col>
              <Card className="h-100 p-3">
                <Card.Img variant="top" src={img4} />
                <Card.Body>
                  <Card.Title>OUR MISSION</Card.Title>
                  <Card.Text>
                    We believe that nothing is impossible. We have big dreams
                    and persevere through any obstacles. We work together to
                    create the future of mobility and make the world a better
                    place.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="h-100 p-3">
                <Card.Img variant="top" src={img5} />
                <Card.Body>
                  <Card.Title>OUR VISION</Card.Title>

                  <Card.Text>
                    Understand the philosophy behind everything we do, explore
                    our history and get to know the people driving us into the
                    future.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="h-100 p-3">
                <Card.Img variant="top" src={img6} />
                <Card.Body>
                  <Card.Title>OUR GOAL</Card.Title>

                  <Card.Text>
                    How do we create some of the most advanced, reliable and
                    safe vehicles? It starts with our manufacturing principles
                    and management philosophy. We’re always looking for ways to
                    improve our operations, always challenging ourselves to
                    innovate, always looking to collaborate, always improving
                    each day in everything we do.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default About;
