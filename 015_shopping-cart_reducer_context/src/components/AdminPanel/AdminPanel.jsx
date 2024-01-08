import React, { useState, useEffect } from "react";
import AddProduct from "../AddProduct/AddProduct";
import "./AdminPanel.css";
import axios from "axios";
import { ImCross } from "react-icons/im";
import { toast } from "react-toastify";
import ManageProduct from "./ManageProduct";
import DisplayList from "./DisplayList";

function AdminPanel() {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const res = await axios.get("http://localhost:8080/products");
    console.log(res.data);
    setProducts(res.data);
  };

  useEffect(() => {
    getProducts();
  }, []);

 
  return (
    <div>
      <h1 className="title">AdminPanel</h1>
      <AddProduct />
      <DisplayList />
    </div>
  );
}

export default AdminPanel;
