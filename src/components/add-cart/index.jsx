import React from "react";
import { Minus, Plus } from "lucide-react";
import "./index.scss";

const AddCart = React.memo(({ dic, inc, count }) => {
  return (
    <div className="add-cart">
      <button className="add-cart-btn" onClick={dic} disabled={count === 0}><Minus/></button>
      <span>{count}</span>
      <button className="add-cart-btn" onClick={inc}><Plus/></button>
    </div>
  );
});

export default AddCart;
