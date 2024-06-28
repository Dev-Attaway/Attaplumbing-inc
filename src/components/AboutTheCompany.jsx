import React from "react";
import Yelp from "../components/Yelp";
import "../styles/About.css";
import ContactTab from "./ContactTab";

function AboutTheCompany() {
  return (
    <div className="container">
      <div className="row me-4">
        <div className="col-lg-8 col-md-10 col-sm-12">
          <div
            className="card position-relative shadow-lg bg-body rounded border border-black text-bg-dark"
            style={{ minWidth: "20rem", maxWidth: "40rem", height: "25rem" }}
          >
            <img
              src="vecteezy_ai-generated-beautiful-photography-for-plumbing-services_38813454.png"
              className="card-img opacity-75"
              alt="..."
              style={{
                height: "100%",
                objectFit: "cover",
                margin: "0",
                padding: "0",
                border: "none",
              }}
            />
            <div className="card-img-overlay p-0 py-3 d-flex flex-column justify-content-end">
              <h5 className="card-title text-bg-dark border-black bg-opacity-50 p-3 mb-2 rounded-end">
                Card title
              </h5>
              <p className="card-text fw-semibold  me-4 text-bg-dark border-black bg-opacity-50 p-3 rounded-end">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row justify-content-end m-4">
        <div className="col-lg-8 col-md-10 col-sm-12">
          <div
            className="card shadow-lg bg-body rounded border border-black text-bg-dark"
            style={{ minWidth: "20rem", maxWidth: "40rem", height: "25rem" }}
          >
            <img
              src="pexels-wdnet-14953886.png"
              className="card-img opacity-75"
              alt="..."
              style={{
                height: "100%",
                objectFit: "cover",
                margin: "0",
                padding: "0",
                border: "none",
              }}
            />
            <div className="card-img-overlay p-0 py-3 d-flex flex-column justify-content-end">
              <h5 className="card-title text-bg-dark border-black bg-opacity-50 p-3 mb-2 rounded-end">
                Card title
              </h5>
              <p className="card-text fw-semibold  me-4 text-bg-dark border-black bg-opacity-50 p-3 rounded-end">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row justify-content-start m-4">
        <div className="col-lg-8 col-md-10 col-sm-12">
          <div
            className="card shadow-lg bg-body rounded border border-black text-bg-dark"
            style={{ minWidth: "20rem", maxWidth: "40rem", height: "25rem" }}
          >
            <img
              src="pexels-thirdman-8470830.png"
              className="card-img opacity-75"
              alt="..."
              style={{
                height: "100%",
                objectFit: "cover",
                margin: "0",
                padding: "0",
                border: "none",
              }}
            />
            <div className="card-img-overlay p-0 py-3 d-flex flex-column justify-content-end">
              <h5 className="card-title text-bg-dark border-black bg-opacity-50 p-3 mb-2 rounded-end">
                Card title
              </h5>
              <p className="card-text fw-semibold  me-4 text-bg-dark border-black bg-opacity-50 p-3 rounded-end">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-end m-4">
        <div className="col-lg-8 col-md-10 col-sm-12">
          <Yelp />
        </div>
      </div>
      <ContactTab />
    </div>
  );
}

export default AboutTheCompany;
