import { Outlet, useLocation } from "react-router-dom";
import PublicHeader from "@/components/layout/PublicHeader";
import AuthHeader from "@/components/layout/AuthHeader";
import Footer from "@/components/layout/Footer";
import { useAuthStore } from "@/store/authStore"; // Zustand auth store

export default function Layout() {
  const { user } = useAuthStore(); // Check auth state
  const location = useLocation();

  // Define public routes
  const publicRoutes = [
    "/",
    "/events-public",
    "/contact",
    "/signup",
    "/login",
    "/reset-password",
    "/set-new-password",
  ];

  // Check if current route is public
  const isPublicRoute = publicRoutes.includes(location.pathname);

  return (
    <div className="bg-neutral-900 text-neutral-200 max-w-4xl border-l-2 border-r-2 border-stone-800 min-h-screen flex flex-col">
      {/* Render appropriate header */}
      {user || !isPublicRoute ? <AuthHeader /> : <PublicHeader />}

      <main className="w-full flex-grow container mx-auto flex flex-col">
        <Outlet /> {/* This will load the current page inside the layout */}
      </main>

      <Footer />
    </div>
  );
}
