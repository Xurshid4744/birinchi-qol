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
      const response = await fetch("/category/list", {
        method: "GET",
        credentials: "include", // agar cookie kerak bo‘lsa
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }

      const data = await response.json();
      set({ categorys: data });
      set({ activeCategory: data[0] });
    } catch (error) {
      console.error("Kategoriya olishda xatolik:", error);
    }
  },

  setActiveCategory: (category) => set({ activeCategory: category }),
}));

export default useCategoryStore;
