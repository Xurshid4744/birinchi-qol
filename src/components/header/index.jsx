import React from "react";
import { CartComponent } from "..";
import "./index.scss";
const Header = () => {
  return (
    <header className="header">
      Bazarly
      <CartComponent />
    </header>
  );
};

export default Header;
