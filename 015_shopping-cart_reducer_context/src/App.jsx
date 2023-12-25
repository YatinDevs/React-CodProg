import React from "react";
import Products from "./components/Products/Products";
import CartProvider from "./context/CartProvider";
import Header from "./components/Header/Header";

function App() {
  console.log("App rendered");
  return (
    <CartProvider>
      <Header />
      <Products />
    </CartProvider>
  );
}

export default App;
