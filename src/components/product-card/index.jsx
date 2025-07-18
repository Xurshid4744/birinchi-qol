import React from "react";
import { useProductLogic } from "./useProductLogic";
import ImageSection from "./image-section";
import InfoSection from "./info-section";
import FooterSection from "./footer-section";
import "./index.scss";

const ProductCard = ({ product, width = '100%' }) => {
  const { count, total, type, dic, inc, toggleType, handleTag, tag, price, typeOptions, isTypeLocked} = useProductLogic(product);

  return (
    <article className="product-card" style={{width: `${width}`}}>
      {!product?.status && <div className="product-status">Omborda mavjud emas !</div>}
      <div className="flex gap10">
        <ImageSection img={product.img} name={product.name} />
        <InfoSection
          name={product.name}
          price={price}
          tags={product.tags}
          active={type}
          onToggle={toggleType}
          handleTag={handleTag}
          tag={tag}
          typeOptions={typeOptions}
          isTypeLocked={isTypeLocked}
          width={width}
        />
      </div>
      <FooterSection total={total} count={count} inc={inc} dic={dic} />
    </article>
  );
};

export default React.memo(ProductCard, (prev, next) => {
  return prev.product === next.product;
});
