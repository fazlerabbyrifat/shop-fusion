import React from "react";
import useCart from "../../hooks/useCart";
import {  useNavigate } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const MyCart = () => {
  const { cart, removeFromCart } = useCart();
  const navigate = useNavigate();
  const totalPrice = cart.reduce((sum, item) => item.price + sum, 0);
  const total = parseFloat(totalPrice.toFixed(2));

  const handleDelete = (id) =>{
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
            removeFromCart(id)
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      })
  }

  const handlePayment = () => {
    navigate('/payment', {state: { total }})
  }

  return (
    <div className="w-full p-5 max-h-full overflow-x-auto lg:overflow-x-hidden my-10">
      <div className="uppercase font-semibold lg:h-[60px] lg:flex justify-evenly items-center gap-10 my-5">
        <h2 className="text-3xl">Total Orders: {cart?.length}</h2>
        <h2 className="text-3xl">Total Price: ${total}</h2>
        <button onClick={handlePayment} className="btn btn-primary btn-sm text-white">Pay</button>
      </div>
      <div className="overflow-x-auto w-full">
        <table className="table ">
          <thead>
            <tr>
              <th>#</th>
              <th>Food</th>
              <th>Item Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart?.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={item.image} alt="" />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{item.name}</td>
                <td>${item.price}</td>
                <td>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="btn btn-error btn-sm"
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

export default MyCart;
