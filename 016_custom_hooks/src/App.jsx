import React, { useEffect, useState } from "react";
import "./index.css";
import useFetch from "./hooks/useFetch";
function App() {
  const { products } = useFetch("https://dummyjson.com/products");
  console.log(products);

  return (
    <div>
      <h1
        style={{
          textAlign: "center",
        }}
      >
        Custom Hooks
      </h1>
      {products &&
        products?.map((product) => {
          return (
            <div
              className="container"
              style={{
                border: "2px solid black",
                background: "gray",
                color: "white",
                margin: "10px",
                padding: "20px 50px",
              }}
              key={product.id}
            >
              <p>Title : {product.title}</p>
              <p>Description : {product.description}</p>
              <p>Price : {product.price}</p>
            </div>
          );
        })}
    </div>
  );
}

export default App;
