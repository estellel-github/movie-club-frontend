import { useState } from "react";
import { Link } from "react-router-dom";
import Hero from "@/components/ui/Hero";
import FormContainer from "@/components/forms/FormContainer";

export default function Signup() {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    introMessage: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Sign up request:", formData);
    // API call goes here
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
