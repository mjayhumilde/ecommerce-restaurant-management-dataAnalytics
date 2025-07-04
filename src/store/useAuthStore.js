import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useAuthStore = create(
  persist(
    (set) => ({
      user: {
        name: "Lhenard Kaiser",
        email: "lhenardkaiser00@gmail.com",
      },
      isAuthenticated: true,
      userRole: "user",

      login: (role) => set({ isAuthenticated: true, userRole: role }),
      logout: () => set({ isAuthenticated: false, userRole: null }),
    }),
    {
      name: "auth-store",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useAuthStore;
