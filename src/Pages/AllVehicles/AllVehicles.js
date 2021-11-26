import React from "react";
import { Container, Row } from "react-bootstrap";
import useProducts from "../../Hooks/useProducts";
import ShowProducts from "../Shared/ShowProducts/ShowProducts";
import Header from "../Shared/Header/Header";
import Footer from "../Shared/Footer/Footer";

const AllVehicles = () => {
  const { products } = useProducts();
  // For Status Showing
  const dltBtn = false;
  return (
    <>
      <Header />
      <Container>
        <h2 className="text-center fw-bold mt-4 fs-1 text-dark">
          Featured <span className="text-warning"> Vehicles</span>{" "}
        </h2>
        <Row xs={1} md={3} className="g-4" style={{ margin: "20px" }}>
          {products.map((product) => (
            <ShowProducts
              key={product._id}
              product={product}
              dltBtn={dltBtn}
            ></ShowProducts>
          ))}
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default AllVehicles;
