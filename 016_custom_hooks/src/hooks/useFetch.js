import React, { useState, useEffect } from "react";

// const url = "https://dummyjson.com/products";

function useFetch(url) {
  console.log(`fetching data api call`);
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchDataFromAPI() {
      const response = await fetch(url); // fetch return promise so we await
      const resData = await response.json(); // this also returns promise so we await
      setData(resData);
    }

    fetchDataFromAPI();
  }, [url]);
  const { products } = data;
  return { products };
}

export default useFetch;
