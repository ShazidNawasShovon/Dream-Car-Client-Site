import React, { useEffect, useState } from "react";
import Rating from "react-rating";

const useProducts = () => {
  // products to be rendered on the UI
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://damp-retreat-54867.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  <Rating
    className="text-warning"
    initialRating={products.rating}
    emptySymbol="far fa-star icon-color"
    fullSymbol="fas fa-star icon-color"
    readonly
  ></Rating>;

  return { products, setProducts };
};

export default useProducts;
