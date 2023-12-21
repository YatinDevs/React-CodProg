import React, { useState, useEffect } from "react";

// const url = "https://dummyjson.com/products";

function useFetch(url) {
  console.log(`inside Custom hook`);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    console.log(`inside useEffect`);
    setIsLoading(true);

    const controller = new AbortController();

    async function fetchDataFromAPI() {
      console.log(`inside fetchfromAPI`);

      try {
        const response = await fetch(url, { signal: controller.signal }); // fetch return promise so we await
        if (!response.ok) {
          throw Error("Something Went Wrong");
        }
        const resData = await response.json(); // this also returns promise so we await
        console.log(`resdata`, resData);

        setData(resData);
        setError(null);
      } catch (error) {
        console.dir(error);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchDataFromAPI();

    return () => {
      controller.abort();
    };
  }, [url]);

  return { data, isLoading, error };
}

export default useFetch;
