import axiosInstance from "@/api";
import { create } from "zustand";

const useSettingStore = create((set) => ({
  setting: {
    delivery_fee: null,
    urgent_delivery_fee: null,
    unblock_fee: null,
  },

  fetchSettings: async () => {
    try {
      const res = await axiosInstance.get(`/settings/1`);
      set({ setting: res.data });
    } catch (error) {
      console.error("Error:", error);
    }
  },

  updateSettingState: (key, value) =>
    set((state) => ({
      setting: { ...state.setting, [key]: value },
    })),
}));

export default useSettingStore;
