import axiosInstance from "@/api";
import { create } from "zustand";

const useCategoryStore = create((set) => ({
  categorys: [],
  activeCategory: {
    id: null,
    title: null,
  },

  fetchCategories: async () => {
    try {
      const res = await axiosInstance.get("/category/list");
      set({ categorys: res.data });
      set({ activeCategory: res.data[0] });
    } catch (error) {
      console.error("Kategoriya olishda xatolik:", error);
    }
  },

  setActiveCategory: (category) => set({ activeCategory: category }),
}));

export default useCategoryStore;
