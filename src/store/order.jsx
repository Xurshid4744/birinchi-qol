import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useOrderStore = create()(
  persist(
    (set, get) => ({
      orders: [],
      // addOrder: (newOrder) =>
      //   set({
      //     orders: [
      //       ...get().orders.filter((o) => o.id !== newOrder.id),
      //       newOrder,
      //     ],
      //   }),
      addOrder: (newOrder) => {
        const currentOrders = get().orders;

        if (newOrder.count === 0) {
          set({
            orders: currentOrders.filter((o) => o.id !== newOrder.id),
          });
        } else {
          const filtered = currentOrders.filter((o) => o.id !== newOrder.id);
          set({
            orders: [...filtered, newOrder],
          });
        }
      },
      clearOrders: () => set({ orders: [] }),
    }),
    {
      name: "order-storage",
      getStorage: () => localStorage,
    }
  )
);
