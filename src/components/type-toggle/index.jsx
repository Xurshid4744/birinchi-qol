import React from "react";
import "./index.scss";


const TypeToggle = React.memo(({ handleToggle, active, typeOptions, isTypeLocked }) => {
  return (
    <div className="type-toggle">
      {typeOptions.map((option) => (
        <div
          key={option}
           onClick={() => !isTypeLocked && handleToggle(option)} 
          className={`type-toggle-item ${active === option ? "active" : ""} ${isTypeLocked ? "locked" : ""}`}
        >
          {option}
        </div>
      ))}
    </div>
  );
});

export default TypeToggle;
