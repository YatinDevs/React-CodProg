import React from "react";
import Products from "./components/Products/Products";
import CartProvider from "./context/CartProvider";

function App() {
  return (
    <CartProvider>
      <Products />
    </CartProvider>
  );
}

export default App;
