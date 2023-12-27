import React from "react";
import "../../index.css";

function Tab({ num, activeTab, onClick }) {
  return (
    <button
      className={activeTab == num ? "tab active" : "active"}
      onClick={() => onClick(num)}
    >
      Tab {num + 1}
    </button>
  );
}

export default Tab;
