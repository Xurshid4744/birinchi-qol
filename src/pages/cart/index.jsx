import { Link } from "react-router-dom";
import { CircleCheckBig } from "lucide-react";
import { MenuHeader } from "@/components";
import ProductCard from "@/components/product-card";
import { useOrderStore } from "@/store/order";
import "./index.scss";

const PlaceOrder = () => {
  return (
    <Link to={"/checkout"} className="place-order">
      <CircleCheckBig size={20} /> Buyurtmani rasmiylashtirish
    </Link>
  );
};

const CartPage = () => {
  const getSortedOrders = useOrderStore((s) =>
    s.orders?.sort((a, b) => (a.index || 0) - (b.index || 0))
  );

  return (
    <div className="cart-page container">
      <MenuHeader to={"/"} title="Savat" clear={true} />
      <div className="cart-page-orders">
        {getSortedOrders?.length === 0 && (
          <div className="cart-empty">Savatda mahsulot mavjud emas !</div>
        )}
        {getSortedOrders?.map((item) => (
          <ProductCard product={item} key={item?.id} />
        ))}
      </div>
      {getSortedOrders?.length > 0 && <PlaceOrder />}
    </div>
  );
};

export default CartPage;
