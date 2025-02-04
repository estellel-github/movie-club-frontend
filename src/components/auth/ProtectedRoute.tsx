import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";

export function ProtectedRoute() {
  const { user } = useAuthStore();
  return user ? <Outlet /> : <Navigate to="/login" replace />;
}
