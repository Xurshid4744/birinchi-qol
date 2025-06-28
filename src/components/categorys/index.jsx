import useCategoryStore from "@/store/category";
import "./index.scss";

const Categorys = () => {
  const categorys = useCategoryStore((state) => state.categorys);
  const activeCategory = useCategoryStore((state) => state.activeCategory);
  const setActiveCategory = useCategoryStore(
    (state) => state.setActiveCategory
  );
  return (
    <div className="categorys">
      {categorys?.map((item) => (
        <span
          key={item?.id}
          className="category"
          data-active={activeCategory?.id == item?.id}
          onClick={() => setActiveCategory(item)}
        >
          {item?.title}
        </span>
      ))}
    </div>
  );
};

export default Categorys;
