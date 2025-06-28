import React from "react";
import { NavLink } from "react-router-dom";
import { DiamondPlus, Folders, Plus, ShoppingBag } from "lucide-react";
import "./index.scss";
const MenuBar = () => {
  return (
    <div className="menu-bar">
      <NavLink to={"/cart"} className="menu-bar-link" s>
        <ShoppingBag />
      </NavLink>
      <NavLink to={"/"} className="menu-bar-link" s>
        <DiamondPlus />
      </NavLink>
      <NavLink to={"/orders"} className="menu-bar-link" s>
        <Folders />
      </NavLink>
    </div>
  );
};

export default MenuBar;
