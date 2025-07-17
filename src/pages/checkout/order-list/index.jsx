import { useOrderStore } from "@/store/order";
import { formatAmount } from "@/utils/amountConvertor";
import React from "react";
import "./index.scss";
const OrderList = () => {
  const orders = useOrderStore((s) => s.orders);
  return (
    <div className="checkout-order-list">
      <h6 className="checkout-order-list-title">Mening buyurtmam</h6>
      <div className="orders-list">
        {orders?.map((item, index) => (
          <div className="checkout-page-order">
            <p className="ellipsis">
              {item?.name}{" "}
              {item?.tag && <span className="tag">( {item?.tag} )</span>}
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

export default OrderList;
