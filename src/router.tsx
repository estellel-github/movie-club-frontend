import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import Landing from "@/pages/preauth/Landing";
import EventsPublic from "@/pages/preauth/EventsPublic";
import Contact from "@/pages/preauth/Contact";
import Signup from "@/pages/preauth/Signup";
import Login from "@/pages/preauth/Login";
import ResetPassword from "@/pages/preauth/PasswordReset";
import Home from "@/pages/user/Home";
import Events from "@/pages/user/Events";
import EventDetails from "@/pages/user/EventDetails";
import Movies from "@/pages/user/Movies";
import MovieDetails from "@/pages/user/MovieDetails";
import MovieManagement from "@/pages/management/MovieManagement";
import EventManagement from "@/pages/management/EventManagement";
import NotFound from "@/pages/NotFound";
import { ProtectedRoute } from "@/components/auth/ProtectedRoute";
import SetNewPassword from "./pages/preauth/SetNewPassword";
import ScrollToTop from "./components/utils/ScrollToTop";

export default function AppRouter() {
  return (
    <Router>
      {/* Ensure new page starts at the top */}
      <ScrollToTop />
      <Routes>
        {/* Wrap all pages inside Layout */}
        <Route path="/" element={<Layout />}>
          {/* Public Routes */}
          <Route index element={<Landing />} />
          <Route path="events" element={<EventsPublic />} />
          <Route path="contact" element={<Contact />} />
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
          <Route path="reset-password" element={<ResetPassword />} />
          <Route path="/set-new-password" element={<SetNewPassword />} />

          {/* Protected Routes (Require Authentication) */}
          <Route element={<ProtectedRoute />}>
            <Route path="home" element={<Home />} />
            <Route path="events/:eventId" element={<EventDetails />} />
            <Route path="events" element={<Events />} />
            <Route path="movies" element={<Movies />} />
            <Route path="movies/:movieId" element={<MovieDetails />} />
            <Route path="admin/movies" element={<MovieManagement />} />
            <Route path="admin/events" element={<EventManagement />} />
          </Route>

          {/* 404 Page */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}
