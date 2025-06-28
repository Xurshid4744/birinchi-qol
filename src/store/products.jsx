import { PRODUCTS_DATA } from "@/server/products";
import { create } from "zustand";

const useProductsStore = create((set) => ({
  products: [],
  fetchProducts: async () => {
    try {
      //   const res = await fetch("/api/categories");
      //   const data = await res.json();
      //   set({ categorys: data });
      set({ products: PRODUCTS_DATA });
    } catch (error) {
      console.error("Productlarni olishda xatolik:", error);
    }
  },
}));

export default useProductsStore;
