import React from "react";
import { useLocation } from "react-router-dom";
import { InfinitySpin } from "react-loader-spinner";
import "@smastrom/react-rating/style.css";
import { Rating } from "@smastrom/react-rating";
import useCart from "./../../hooks/useCart";
import Swal from "sweetalert2";

const ProductDetails = () => {
  const location = useLocation();
  const product = location?.state?.product;
  const { addToCart } = useCart();

  if (!product) {
    return <InfinitySpin width="200" color="#4fa94d" />;
  }

  const handleAddToCart = () => {
    addToCart(product);
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Product added successfully',
        showConfirmButton: false,
        timer: 1500
      })
  };

  return (
    <div className="my-10 mx-10">
      <div className="max-w-[720px] mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        <img src={product?.image} alt="" className="w-full p-10" />
        <div className="p-4 space-y-3">
          <h2 className="text-3xl font-semibold">{product?.name}</h2>
          <p className="text-gray-500">${product?.price}</p>
          <p className="mt-2 text-gray-600 text-xl font-medium">
            {product?.description}
          </p>
          <div className="flex gap-2">
            <span>
              <Rating
                style={{ maxWidth: 90 }}
                value={product?.rating}
                readOnly
              />
            </span>
            <p>{product?.rating}</p>
          </div>
          <p>Total reviews: {product?.total_reviews}</p>
        </div>
        <button
          onClick={handleAddToCart}
          className="block w-full py-2 bg-blue-500 text-white font-semibold text-center hover:bg-blue-600"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
