import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Hero from "@/components/ui/Hero";
import FormContainer from "@/components/forms/FormContainer";

export default function SetNewPassword() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setStatusMessage("Passwords do not match!");
      return;
    }

    console.log("Password reset request:", formData);
    setStatusMessage("Your password has been successfully updated.");
    setTimeout(() => navigate("/login"), 2000); // Redirect after success
    // API call for resetting the password will go here
  };

  return (
    <>
      <Hero imgPath="/images/auth.png" title="Need a New Password?" />
      <FormContainer
        title="Set a New Password"
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        fields={[
          { label: "Email", type: "email", name: "email" },
          { label: "New Password", type: "password", name: "password" },
          {
            label: "Confirm Password",
            type: "password",
            name: "confirmPassword",
          },
        ]}
        buttonText="Set New Password"
        statusMessage={statusMessage}
      />
    </>
  );
}
