import { useAuthStore } from "../../store/authStore";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const login = useAuthStore((state) => state.login);
  const navigate = useNavigate();

  const handleLogin = () => {
    login({ id: "123", username: "testuser" }); // Simulate login
    navigate("/home");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold">Login</h1>
      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white"
        onClick={handleLogin}
      >
        Login (Mock)
      </button>
    </div>
  );
}
