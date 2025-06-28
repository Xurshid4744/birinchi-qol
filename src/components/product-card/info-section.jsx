import { formatAmount } from "@/utils/amountConvertor";
import TypeToogle from "../type-toggle";
import TagsSection from "./tags-section";

const InfoSection = ({ name, price, tags, active, onToggle, handleTag, tag, typeOptions, isTypeLocked }) => (
  <div className="product-info">
    <p className="product-card-name">{name}</p>
    <p className="product-card-price">{formatAmount(price)} UZS</p>
    <TagsSection tags={tags} handleTag={handleTag} tag={tag}/>
    <TypeToogle handleToggle={onToggle} active={active} typeOptions={typeOptions} isTypeLocked={isTypeLocked} />
  </div>
);

export default InfoSection;
