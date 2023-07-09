import { useContext } from "react";
import { CartContext } from "../providers/CartProvider";

const useCart = () => {
  const auth = useContext(CartContext);
  return auth;
};

export default useCart;
