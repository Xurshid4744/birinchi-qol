import React from "react";
import "./index.scss";

const options = ["BLOK", "DONA"];

const TypeToggle = React.memo(({ handleToggle, active }) => {
  return (
    <div className="type-toggle">
      {options.map((option) => (
        <div
          key={option}
          onClick={() => handleToggle(option)}
          className={`type-toggle-item ${active === option ? "active" : ""}`}
        >
          {option}
        </div>
      ))}
    </div>
  );
});

export default TypeToggle;
