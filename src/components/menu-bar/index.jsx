import React from "react";
import { Link } from "react-router-dom";
import { useOrderStore } from "@/store/order";
import { formatAmount } from "@/utils/amountConvertor";
import "./index.scss";
import { MIN_ORDER_AMOUNT } from "@/constants/common";
import { ShoppingBasket } from "lucide-react";
const MenuBar = () => {
  const order = useOrderStore((s) => s.orders);
  const getTotalSum = useOrderStore((s) => s.getTotalSum);
  const isActive = getTotalSum() >= MIN_ORDER_AMOUNT;
  return (
    <div className="menu-bar">
      <Link to={"/cart"} className="menu-bar-link">
        <span className="menu-bar-icon">
          <ShoppingBasket />
        </span>
        <div style={{textAlign: 'center'}}>
          <p className="menu-bar-total-amount">{formatAmount(getTotalSum()) || 0} UZS</p>
          {!isActive && (
            <p className="menu-bar-min-amount">
              Min. buyurtma {formatAmount(MIN_ORDER_AMOUNT)} UZS
            </p>
          )}
        </div>
      </Link>
    </div>
  );
};

export default MenuBar;
