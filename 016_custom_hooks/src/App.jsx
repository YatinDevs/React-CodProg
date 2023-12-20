import React, { useEffect, useState } from "react";
import "./index.css";
import useFetch from "./hooks/useFetch";
function App() {
  console.log(`App rendered`);
  const { products, isLoading, error } = useFetch(
    "https://dummyjson.com/products"
  );
  console.log(products, `data from Api`);

  if (isLoading) {
    return (
      <div>
        <h1>Imagine A Fancy Loader</h1>
      </div>
    );
  }

  if (error) {
    return <h1>{error}</h1>;
  }
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
