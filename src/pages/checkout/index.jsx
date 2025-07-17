import { MenuHeader } from "@/components";
import React from "react";
import OrderList from "./order-list";
import OrderType from "./order-type";
import RansomType from "./ransom-type";
import AllInfo from "./all-info";
import "./index.scss";

const CheckoutPage = () => {
  const handleSubmit = () => {
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
        <OrderType />
        <RansomType />
        <AllInfo />
        <div className="checkout-page-btn" onClick={handleSubmit}>
          Buyurtmani yakunlash
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
