import { ArrowLeft, BrushCleaning, Trash2 } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";
import { useOrderStore } from "@/store/order";
const MenuHeader = ({ to, title, clear = false }) => {
  const clearOrders = useOrderStore((s) => s.clearOrders);
  return (
    <div className="menu-header">
      <div className="flexItems gap10">
        <Link to={to} className="menu-header-icon">
          <ArrowLeft size={30} />
        </Link>
        <h4>{title}</h4>
      </div>
      {clear && (
        <div className="flexItems gap10 clear" onClick={clearOrders}>
          <img src="/assets/image/garbage-can.png" alt="bin" />
        </div>
      )}
    </div>
  );
};

export default MenuHeader;
