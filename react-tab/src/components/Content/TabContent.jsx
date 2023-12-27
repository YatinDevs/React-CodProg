import React, { useState } from "react";
import "../../index.css";

function TabContent({ item }) {
  const [showDetails, setShowDetails] = useState(true);
  const [likes, setLikes] = useState(0);

  const handleIncrease = () => {
    setLikes((prev) => prev + 1);
  };
  return (
    <div className="tab-content">
      <h4>{item.summary}</h4>
      {showDetails && <p>{item.details}</p>}

      <div className="tab-actions">
        <button onClick={() => setShowDetails((show) => !show)}>
          {showDetails ? "Hide" : "Show"}
        </button>

        <div className="hearts-counter">
          <span>{likes}💗</span>
          <button onClick={handleIncrease}>+</button>
          <button>+++</button>
        </div>
      </div>

      <div className="tab-undo">
        <button>Undo</button>
        <button>Undo in 3s</button>
      </div>
    </div>
  );
}

export default TabContent;
