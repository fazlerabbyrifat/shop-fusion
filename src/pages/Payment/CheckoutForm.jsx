import { CardElement } from '@stripe/react-stripe-js';
import React from 'react';

const CheckoutForm = () => {
    return (
        <form className="w-1/3 m-10 mx-auto border-2 border-black rounded-lg p-10">
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "20px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-primary btn-sm mt-10"
          type="submit"
        >
          Pay
        </button>
      </form>
    );
};

export default CheckoutForm;