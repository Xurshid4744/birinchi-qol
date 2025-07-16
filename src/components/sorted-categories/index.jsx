import React from "react";
import { CategoryGroup } from "..";
import useCategoryStore from "@/store/category";
import useProductsStore from "@/store/products";

const SortedCategories = () => {
  const categorys = useCategoryStore((state) => state.categorys);
  const products = useProductsStore((state) => state.products);
  const activeCategory = useCategoryStore((state) => state.activeCategory);

  const groupedProducts = React.useMemo(() => {
    const map = new Map();
    products.forEach((product) => {
      if (!map.has(JSON.parse(product.category)?.id)) {
        map.set(JSON.parse(product.category)?.id, []);
      }
      map.get(JSON.parse(product.category)?.id).push(product);
    });
    return map;
  }, [products]);

  const sortedCategorys = React.useMemo(() => {
    if (!activeCategory?.id) return categorys;
    const other = categorys.filter((cat) => cat.id !== activeCategory.id);
    const active = categorys.find((cat) => cat.id === activeCategory.id);
    return active ? [active, ...other] : categorys;
  }, [categorys, activeCategory]);

  return (
    <div className="sorted-categories">
      {JSON.stringify(products)}
      {sortedCategorys?.map((item) => (
        <CategoryGroup
          key={item?.id}
          title={item?.title}
          products={groupedProducts.get(item?.id) || []}
        />
      ))}
    </div>
  );
};

export default SortedCategories;
