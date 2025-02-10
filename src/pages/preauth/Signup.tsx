import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Hero from "@/components/ui/Hero";
import FormContainer from "@/components/forms/FormContainer";

export default function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    introMessage: "",
  });

  const [error, setError] = useState("");
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setStatusMessage("Processing signup...");

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: formData.email,
        password: formData.password,
        username: formData.username,
        intro_msg: formData.introMessage,
      }),
    });

    if (!res.ok) {
      setError("Signup failed. Check your details.");
      return;
    }

    setStatusMessage("Signup successful! Redirecting...");
    setTimeout(() => navigate("/login"), 2000); // Redirect after success
  };

  return (
    <>
      <Hero imgPath="/images/signup.png" title="Sign Up" />
      <FormContainer
        title="Enter Your Details to Sign Up"
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        fields={[
          { label: "Email", type: "email", name: "email" },
          { label: "Username", type: "text", name: "username" },
          { label: "Password", type: "password", name: "password" },
          {
            label: "Repeat Your Password",
            type: "password",
            name: "confirmPassword",
          },
          {
            label: "Write a short message to introduce yourself!",
            type: "text",
            name: "introMessage",
            textarea: true,
          },
        ]}
        buttonText="Sign Up"
        statusMessage={statusMessage}
        errorMessage={error}
        footer={
          <>
            Already have an account?{" "}
            <Link to="/login" className="hover:text-yellow-400">
              Log in instead
            </Link>
          </>
        }
      />
    </>
  );
}
