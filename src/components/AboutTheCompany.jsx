import React from "react";
import { Link } from "react-router-dom";
import "../styles/About.css";

function AboutTheCompany() {
  return (
    <div className="container m-2">
      <div className="row m-4">
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

      <div className="card m-3 p-3 mx-auto">
        <div className="card-body">
          <h5 className="card-title d-flex">
            Contact
            <img
              src="logo-NO-lisc.png"
              alt="Attaplumbing Company logo"
              className="ps-2"
              style={{ maxWidth: "20%", minWidth: "10rem" }}
            />
          </h5>
          <img
            src="company-phone.png"
            alt="Company phone"
            className="ps-2"
            style={{ maxWidth: "20%", minWidth: "10rem" }}
          />
          <p className="p-2 pt-4">
            Or through our&nbsp;
            <Link
              style={{ textDecoration: "none" }}
              to="/Contact"
            >
              Contact Page
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutTheCompany;