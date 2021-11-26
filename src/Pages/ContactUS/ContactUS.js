import React from "react";
import { Container, Image, Row } from "react-bootstrap";
import img7 from "../../images/ContactUS/contact-bg.jpg";
import img8 from "../../images/ContactUS/ContactUs_Tile_385x3852.jpg";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";

const ContactUS = () => {
  return (
    <>
      <Header />
      <div className="container-fluid">
        <Row>
          <Image src={img7} fluid />
        </Row>
        <h2 className="text-center fw-bold  fs-1 bg-dark text-white ">
          HOW CAN WE <span className=""> HELP?</span>{" "}
        </h2>

        <Container>
          <div className="card mb-3 w-100">
            <div className="row g-0 p-2 h-100">
              <div className="col-md-4">
                <img src={img8} className="img-fluid  rounded" alt="" />
              </div>
              <div className="col-md-8">
                <div className="card-title ms-3">
                  <h4 className="fw-bold">CONTACT INFO</h4>
                </div>
                <div className="card-body">
                  <p className="card-text">
                    <span className="fw-bold">
                      Dhaka & Faridpur : 01733331676
                    </span>
                    <br />
                    <span className="fw-bold">
                      International : +1(832) 872 2222{" "}
                    </span>
                    <br />
                    Customer Service & Operations:
                    <span className="fw-bold"> Ops@dreamCar.com</span>
                    <br />
                    Provider Relations:
                    <span className="fw-bold"> Providers@dreamCar.com</span>
                    <br />
                    General Information:
                    <span className="fw-bold"> Info@dreamCar.com</span>
                    <br />
                  </p>
                  <p className="card-text">
                    <span className="fw-bold">
                      InfoHeadquarters mailing address
                      <br />
                      Dream-Car.LLC
                    </span>
                    <br />
                    Magura,Khulna,Bangladesh
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default ContactUS;
