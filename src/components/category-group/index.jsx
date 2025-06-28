import React from "react";
import ProductCard from "../product-card";
import "./index.scss";

const CategoryGroup = ({ title, products }) => {
  return (
    <div className="category-group">
      <h4 className="category-title">{title}</h4>
      <div className="category-group-products">
        {products?.map((item) => (
          <ProductCard product={item} key={item?.id} />
        ))}
      </div>
    </div>
  );
};

export default React.memo(CategoryGroup, (prevProps, nextProps) => {
  return (
    prevProps.title === nextProps.title &&
    prevProps.products === nextProps.products
  );
});
