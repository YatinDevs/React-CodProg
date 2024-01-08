import React from "react";
import Products from "./components/Products/Products";
import CartProvider from "./context/CartProvider";
import Header from "./components/Header/Header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddProduct from "./components/AddProduct/AddProduct";
import AdminPanel from "./components/AdminPanel/AdminPanel";

function App() {
  console.log("App rendered");
  return (
    <CartProvider>
      <ToastContainer
        newestOnTop={true}
        autoClose={500}
        hideProgressBar={true}
      />
      <Header />
      <Products />
      <div style={{ marginTop: 50 }}>
        <AdminPanel />
      </div>
    </CartProvider>
  );
}

export default App;
