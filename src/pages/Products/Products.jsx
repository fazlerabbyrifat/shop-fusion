import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleDetails = (product) => {

    navigate(`/product/${product.id}`, { state: { product } });
  };

  return (
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
          {products.map((product, index) => (
            <tr key={product.id}>
              <td>{index + 1}</td>
              <td>
                <div className="flex items-center">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={product.image} alt="" />
                    </div>
                  </div>
                </div>
              </td>
              <td>{product.name}</td>
              <td>${product.price}</td>
              <td>
                <button
                  onClick={() => handleDetails(product)}
                  className="btn btn-primary"
                >
                  See More
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
