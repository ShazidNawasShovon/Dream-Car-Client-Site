import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import "./AddProduct.css";
const AddProduct = () => {
  // Taken From React Hook Form
  const {
    register,
    handleSubmit,

    formState: { errors },
    reset,
  } = useForm();
  // Taken From React Hook Form On Submit
  const onSubmit = (data) => {
    axios
      .post("https://damp-retreat-54867.herokuapp.com/products", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("Product Added successfully");
          reset();
        }
      });
  };
  return (
    <div className="add-product my-0 py-5 container-fluid">
      <h2 className="fw-bold">Please Add a Product</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("name", {
            required: true,
            maxLength: 40,
          })}
          placeholder="Car Name"
        />
        {errors?.name?.type === "required" && <p>This field is required</p>}
        {errors?.name?.type === "maxLength" && (
          <p>Name cannot exceed 40 characters</p>
        )}
        <input
          {...register("place", {
            maxLength: 30,
          })}
          placeholder="Brand Name"
        />
        {errors?.name?.type === "maxLength" && (
          <p>Name cannot exceed 30 characters</p>
        )}

        <input type="number" {...register("price")} placeholder="Price" />
        <input
          type="number"
          min="0"
          step="0.01"
          max="5"
          {...register("rating")}
          placeholder="Rating"
        />
        <textarea {...register("details")} placeholder="Short Description" />
        <textarea {...register("fullDetails")} placeholder="Full Description" />

        <input
          {...register("img", { required: true })}
          placeholder="Please Insert an Image url"
        />
        {errors?.img?.type === "url" && <p>Please Insert an image url</p>}
        {errors?.name?.type === "required" && (
          <p>Required ! Please insert an image url. Be careful!</p>
        )}
        <input type="submit" />
      </form>
    </div>
  );
};

export default AddProduct;
