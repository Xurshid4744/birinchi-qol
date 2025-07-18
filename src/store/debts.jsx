import axiosInstance from "@/api";
import { create } from "zustand";

const useDebtsStore = create((set) => ({
  debts: null,
  fetchDebts: async (id) => {
    try {
      const res = await axiosInstance.get(`/client/debt/${id}`);
      set({ debts: res.data });
    } catch (error) {
      console.error("Qarzlarni olishda xatolik:", error);
    }
  },
}));

export default useDebtsStore;
