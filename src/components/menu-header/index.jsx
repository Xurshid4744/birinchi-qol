import { ArrowLeft, BrushCleaning, Trash } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";
const MenuHeader = ({ to, title }) => {
  return (
    <div className="menu-header">
      <div className="flexItems gap10">
        <Link to={to} className="menu-header-icon">
          <ArrowLeft />
        </Link>
        <h4>{title}</h4>
      </div>
      <div className="flexItems gap10 clear">🗑️ Tozalash</div>
    </div>
  );
};

export default MenuHeader;
