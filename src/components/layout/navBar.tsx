import { useAuthStore } from "../../store/authStore";

export default function Navbar() {
  const { user, logout } = useAuthStore();

  return (
    <nav className="p-4 bg-gray-800 text-white flex justify-between">
      <h1 className="text-xl font-bold">Movie Club</h1>
      {user ? (
        <button onClick={logout} className="bg-red-500 px-4 py-2 rounded">
          Logout
        </button>
      ) : (
        <a href="/login" className="bg-blue-500 px-4 py-2 rounded">
          Login
        </a>
      )}
    </nav>
  );
}
