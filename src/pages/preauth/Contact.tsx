import { useState } from "react";
import Hero from "@/components/ui/Hero";
import FormContainer from "@/components/forms/FormContainer";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      setStatusMessage("Please fill in all fields.");
      return;
    }
    console.log("Message sent:", formData);
    setStatusMessage("Your message has been sent!");
    setFormData({ name: "", email: "", message: "" });
    // API call to submit the message goes here
  };

  return (
    <>
      <Hero imgPath="/images/contact.png" title="Contact Us" />
      <FormContainer
        title="Get In Touch!"
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        fields={[
          { label: "Name", type: "text", name: "name" },
          { label: "Email", type: "email", name: "email" },
          { label: "Message", type: "text", name: "message", textarea: true },
        ]}
        buttonText="Submit"
        statusMessage={statusMessage}
      />
    </>
  );
}
