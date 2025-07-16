import { ShoppingCart } from "lucide-react";
import React from "react";
import "./index.scss";
import { useOrderStore } from "@/store/order";
const CartComponent = () => {
  const orders = useOrderStore((s) => s.orders);
  return (
    <div className="cart-component">
      <div className="cart-icon">
        <ShoppingCart strokeWidth={1} />
        {orders?.length > 0 && <span className="cart-count">{orders?.length}</span>}
      </div>
    </div>
  );
};

export default CartComponent;
