import React, { useState } from "react";
import "./index.scss";
const RansomType = () => {
  const [select, setSelect] = useState(1);

  return (
    <div className="checkout-ransom-type">
      <h6 className="checkout-ransom-type-title">To'lov turi</h6>
      <div
        className="checkout-ransom-type-select"
        data-select={select === 1}
        onClick={() => setSelect(1)}
      >
        <p>💵 Naqt pul bila to'lash</p>
      </div>
      <div
        className="checkout-ransom-type-select"
        data-select={select === 2}
        onClick={() => setSelect(2)}
      >
        <p>💳 Karta bilan to'lash</p>
      </div>
    </div>
  );
};

export default RansomType;
