import React from "react";
import { useState, useReducer } from "react";

function Counter() {
  const [state, setState] = useState({ count: 0 });
  const [data, dispatch] = useReducer();
  const handleIncrease = () => {
    setState((prev) => {
      return { ...prev, count: prev.count + 1 };
    });
  };

  const handleDecrease = () => {
    setState((prev) => {
      return { ...prev, count: prev.count - 1 };
    });
  };

  const handleReset = () => {
    setState((prev) => {
      return { ...prev, count: 0 };
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
