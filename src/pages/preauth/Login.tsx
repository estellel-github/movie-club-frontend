import { useState } from "react";
import { useAuthStore } from "../../store/authStore";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Hero from "@/components/ui/Hero";
import FormContainer from "@/components/forms/FormContainer";

export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [statusMessage, setStatusMessage] = useState("");

  const login = useAuthStore((state) => state.login);
  const navigate = useNavigate();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      setStatusMessage("Processing login...");
      await login(formData.email, formData.password);
      navigate("/home");
    } catch (err) {
      setError("Could not log in"); // Replace with API error
      setStatusMessage("");
    }
  };

  return (
    <>
      <Hero imgPath="/images/auth.png" title="Log In" />
      <FormContainer
        title="Enter Your Details to Log In"
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleLogin}
        fields={[
          { label: "Email", type: "email", name: "email" },
          { label: "Password", type: "password", name: "password" },
        ]}
        buttonText="Log In"
        statusMessage={statusMessage}
        errorMessage={error}
        footer={
          <>
            Forgot your password?{" "}
            <Link to="/reset-password" className="hover:text-yellow-400">
              Request a reset
            </Link>
          </>
        }
      />
    </>
  );
}
