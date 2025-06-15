import React from "react";
import { useProductLogic } from "./useProductLogic";
import ImageSection from "./image-section";
import InfoSection from "./info-section";
import FooterSection from "./footer-section";
import "./index.scss";

const ProductCard = ({ product }) => {
  const { count, total, type, dic, inc, toggleType, price } = useProductLogic(product);

  return (
    <article className="product-card">
      <div className="flex gap10">
        <ImageSection img={product.img} name={product.name} />
        <InfoSection
          name={product.name}
          price={price}
          tags={product.tags}
          active={type}
          onToggle={toggleType}
        />
      </div>
      <FooterSection total={total} count={count} inc={inc} dic={dic} />
    </article>
  );
};

export default ProductCard;
