import React from "react";
import "../styles/AboutCard.css"

export default function AboutCard({ imageSrc, title, text }) {
  return (
    <div className="d-flex justify-content-center h-100">
      <div
        className="card shadow-lg bg-body rounded border border-black text-bg-dark"
        style={{ maxWidth: "40rem", minWidth: "250px" }}
      >
        <img
          src={imageSrc}
          className="card-img opacity-75"
          alt={title}
          style={{ height: "100%", objectFit: "cover", minHeight: "15rem" }}
        />
        <div className="card-img-overlay p-3 d-flex flex-column align-items-start justify-content-between">
          <h2 className="card-title text-bg-dark bg-opacity-50 p-3 mb-2 rounded-end w-100">
            {title}
          </h2>
          <div className="bg-opacity-50 rounded-end align-self-end">
            <p className="card-text p-2 fw-semibold text-bg-dark fs-6 fs-md-5 fs-lg-2 ">
              {text}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
