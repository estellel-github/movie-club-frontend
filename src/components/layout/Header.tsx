import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="navbar flex items-center justify-between bg-neutral-950 text-neutral-200 px-6 border-b-2 border-b-stone-800">
      <Link to="/" className="flex items-center gap-3">
        <img src={"/images/bmc_logo.png"}></img>
        <div className="text-xl font-bold text-yellow-400">
          Berlin Movie Club
        </div>
      </Link>
      <div className="flex gap-4">
        <Link to="/events" className="hover:text-yellow-400">
          Events
        </Link>
        <Link to="/contact" className="hover:text-yellow-400">
          Contact
        </Link>
        <Link
          to="/signup"
          className="hover:text-yellow-400 neutral-200space-nowrap"
        >
          Sign Up
        </Link>
        <Link
          to="/login"
          className="hover:text-yellow-400 neutral-200space-nowrap"
        >
          Log In
        </Link>
      </div>
    </div>
  );
}
