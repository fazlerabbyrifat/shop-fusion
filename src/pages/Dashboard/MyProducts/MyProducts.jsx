import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { FaTrashAlt } from "react-icons/fa";
import useCart from "../../../hooks/useCart";
import Swal from "sweetalert2";

const MyProducts = () => {
  const [myProducts, setMyProducts] = useState([]);
  const { removeFromCart } = useCart();

  useEffect(() => {
    fetch("/myproducts.json")
      .then((res) => res.json())
      .then((data) => setMyProducts(data));
  }, []);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromCart(id);
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };

  return (
    <div className="w-full">
      <h1 className="text-3xl font-bold mb-5 text-center">My Products</h1>
      <div className="overflow-x-auto my-10 mx-5 p-5">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {myProducts.map((myProduct, index) => (
              <tr key={myProduct.id}>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={myProduct.image} alt="" />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{myProduct.name}</td>
                <td>${myProduct.price}</td>
                <td>
                  <button
                    onClick={() => handleDelete(myProduct.id)}
                    className="btn btn-error"
                  >
                    <FaTrashAlt></FaTrashAlt>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyProducts;
