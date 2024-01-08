import React, { useState, useEffect } from "react";
// import { products } from "../../data/products";
import Product from "./Product";
import styles from "./products.module.css";
import Container from "../Container/Container";
import axios from "axios";

// Port :
// Server Running -> http://localhost:8080/
// react running -> http://localhost:5173/
// mongo srver -> mongodb://127.0.0.1:27017/ecommerce
// when one server calls another server
// there is problem in Security related.
// Its called Cross Origin
// We are sending Request from one Origin to another Origin.
// So to allow it on server side we use CORS middleware
function Products() {
  const [products, setProducts] = useState([]);
  const [data, setData] = useState([]);

  const getProducts = async () => {
    const resData = await axios.get("http://localhost:8080/products");
    console.log("getProducts Data --> ", resData.data);
    setProducts(resData.data);
  };

  const getProducts2 = async () => {
    const resData = await fetch("http://localhost:8080/products");
    const data = await resData.json();
    console.log("getProducts Data2 --> ", data);
    setData(data);
  };

  useEffect(() => {
    getProducts();
    getProducts2();
  }, []);

  return (
    <Container>
      <h1>Best Sellers of Retro</h1>
      <div className={styles.products}>
        {products &&
          products.map((product) => <Product key={product._id} {...product} />)}
      </div>
    </Container>
  );
}

export default Products;
