import React, { useState, useEffect } from "react";

export default function useFetch(url) {
  // data,loading,error
  const [data, setData] = useState([]);
  const [isError, setisError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Initially IsLoading So
    setIsLoading(true);

    async function fetchDataFromAPI() {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Error Fetching Data From API");
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.log(error.message);
        setisError(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchDataFromAPI();
  }, [url]);

  return { data, isError, isLoading };
}
