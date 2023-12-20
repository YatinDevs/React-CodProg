import React from "react";
import { useState, useReducer } from "react";

function reducer(state, action) {
  console.log(state, action);
  //   if (action.type === "INCREMENT") {
  //     return { ...state, count: state.count + 1 };
  //   }
  //   if (action.type === "DECREASE") {
  //     return { ...state, count: state.count - 1 };
  //   }
  //   if (action.type === "RESET") {
  //     return { ...state, count: 0 };
  //   }

  switch (action.type) {
    case "INCREMENT":
      console.log("INCREMENT", action, action.type);
      return { ...state, count: state.count + 1 };
    case "DECREASE":
      console.log("DECREASE", action, action.type);

      return { ...state, count: state.count - 1 };
    case "RESET":
      console.log("RESET", action, action.type);

      return { ...state, count: 0 };
  }
  return state;
}
const initialState = { count: 0 };
function Counter() {
  //   const [state, setState] = useState({ count: 0 });
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleIncrease = () => {
    // setState((prev) => {
    //   return { ...prev, count: prev.count + 1 };
    // });
    console.log("increase fn invoked");

    dispatch({
      type: "INCREMENT",
    });
  };

  const handleDecrease = () => {
    // setState((prev) => {
    //   return { ...prev, count: prev.count - 1 };
    // });
    dispatch({
      type: "DECREASE",
    });
  };

  const handleReset = () => {
    // setState((prev) => {
    //   return { ...prev, count: 0 };
    // });
    dispatch({
      type: "RESET",
    });
  };
  return (
    <div>
      <h2>Counter Application</h2>
      <p>{state.count}</p>
      <div>
        <button onClick={handleIncrease}>Increase</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleDecrease}>Decrease</button>
      </div>
    </div>
  );
}

export default Counter;
