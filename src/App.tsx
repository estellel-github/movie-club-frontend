import { useEffect } from "react";
import { useAuthStore } from "./store/authStore";
import AppRouter from "./router";

export default function App() {
  const fetchUser = useAuthStore((state) => state.fetchUser);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  return (
    <div className="flex items-center justify-center mx-auto bg-linear-to-b/srgb from-neutral-950 via-95%-stone-950 to-stone-800">
      <AppRouter />
    </div>
  );
}
