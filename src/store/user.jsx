import { create } from "zustand";

const useUserStore = create((set) => ({
  user: {
    id: null,
    is_bot: false,
    first_name: null,
    last_name: null,
    username: null,
    language_code: null,
    allows_write_to_pm: true,
    photo_url: null,
    phone: null,
    address: null,
    account: "BASIC",
  },
  updateUserState: (key, value) =>
    set((state) => ({
      user: { ...state.user, [key]: value },
    })),

  clearUserState: () =>
    set({
      user: {
        id: null,
        is_bot: false,
        first_name: null,
        last_name: null,
        username: null,
        language_code: null,
        allows_write_to_pm: true,
        photo_url: null,
      },
    }),
}));

export default useUserStore;
