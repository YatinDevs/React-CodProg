import React, { useState, useEffect } from "react";

// Counter Application
const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrease = (e) => {
    setCount((count) => count + 1);
  };
  const handleDecrease = (e) => {
    setCount((count) => count - 1);
  };
  const handleReset = (e) => {
    setCount(0);
  };
  return (
    <div>
      <button onClick={handleIncrease}>Increase</button>
      <div>Count : {count}</div>
      <button onClick={handleDecrease}>Decrease</button>
      <br></br>
      <br></br>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Counter;
