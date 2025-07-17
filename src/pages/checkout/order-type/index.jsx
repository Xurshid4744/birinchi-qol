import React, { useState } from "react";
import "./index.scss";
const OrderType = ({ orderForm, setOrderForm }) => {
  return (
    <div className="checkout-order-type">
      <h6 className="checkout-order-type-title">Buyurtma turi</h6>
      <div
        className="checkout-order-type-select"
        data-select={orderForm?.orderType === 1}
        onClick={() =>
          setOrderForm({
            ...orderForm,
            orderType: 1,
          })
        }
      >
        <p>🚚 Yetkazib berish</p>
        <span>Buyurtmangizni o'zimiz yetkazib beramiz.</span>
      </div>
      <div
        className="checkout-order-type-select"
        data-select={orderForm?.orderType === 2}
        onClick={() =>
          setOrderForm({
            ...orderForm,
            orderType: 2,
          })
        }
      >
        <p>🏃‍♂️ Olib ketish</p>
        <span>O'zingiz olib ketishingiz mumkin.</span>
      </div>
    </div>
  );
};

export default OrderType;
