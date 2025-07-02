import React from "react";
import { Outlet } from "react-router-dom";
import { MenuBar } from "@/components";
import "./index.scss";
const Layout = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default Layout;
