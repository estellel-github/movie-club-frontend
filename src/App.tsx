import { useEffect } from "react";
import { useAuthStore } from "./store/authStore";
import AppRouter from "./router";

export default function App() {
  const fetchUser = useAuthStore((state) => state.fetchUser);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  return (
    <div className="flex items-center justify-center mx-auto px-4 bg-linear-to-b/srgb from-black via-95%-gray-800 to-gray-600">
      <AppRouter />
    </div>
  );
}
