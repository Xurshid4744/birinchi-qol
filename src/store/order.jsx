import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useOrderStore = create()(
  persist(
    (set, get) => ({
      orders: [],
      addOrder: (newOrder) => {
        const currentOrders = get().orders;

        const existing = currentOrders.find((o) => o.id === newOrder.id);

        if (newOrder.count === 0) {
          set({
            orders: currentOrders.filter((o) => o.id !== newOrder.id),
          });
          return;
        }

        const index = existing?.index ?? (currentOrders.length
            ? Math.max(...currentOrders.map((o) => o.index ?? 0)) + 1
            : 1);

        const orderWithIndex = {
          ...newOrder,
          index,
        };

        const filtered = currentOrders.filter((o) => o.id !== newOrder.id);
        set({
          orders: [...filtered, orderWithIndex],
        });
      },
      clearOrders: () => set({ orders: [] }),
    }),
    {
      name: "order-storage",
      getStorage: () => localStorage,
    }
  )
);
