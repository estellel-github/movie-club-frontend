import { create } from "zustand";
import { persist } from "zustand/middleware";

type AuthState = {
  user: { id: string; username: string } | null;
  login: (user: { id: string; username: string }) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      login: (user) => set({ user }),
      logout: () => set({ user: null }),
    }),
    {
      name: "auth-storage", // Key for localStorage
    }
  )
);
