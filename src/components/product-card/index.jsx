import React from "react";
import { useProductLogic } from "./useProductLogic";
import ImageSection from "./image-section";
import InfoSection from "./info-section";
import FooterSection from "./footer-section";
import "./index.scss";

const ProductCard = ({ product }) => {
  const {
    count,
    total,
    type,
    dic,
    inc,
    toggleType,
    price,
    typeOptions,
    isTypeLocked,
  } = useProductLogic(product);

  return (
    <article className="product-card">
      <ImageSection
        img={product.img}
        name={product.name}
        handleToggle={toggleType}
        active={type}
        typeOptions={typeOptions}
        isTypeLocked={isTypeLocked}
      />
      <InfoSection
        name={product.name}
        description={product.description}
        price={price}
        sale={product.sale}
      />
      <FooterSection
        total={total}
        count={count}
        inc={inc}
        dic={dic}
        active={type}
        onToggle={toggleType}
        typeOptions={typeOptions}
        isTypeLocked={isTypeLocked}
      />
    </article>
  );
};

export default React.memo(ProductCard, (prev, next) => {
  return prev.product === next.product;
});
