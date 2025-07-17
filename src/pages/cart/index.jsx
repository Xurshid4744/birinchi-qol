import { Link } from "react-router-dom";
import { CircleCheckBig } from "lucide-react";
import { MenuHeader } from "@/components";
import ProductCard from "@/components/product-card";
import { useOrderStore } from "@/store/order";
import "./index.scss";
import { MIN_ORDER_AMOUNT } from "@/constants/common";
import { formatAmount } from "@/utils/amountConvertor";

const PlaceOrder = () => {
  const getTotalSum = useOrderStore((s) => s.getTotalSum);
  const isActive = getTotalSum() >= MIN_ORDER_AMOUNT;

  return (
    <div className="menu-bar">
      {isActive ? (
        <Link to={"/checkout"} className="place-order">
          <CircleCheckBig size={20} /> Buyurtmani rasmiylashtirish
        </Link>
      ) : (
        <div style={{ textAlign: "center" }} className="menu-bar-link disabled" >
          <p className="menu-bar-total-amount">
           Jami: {formatAmount(getTotalSum()) || 0} UZS
          </p>
          {!isActive && (
            <p className="menu-bar-min-amount">
              Min. buyurtma {formatAmount(MIN_ORDER_AMOUNT)} UZS
            </p>
          )}
        </div>
      )}
    </div>
  );
};

const CartPage = () => {
  const getSortedOrders = useOrderStore((s) =>
    s.orders?.sort((a, b) => (a.index || 0) - (b.index || 0))
  );

  return (
    <div className="cart-page container">
      <MenuHeader to={"/"} title="Savatcha" clear={true} />
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
