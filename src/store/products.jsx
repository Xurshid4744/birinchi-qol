import axiosInstance from "@/api";
import { create } from "zustand";

const useProductsStore = create((set) => ({
  products: [],
  fetchProducts: async () => {
    try {
      const res = await axiosInstance.get("/product/list");
      set({ products: res.data });
    } catch (error) {
      console.error("Productlarni olishda xatolik:", error);
    }
  },
}));

export default useProductsStore;
