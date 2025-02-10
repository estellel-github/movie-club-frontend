import { Link } from "react-router-dom";
import { useAuthStore } from "@/store/authStore";

export default function AuthHeader() {
  const { logout } = useAuthStore();

  const handleClick = () => {
    const elem = document.activeElement as HTMLElement | null;
    if (elem) {
      elem.blur(); // Removes focus from dropdown, closing it automatically
    }
  };

  return (
    <div className="navbar bg-black text-white px-6 border-b-2 border-b-stone-800 justify-between">
      {/* Left (Logo & Brand) */}
      <div className="navbar-start">
        <Link to="/home" className="flex items-center gap-3">
          <img src={"/images/bmc_logo.png"} className="h-8 w-auto" alt="Logo" />
          <span className="text-sm lg:text-2xl font-bold text-yellow-400">
            Berlin Movie Club
          </span>
        </Link>
      </div>

      {/* Center (Navigation for larger screens) */}
      <div className="navbar-center hidden lg:flex"></div>

      {/* Right (Authenticated Links) */}
      <div className="navbar-end hidden lg:flex gap-4">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/events" className="hover:text-yellow-400 text-xl">
              Events
            </Link>
          </li>
          <li>
            <Link to="/movies" className="hover:text-yellow-400 text-xl">
              Movies
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-yellow-400 text-xl">
              Contact
            </Link>
          </li>
        </ul>
        <button onClick={logout} className="btn btn-sm btn-outline">
          Log Out
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div className="navbar-end lg:hidden w-64">
        <div className="dropdown w-64">
          <div tabIndex={0} role="button" className="flex justify-end">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content w-full bg-black text-neutral-200 rounded-box z-[1] mt-3 p-2 shadow -top-6"
          >
            <li onClick={handleClick}>
              <Link to="/events" className="text-2xl mb-4">
                Events
              </Link>
            </li>
            <li onClick={handleClick}>
              <Link to="/movies" className="text-2xl mb-4">
                Movies
              </Link>
            </li>
            <li onClick={handleClick}>
              <Link to="/contact" className="text-2xl mb-4">
                Contact
              </Link>
            </li>
            <li onClick={handleClick}>
              <button onClick={logout} className="text-2xl mb-4">
                Log Out
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
