import { Link } from "react-router-dom";

export default function Header() {
  const handleClick = () => {
    const elem = document.activeElement as HTMLElement | null;
    if (elem) {
      elem.blur(); // Removes focus from dropdown, closing it automatically
    }
  };

  return (
    <div className="navbar bg-neutral-950 text-neutral-200 px-6 border-b-2 border-b-stone-800 justify-between">
      {/* Left (Logo & Brand) */}
      <div className="navbar-start">
        <Link to="/" className="flex items-center gap-3">
          <img src={"/images/bmc_logo.png"} className="h-8 w-auto" alt="Logo" />
          <span className="text-sm lg:text-2xl font-bold text-yellow-400">
            Berlin Movie Club
          </span>
        </Link>
      </div>

      {/* Center (Navigation for larger screens) */}
      <div className="navbar-center hidden lg:flex"></div>

      {/* Right (Auth Links) */}
      <div className="navbar-end hidden lg:flex gap-4">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/events-public" className="hover:text-yellow-400 text-xl">
              Events
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-yellow-400 text-xl">
              Contact
            </Link>
          </li>
        </ul>
        <Link to="/signup" className="btn btn-sm btn-outline text-white">
          Sign Up
        </Link>
        <Link to="/login" className="btn btn-sm btn-warning">
          Log In
        </Link>
      </div>

      {/* Mobile Dropdown */}
      <div className="navbar-end lg:hidden w-64">
        <div className="dropdown w-64">
          <div tabIndex={0} role="button" className="flex  justify-end">
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
            className="menu menu-sm dropdown-content w-full bg-neutral-950 text-neutral-200 rounded-box z-[1] mt-3 p-2 shadow -top-6"
          >
            <li onClick={handleClick}>
              <Link to="/events-public" className="text-2xl mb-4">
                Events
              </Link>
            </li>
            <li onClick={handleClick}>
              <Link to="/contact" className="text-2xl mb-4">
                Contact
              </Link>
            </li>
            <li onClick={handleClick}>
              <Link to="/signup" className="text-2xl mb-4">
                Sign Up
              </Link>
            </li>
            <li onClick={handleClick}>
              <Link to="/login" className="text-2xl mb-4">
                Log In
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
