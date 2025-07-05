import { MenuHeader } from "@/components";
import React from "react";
import "./index.scss";
import { useOrderStore } from "@/store/order";
import { formatAmount } from "@/utils/amountConvertor";

const CheckoutPage = () => {
  const orders = useOrderStore((s) => s.orders);

  return (
    <div className="checkout-page container">
      <MenuHeader to={"/cart"} title={"Buyurtma qilish"} />

      <div className="checkout-page-orders-list">
        {orders?.map((item, index) => (
          <div className="checkout-page-order">
            <p className="ellipsis">
              {item?.name} {item?.tag && <span className="tag">( {item?.tag} )</span>}
            </p>
            <p className="order-type">{item?.type}</p>
            <p className="order-price">
              <p>{item?.count}</p>
              <p>x {formatAmount(item?.price)}</p>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CheckoutPage;
