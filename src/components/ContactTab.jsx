import React from "react";
import { Link } from "react-router-dom";
import { useMatch } from "react-router-dom";
import { IKImage, IKContext } from "imagekitio-react";

import "../styles/ContactTab.css";

function ContactTab() {
  const match = useMatch("/Contact");
  const isContactPage = match !== null;

  return (
    <div className="card m-3 p-3 mx-auto d-inline-flex"
      style={ {minWidth: "250px"}}>
      <div className="card-body flex-card">
        <h2 className="card-title contact-h2">Contact</h2>
        <IKContext urlEndpoint={import.meta.env.VITE_IMAGEKIT}>
          <IKImage
            src="https://ik.imagekit.io/pbq9icsqc/logo-NO-lisc.webp?updatedAt=1720653473902?tr=w-200,h-50"
            alt="Attaplumbing Company logo"
            className="contact-img mt-1"
            loading="lazy"
            width="200"
            height="50"
          />
        </IKContext>

        <IKContext urlEndpoint={import.meta.env.VITE_IMAGEKIT}>
          <IKImage
            src="https://ik.imagekit.io/pbq9icsqc/company-phone.webp?updatedAt=1720653473588?tr=w-200,h-50"
            alt="Company phone"
            className="contact-img mb-1"
            loading="lazy"
            width="200"
            height="50"
          />
        </IKContext>
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
