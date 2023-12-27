import React from "react";
import Tabbed from "./components/Tabbed/Tabbed";
import { content } from "./data/data";
import "./index.css";
function App() {
  return (
    <div>
      <Tabbed content={content} />
    </div>
  );
}

export default App;
