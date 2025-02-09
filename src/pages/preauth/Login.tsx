import { useState } from "react";
import { Link } from "react-router-dom";
import Hero from "@/components/ui/Hero";
import FormContainer from "@/components/forms/FormContainer";

export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Logging in with:", formData);
    setStatusMessage("Processing login...");
    // API call goes here
  };

  return (
    <>
      <Hero imgPath="/images/auth.png" title="Log In" />
      <FormContainer
        title="Enter Your Details to Log In"
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        fields={[
          { label: "Email", type: "email", name: "email" },
          { label: "Password", type: "password", name: "password" },
        ]}
        buttonText="Log In"
        statusMessage={statusMessage}
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
