import ProductCard from "@/components/product-card";
import React from "react";

const MegaSale = () => {
  const products = [
    {
      id: 1,
      name: "Cola daweda awedawed aedaeda edaeda wedadae adeaed aedaeda weda wed awedae",
      description: '250 ml',
      unit_price: 15000,
      block_price: null,
      category_id: 1,
      sub_category_id: 2,
      img: "https://atlas-content-cdn.pixelsquid.com/stock-images/coca-cola-2l-bottle-soda-o0Q5mXB-600.jpg",
      sale: 25,
    },
    {
      id: 2,
      name: "Cola",
      unit_price: 15000,
      block_price: 25000,
      category_id: 1,
      sub_category_id: 2,
      img: "https://atlas-content-cdn.pixelsquid.com/stock-images/coca-cola-2l-bottle-soda-o0Q5mXB-600.jpg",
      sale: 25,
    },
    {
      id: 3,
      name: "Cola",
      unit_price: null,
      block_price: 25000,
      category_id: 1,
      sub_category_id: 2,
      img: "https://atlas-content-cdn.pixelsquid.com/stock-images/coca-cola-2l-bottle-soda-o0Q5mXB-600.jpg",
      sale: 25,
    },
  ];
  return (
    <div className="flex" style={{ marginTop: "20px" }}>
      {products?.map((item) => (
        <ProductCard product={item} key={item?.id} />
      ))}
    </div>
  );
};

export default MegaSale;
