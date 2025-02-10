import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="navbar flex items-center justify-between bg-neutral-950 text-neutral-200 px-6 border-t-1 border-t-stone-800 mt-12">
      <div className="flex gap-4">
        <Link to="/contact" className="hover:text-yellow-400">
          Contact
        </Link>
        <Link
          to="https://estellel.netlify.app/"
          className="hover:text-yellow-400"
          target="_blank"
          rel="noopener noreferrer"
        >
          Dev Porfolio
        </Link>
      </div>
      <div>© 2025 Estelle L.</div>
    </footer>
  );
}
