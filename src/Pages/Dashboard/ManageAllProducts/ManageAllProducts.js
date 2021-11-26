import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import ShowProducts from "../../Shared/ShowProducts/ShowProducts";

const ManageAllProducts = () => {
  const [allProducts, setAllProducts] = useState([]);
  const dltBtn = true;
  useEffect(() => {
    fetch("https://damp-retreat-54867.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setAllProducts(data));
  }, []);
  //   DELETE A PRODUCT
  const handleDeleteProduct = (_id) => {
    const proceed = window.confirm(
      "Are you sure You want to delete This Product ? "
    );
    if (proceed) {
      const url = `https://damp-retreat-54867.herokuapp.com/product/delete/${_id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())

        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Deleted SuccessFully");
            const remainingProducts = allProducts.filter(
              (pro) => pro._id !== _id
            );
            setAllProducts(remainingProducts);
          }
        });
    }
  };
  return (
    <Container>
      <h2 className="text-center fw-bold mt-4 fs-1 text-dark">
        Manage All <span className="text-warning"> Products</span>{" "}
      </h2>
      <Row xs={1} md={3} className="g-4" style={{ margin: "20px" }}>
        {allProducts.map((product) => (
          <ShowProducts
            key={product._id}
            product={product}
            dltBtn={dltBtn}
            handleDeleteProduct={handleDeleteProduct}
          ></ShowProducts>
        ))}
      </Row>
    </Container>
  );
};

export default ManageAllProducts;
