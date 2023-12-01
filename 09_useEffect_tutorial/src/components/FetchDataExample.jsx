import React, { useEffect, useState } from "react";
import User from "./User";

// ! 2. Fetching Data After the Component is Rendered.
const URL = "https://jsonplaceholder.typicode.com/users";
// We can fetch with API using:
// 1. Promise.
// 2. async await.

// useEffect(()=>{}) - > Rendered Everytime on Component Re-render.
// useEffect(()=>{},[]) - > Once Initial Render.=> doesnt consider State Change.
// useEffect(()=>{},[listItem]) - > Initial and on Dependencies.
function FetchDataExample() {
  console.log("FetchDataExample Component Rendered...");

  // to Store Data From API.

  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [iserror, setIsError] = useState(false);
  const [errormsg, setErrormsg] = useState(false);

  // 1. Promise.

  // useEffect(() => {
  //   console.log("Inside use Effect fetch..");

  //   fetch(URL)
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       console.log(data);
  //       return data;
  //     });
  // }, []);

  useEffect(() => {
    console.log("Inside useEffect Callback..");

    const controller = new AbortController();
    const signal = controller.signal;
    // 2. async await.
    const fetchData = async () => {
      console.log("Inside fetchData func..");

      // setIsLoading(true);
      const response = await fetch(URL, { signal: signal });
      console.log(response);
      if (!(response.status >= 200 && response.status <= 299)) {
        setIsError(true);
        setErrormsg(`${response.status} Error`);
        setIsLoading(false);
        return;
      }
      const data = await response.json();
      console.log(data);
      setUsers(data);
      setIsLoading(false);
    };

    fetchData();
    return function () {
      console.log("cleanup aborting Request..");
      controller.abort();
    };
  }, []);

  if (isLoading) {
    return <h1>Imagine A WebBrowser Loader with Lazy Loading .....</h1>;
  }

  if (iserror) {
    return (
      <h1>
        SomeThing Went Wrong <span>{errormsg}</span>
      </h1>
    );
  }

  return (
    <div>
      <h1>Use Effect For Data Fetching.</h1>
      <ol>
        {users?.map((user) => (
          <User key={user.id} {...user} />
        ))}
      </ol>
    </div>
  );
}

export default FetchDataExample;
