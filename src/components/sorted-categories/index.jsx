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
      if (!map.has(product.category_id)) {
        map.set(product.category_id, []);
      }
      map.get(product.category_id).push(product);
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
