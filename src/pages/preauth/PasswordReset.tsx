import { useState } from "react";
import { Link } from "react-router-dom";
import Hero from "@/components/ui/Hero";
import FormContainer from "@/components/forms/FormContainer";

export default function PasswordReset() {
  const [formData, setFormData] = useState({ email: "" });
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email.trim()) {
      setStatusMessage("Please enter your email.");
      return;
    }
    console.log("Password reset request for:", formData);
    setStatusMessage(
      "If this email is registered, you will receive a password reset link.",
    );
    // API call to trigger password reset goes here
  };

  return (
    <>
      <Hero imgPath="/images/auth.png" title="Need a Reset?" />
      <FormContainer
        title="Request a Password Reset"
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        fields={[{ label: "Email", type: "email", name: "email" }]}
        buttonText="Request Reset"
        statusMessage={statusMessage}
        footer={
          <>
            Remembered your password?{" "}
            <Link to="/login" className="hover:text-yellow-400">
              Log in instead
            </Link>
          </>
        }
      />
    </>
  );
}
