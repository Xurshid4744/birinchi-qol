import TypeToogle from "../type-toggle";

const InfoSection = ({ name, price, tags, active, onToggle }) => (
  <div>
    <p className="product-card-name">{name}</p>
    <p className="product-card-price">{price} UZS</p>
    {/* <p className="product-card-tag">( {tags?.[0]} )</p> */}
    <div className="product-card-tags">
      {tags?.map((item) => (
        <p className="product-card-tag" key={item}>
          {item}
        </p>
      ))}
    </div>
    <TypeToogle handleToggle={onToggle} active={active} />
  </div>
);

export default InfoSection;
