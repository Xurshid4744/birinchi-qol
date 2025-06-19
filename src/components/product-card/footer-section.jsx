import { formatAmount } from "@/utils/amountConvertor";
import AddCart from "../add-cart";

const FooterSection = ({ total, count, inc, dic }) => (
  <div className="product-card-footer">
    <p className="product-card-total">{formatAmount(total)} UZS</p>
    <div className="product-card-add-cart">
      <AddCart dic={dic} inc={inc} count={count} />
    </div>
  </div>
);

export default FooterSection;
