import { create } from "zustand";
import { persist } from "zustand/middleware";

type User = {
  id: string;
  username: string;
  role: string;
};

type AuthState = {
  user: User | null;
  isLoading: boolean;
  fetchUser: () => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      isLoading: true,

      // Fetch user from /api/auth/me on app load
      fetchUser: async () => {
        try {
          const res = await fetch("/api/auth/me", { credentials: "include" });
          if (!res.ok) throw new Error("Not authenticated");
          const data = await res.json();
          set({ user: data.user, isLoading: false });
        } catch {
          set({ user: null, isLoading: false });
        }
      },

      // Login user and fetch session state
      login: async (email, password) => {
        const res = await fetch("/api/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
          credentials: "include", // Ensure cookies are stored
        });

        if (!res.ok) {
          throw new Error("Login failed");
        }

        await get().fetchUser(); // Fetch user after login
      },

      // Logout and clear session
      logout: async () => {
        await fetch("/api/auth/logout", { method: "POST", credentials: "include" });
        set({ user: null });
      },
    }),
    { name: "auth-storage" } // Persist session state
  )
);
