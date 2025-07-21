import { formatAmount } from "@/utils/amountConvertor";
import AddCart from "../add-cart";

const FooterSection = ({ total, count, inc, dic }) => (
  <div className="product-card-footer">
    {count === 0 && (
      <p onClick={inc} className="add-cart-button">
        Savatga
      </p>
    )}
    {count > 0 && <AddCart dic={dic} inc={inc} count={count} total={total} />}
  </div>
);

export default FooterSection;
