import React, { useEffect, useState } from "react";
import "./index.css";

function App() {
  const [data, setData] = useState(null);
  const url = "https://dummyjson.com/products";
  useEffect(() => {
    async function fetchDataFromAPI() {
      const response = await fetch(url); // fetch return promise so we await
      const resData = await response.json(); // this also returns promise so we await
      setData(resData);
    }

    fetchDataFromAPI();
  }, []);

  console.log(data);
  const { products } = data;
  return (
    <div>
      <h1
        style={{
          textAlign: "center",
        }}
      >
        Custom Hooks
      </h1>
      {products.map((product) => {
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
