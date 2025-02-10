import { Link } from "react-router-dom";
import { useAuthStore } from "@/store/authStore";

export default function AuthHeader() {
  const { logout } = useAuthStore();

  return (
    <header className="bg-black text-white p-4 flex justify-between items-center">
      <Link to="/home" className="flex items-center gap-3">
        <img src={"/images/bmc_logo.png"}></img>
        <div className="text-2xl font-bold text-yellow-400">
          Berlin Movie Club
        </div>
      </Link>
      <nav>
        <Link to="/events" className="text-lg mx-4 hover:text-yellow-400">
          Events
        </Link>
        <Link to="/movies" className="text-lg mx-4 hover:text-yellow-400">
          Movies
        </Link>
        <Link to="/contact" className="text-lg mx-4 hover:text-yellow-400">
          Contact
        </Link>
        <button onClick={logout} className="btn btn-outline ml-4">
          Log Out
        </button>
      </nav>
    </header>
  );
}
