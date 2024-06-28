import React from "react";
import { Link } from "react-router-dom";
import { useMatch } from "react-router-dom";
import "../styles/ContactTab.css";

function ContactTab() {
  const match = useMatch("/Contact");
  const isContactPage = match !== null;

  return (
    <div className="card m-3 p-3 mx-auto d-inline-flex">
      <div className="card-body flex-card">
        <h2 className="card-title contact-h2">Contact</h2>
        <img
          src="logo-NO-lisc.png"
          alt="Attaplumbing Company logo"
          className="contact-img mt-1"
          style={{ maxWidth: "20%", minWidth: "10rem" }}
        />
        <img
          src="company-phone.png"
          alt="Company phone"
          className="contact-img mb-1"
          style={{ maxWidth: "20%", minWidth: "10rem" }}
        />
        <div>
          {!isContactPage ? (
            <h2 className="contact-h2">
              Or through our&nbsp;
              <Link style={{ textDecoration: "none" }} to="/Contact">
                Contact Page
              </Link>
            </h2>
          ) : null}
        </div>
      </div>
    </div>
  );
}
export default ContactTab;
