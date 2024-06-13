// Import the useState hook from React
import { useState, React } from "react";
import emailjs from "@emailjs/browser";

// Define the Contact component
export default function Contact() {
  // Define state variables for form inputs and validation flags
  const [form, setForm] = useState({
    firstName: "",
    email: "",
    message: "",
  });

  // Setting the State of checkEmail, CheckName ,and CheckMessage to false
  const [checkEmail, setCheckEmail] = useState(false);
  const [CheckName, setCheckName] = useState(false);
  const [CheckMessage, setCheckMessage] = useState(false);

  // Handle input changes in the form fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = () => {
    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(form.email);

    // Validate form inputs and set validation flags accordingly
    if (!isValid) {
      setCheckEmail(true);
    } else {
      setCheckEmail(false);
    }
    // validate if first name is present
    if (!form.firstName) {
      setCheckName(true);
    } else {
      setCheckName(false);
    }

    // validate if there is a message present
    if (!form.message) {
      setCheckMessage(true);
    } else {
      setCheckMessage(false);
    }

    if (isValid && form.firstName && form.message) {
      const service = import.meta.env.VITE_SERVICE;
      const template = import.meta.env.VITE_TEMPLATE;
      const public_key = import.meta.env.VITE_PUBLIC;

      const templateParams = {
        from_name: form.firstName,
        from_email: form.email,
        to_name: "Attaplumbing",
        message: form.message,
      };

      emailjs
        .send(service, template, templateParams, public_key)
        .then((response) => {
          console.log("SUCCESS!", response);
        })
        .catch((error) => {
          console.log("FAILED...", error);
        });
    }
  };

  return (
    <form className="container vh-100 pt-3">
      <div className="form-group">
        <label htmlFor="firstName">First name:</label>
        <input
          type="text"
          id="firstName"
          value={form.firstName}
          onChange={handleInputChange}
          name="firstName"
          className="form-control m-2"
        />
        {CheckName && <p className="text-danger">Invalid name submitted!</p>}
      </div>

      <div className="form-group">
        <label htmlFor="email">Your Email:</label>
        <input
          type="email"
          id="email"
          value={form.email}
          onChange={handleInputChange}
          name="email"
          className="form-control m-2"
        />
        {checkEmail && <p className="text-danger">Invalid email submitted!</p>}
      </div>

      <div className="form-group">
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          value={form.message}
          onChange={handleInputChange}
          name="message"
          className="form-control m-2"
          rows={7}
        ></textarea>
        {CheckMessage && (
          <p className="text-danger">Invalid message submitted!</p>
        )}
      </div>

      <button className="btn m-3" type="button" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
}
