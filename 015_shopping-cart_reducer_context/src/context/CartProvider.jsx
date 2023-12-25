import React from "react";
import { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

function cartReducer(cart, action) {
  console.log("cartReducer called..");

  switch (action.type) {
    case "ADD_ITEM": {
      return [...cart, action.payload];
    }
  }

  return cart;
}

function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, []);

  const addItemtoCart = (newCartItem) => {
    dispatch({ type: "ADD_ITEM", payload: newCartItem });
  };

  return (
    <CartContext.Provider value={{ cart, addItemtoCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}

export default CartProvider;
