// Import the useState hook from React
import { useState, React } from "react";
import emailjs from "@emailjs/browser";
import "../styles/Contact.css";
import ContactTab from "../components/ContactTab";

// Define the Contact component
export default function Contact() {
  // Define state variables for form inputs and validation flags
  const [form, setForm] = useState({
    firstName: "",
    email: "",
    message: "",
  });

  // Setting the State of checkEmail, CheckName ,CheckMessage, EmailSuccess, and isLoading to false
  // No message has been sent as of this moment
  const [CheckEmail, setCheckEmail] = useState(false);
  const [CheckName, setCheckName] = useState(false);
  const [CheckMessage, setCheckMessage] = useState(false);
  const [EmailSuccess, setEmailSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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
      setIsLoading(true); // Reset loading state

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
        .then(() => {
          setEmailSuccess(true);
          // Reset form and validation flags after successful submission
          setIsLoading(false);
          setForm({
            firstName: "",
            email: "",
            message: "",
          });
          setCheckEmail(false);
          setCheckName(false);
          setCheckMessage(false);
        })
        .catch((error) => {
          console.log("FAILED...", error);
        });
    } else {
      setEmailSuccess(false);
    }
  };

  return (
    <div className="container vh-100">
      <svg xmlns="http://www.w3.org/2000/svg" className="d-none">
        <symbol id="check-circle-fill" viewBox="0 0 16 16">
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
        </symbol>

        <symbol id="exclamation-triangle-fill" viewBox="0 0 16 16">
          <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
        </symbol>
      </svg>

      <div>
        <form>
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
            {CheckName && (
              <p className="text-danger">Invalid name submitted!</p>
            )}
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
            {CheckEmail && (
              <p className="text-danger">Invalid email submitted!</p>
            )}
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

          <button
            className="btn btn-custom m-3"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasTop"
            aria-controls="offcanvasTop"
            onClick={handleSubmit}
          >
            Submit
          </button>
          <div
            className="offcanvas offcanvas-top"
            tabIndex="-1"
            id="offcanvasTop"
            aria-labelledby="offcanvasTopLabel"
            style={{ height: "35vh" }}
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasTopLabel">
                <img
                  src="logo-NO-lisc.png"
                  alt="Attaplumbing company logo"
                  style={{ maxWidth: "25%", minWidth: "10rem" }}
                />
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>

            {EmailSuccess && (
              <div className="offcanvas-body">
                <div
                  className="alert alert-success d-inline-flex align-items-center flex-wrap"
                  role="alert"
                >
                  <svg
                    className="flex-shrink-0 d-flex me-2"
                    style={{ maxWidth: "2rem", height: "2rem" }}
                    aria-label="Success:"
                  >
                    <use xlinkHref="#check-circle-fill" />
                  </svg>
                  <div>Your message was sent, Thank you!</div>
                </div>
              </div>
            )}

            {EmailSuccess === false && !isLoading && (
              <div className="offcanvas-body">
                <div
                  className="alert alert-danger d-inline-flex align-items-center flex-wrap"
                  role="alert"
                >
                  <svg
                    className="flex-shrink-0 d-flex me-2"
                    style={{ maxWidth: "2rem", height: "2rem" }}
                    aria-label="Fail:"
                  >
                    <use xlinkHref="#exclamation-triangle-fill" />
                  </svg>
                  <div>
                    Failed to send your message. Please check the details and
                    try again!
                  </div>
                </div>
              </div>
            )}
          </div>
        </form>
        <ContactTab />
      </div>
    </div>
  );
}
