import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useOrderStore = create(
  persist(
    (set) => ({
      orders: [],

      addOrder: (newOrder) =>
        set((state) => ({
          orders: [newOrder, ...state.orders],
        })),
    }),

    {
      name: "orders-store",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useOrderStore;
