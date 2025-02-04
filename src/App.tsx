import { useEffect } from "react";
import { useAuthStore } from "./store/authStore";
import AppRouter from "./router";

export default function App() {
  const fetchUser = useAuthStore((state) => state.fetchUser);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  return <AppRouter />;
}
