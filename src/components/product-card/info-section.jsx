import { formatAmount } from "@/utils/amountConvertor";

const InfoSection = ({ name, description, price, sale }) => (
  <div className="product-info">
    <p className="product-card-price">{formatAmount(price)} so'm</p>
    <p className="product-card-name">{name}</p>
    <p className="product-card-desc">{description}</p>
    
  </div>
);

export default InfoSection;
