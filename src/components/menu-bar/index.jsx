import React from "react";
import { Link } from "react-router-dom";
import { useOrderStore } from "@/store/order";
import { formatAmount } from "@/utils/amountConvertor";
import "./index.scss";
const MenuBar = () => {
  const order = useOrderStore((s) => s.orders);
  const getTotalSum = useOrderStore((s) => s.getTotalSum);
  return (
    <div className="menu-bar">
      <Link to={"/cart"} className="menu-bar-link">
        <p>Savatda: {order?.length > 0 ? `${order?.length} ta mahsulot` : 'Mahsulot mavjud emas'}</p>
        <p>{formatAmount(getTotalSum()) || 0} so'm</p>
      </Link>
    </div>
  );
};

export default MenuBar;
