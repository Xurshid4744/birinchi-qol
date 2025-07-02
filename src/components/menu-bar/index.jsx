import React from "react";
import { NavLink } from "react-router-dom";
import { DiamondPlus, Folders, Plus, ShoppingBag } from "lucide-react";
import "./index.scss";
import { useOrderStore } from "@/store/order";
const MenuBar = () => {
  const order = useOrderStore((s) => s.orders);
  return (
    <div className="container menu-bar">
      <NavLink to={"/cart"} className="menu-bar-link">
        🛒 <span className="badge">{order?.length}</span>
      </NavLink>
      <NavLink to={"/"} className="menu-bar-link">
        📦
      </NavLink>
      <NavLink to={"/orders"} className="menu-bar-link">
        📝
      </NavLink>
    </div>
  );
};

export default MenuBar;
