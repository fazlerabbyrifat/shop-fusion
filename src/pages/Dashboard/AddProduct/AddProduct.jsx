import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const AddProduct = () => {
  const { register, handleSubmit, reset } = useForm();
  const [products, setProducts] = useState([]);

  const onSubmit = (data) => {
    const newProduct = {
      name: data.name,
      image: data.image,
      category: data.category,
      price: data.price,
      details: data.details,
    };

    setProducts([...products, newProduct]);

    Swal.fire({
      icon: "success",
      title: "Product Added",
      text: "The product has been successfully added!",
      showConfirmButton: false,
      timer: 1500,
    });

    reset();
  };

  return (
    <div>
        <h1 className="text-3xl font-bold mb-5 text-center">Add A New Product</h1>
      <div className="bg-base-200 w-full mx-auto p-10">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Product Name *</span>
            </label>
            <input
              type="text"
              placeholder="Product Name"
              {...register("name", { required: true, maxLength: 80 })}
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Product Image *</span>
            </label>
            <input
              type="text"
              placeholder="Product Image"
              {...register("image", { required: true, maxLength: 80 })}
              className="input input-bordered w-full"
            />
          </div>
          <div className="flex gap-10">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Category *</span>
              </label>
              <select
                defaultValue="Category"
                {...register("category", { required: true })}
                className="select select-bordered"
              >
                <option disabled>Category</option>
                <option>Mobile</option>
                <option>Smartwatch</option>
                <option>Wallet</option>
                <option>Ladies Bag</option>
                <option>Other</option>
              </select>
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Price *</span>
              </label>
              <input
                type="number"
                placeholder="Price"
                {...register("price", { required: true })}
                className="input input-bordered w-full"
              />
            </div>
          </div>
          <div className="form-control my-5">
            <label className="label">
              <span className="label-text">Product Details *</span>
            </label>
            <textarea
              className="textarea textarea-bordered h-24"
              placeholder="Product Details"
              {...register("recipe", { required: true })}
            ></textarea>
          </div>
          <button className="btn btn-primary text-white">Add Item</button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
