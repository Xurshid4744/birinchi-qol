import React, { useState } from "react";
import "./index.scss";
const RansomType = ({ orderForm, setOrderForm }) => {
  return (
    <div className="checkout-ransom-type">
      <h6 className="checkout-ransom-type-title">To'lov turi</h6>
      <div
        className="checkout-ransom-type-select"
        data-select={orderForm?.ransomType === 1}
        onClick={() =>
          setOrderForm({
            ...orderForm,
            ransomType: 1,
          })
        }
      >
        <p>💵 Naqt pul bila to'lash</p>
      </div>
      <div
        className="checkout-ransom-type-select"
        data-select={orderForm?.ransomType === 2}
        onClick={() =>
          setOrderForm({
            ...orderForm,
            ransomType: 2,
          })
        }
      >
        <p>💳 Karta bilan to'lash</p>
      </div>
    </div>
  );
};

export default RansomType;
