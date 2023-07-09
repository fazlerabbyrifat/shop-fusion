import { Elements } from "@stripe/react-stripe-js";
import React from "react";
import { useLocation } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);

const Payment = () => {
  const location = useLocation();
  const price = location?.state?.total;

  return (
    <div className="w-full p-5 my-10">
        <h3 className="text-3xl font-bold text-center mb-5">Total Amount: {price}</h3>
      <Elements stripe={stripePromise}>
        <CheckoutForm></CheckoutForm>
      </Elements>
    </div>
  );
};

export default Payment;
