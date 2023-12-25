import React from "react";
import { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

function cartReducer(cart, action) {
  return cart;
}

function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, []);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}

export default CartProvider;
