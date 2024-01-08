import React, { useState, useEffect } from "react";
// import { products } from "../../data/products";
import Container from "../Container/Container";
import axios from "axios";
import ManageProduct from "./ManageProduct";

function DisplayList() {
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
    <Container>
      <h1 style={{ textAlign: "center" }}>Manage Products</h1>
      <div>
        {products &&
          products.map((product) => (
            <ManageProduct key={product._id} {...product} />
          ))}
      </div>
    </Container>
  );
}

export default DisplayList;
