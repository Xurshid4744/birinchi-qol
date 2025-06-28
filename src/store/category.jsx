import { CATEGOYS_DATA } from "@/server/categorys";
import { create } from "zustand";

const useCategoryStore = create((set) => ({
  categorys: [],
  activeCategory: {
    id: null,
    title: null,
  },

  fetchCategories: async () => {
    try {
      //   const res = await fetch("/api/categories");
      //   const data = await res.json();
      //   set({ categorys: data });
      set({ categorys: CATEGOYS_DATA });
      set({ activeCategory: CATEGOYS_DATA[0] });
    } catch (error) {
      console.error("Kategoriya olishda xatolik:", error);
    }
  },

  setActiveCategory: (category) => set({ activeCategory: category }),
}));

export default useCategoryStore;
