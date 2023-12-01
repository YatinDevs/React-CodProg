import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>useReducer Tutorial</h1>
      <hr />
      <h2>Counter Application</h2>
      <h2>{count}</h2>
      <button onClick={() => setCount((n) => n + 1)}>Increase</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => setCount((n) => n - 1)}>Decrease</button>
    </div>
  );
}

export default App;
