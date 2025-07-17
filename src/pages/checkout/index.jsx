import { MenuHeader } from "@/components";
import React, { useState } from "react";
import OrderType from "./order-type";
import RansomType from "./ransom-type";
import AllInfo from "./all-info";
import "./index.scss";
import OrderList from "./order-list";
import { useOrderStore } from "@/store/order";
import { useNavigate } from "react-router-dom";

const CheckoutPage = () => {
  const clearOrders = useOrderStore((s) => s.clearOrders);
  const navigate = useNavigate();
  const [orderForm, setOrderForm] = useState({
    orderType: 1,
    ransomType: 1,
  });

  const handleSubmit = () => {
    navigate("/")
    clearOrders();

    if (window.Telegram && Telegram.WebApp) {
      Telegram.WebApp.close();
    } else {
      alert("Telegram Web App topilmadi");
    }
  };

  return (
    <div className="checkout-page ">
      <MenuHeader to={"/cart"} title={"Buyurtmani rasmiylashtirish"} />
      <div className="checkout-page-content">
        <OrderList />
        <OrderType orderForm={orderForm} setOrderForm={setOrderForm} />
        <RansomType orderForm={orderForm} setOrderForm={setOrderForm} />
        <AllInfo orderForm={orderForm} />
        <div className="checkout-page-btn" onClick={handleSubmit}>
          Buyurtmani yakunlash
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
