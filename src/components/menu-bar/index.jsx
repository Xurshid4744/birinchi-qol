import React from "react";
import { NavLink } from "react-router-dom";
import { useOrderStore } from "@/store/order";
import { formatAmount } from "@/utils/amountConvertor";
import "./index.scss";
const MenuBar = () => {
  const order = useOrderStore((s) => s.orders);
  const getTotalSum = useOrderStore((s) => s.getTotalSum);
  return (
    <div className="menu-bar">
      <NavLink to={"/cart"} className="menu-bar-link">
        <p>Savatda: {order?.length} xil mahsulot</p>
        <p>{formatAmount(getTotalSum())} so'm</p>
      </NavLink>
    </div>
  );
};

export default MenuBar;
