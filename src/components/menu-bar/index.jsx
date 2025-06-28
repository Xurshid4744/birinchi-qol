import React from "react";
import { NavLink } from "react-router-dom";
import { DiamondPlus, Folders, ShoppingBag } from "lucide-react";
import "./index.scss";
const MenuBar = () => {
  return (
    <div className="menu-bar">
      <NavLink to={"/cart"} className="menu-bar-link" s>
        <ShoppingBag size={20}/>
      </NavLink>
      <NavLink to={"/"} className="menu-bar-link" s>
        <DiamondPlus size={20}/>
      </NavLink>
      <NavLink to={"/orders"} className="menu-bar-link" s>
        <Folders size={20}/>
      </NavLink>
    </div>
  );
};

export default MenuBar;
