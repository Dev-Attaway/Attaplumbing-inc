import ServicesPrimer from "../components/ServicesPrimer";
import ServiceOption from "../components/ServiceOption";
import "../styles/Services.css";
import React, { useState } from "react";

export default function Services() {
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [buttonText, setButtonText] = useState("Show");

  const handleButtonClick = (id) => {
    if (isButtonDisabled) return; // Prevent action if button is disabled

    setIsButtonDisabled(true); // Disable button

    // Toggle button text immediately
    setButtonText((prevText) => (prevText === "Show" ? "Close" : "Show"));

    setTimeout(() => {
      setIsButtonDisabled(false); // Re-enable button after 300ms
    }, 300);
  };
  return (
    <div className="container-fluid mx-auto p-4">
      <ServicesPrimer />
      <div className="p-4">
        <div className="d-flex flex-column">
          <div className="card mb-2">
            <div className="card-body bg-light ">
              <h3 className="services-font"> Installations </h3>
              <p>
                <button
                  onClick={() => handleButtonClick("btn-1")}
                  className="btn btn-custom fw-medium"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#contentId0"
                  aria-expanded="false"
                  aria-controls="contentId0"
                  id="btn-1"
                >
                  {buttonText}
                </button>
              </p>
              <div className="collapse" id="contentId0">
                <ServiceOption service_primer="If you are experiencing leaks, running out of hot water, or need a new kitchen faucet installed, AttaPlumbing provides expert and reliable solutions. When selecting a team to protect your home and manage essential plumbing repairs, trust our skilled, licensed, and certified plumbing specialists. Chronic leaks and plumbing issues often stem from the system's age and the water pressure entering your home. High water pressure can weaken seals and cause extensive problems throughout the system. Additionally, when older faucets, showerheads, and appliance connections become corroded and start leaking, it is imperative to replace them promptly to prevent further damage to your home. For professional and trustworthy plumbing services, choose AttaPlumbing to ensure your home's plumbing system remains in optimal condition." />
              </div>
            </div>
          </div>

          <div className="card mb-2">
            <div className="card-body bg-light ">
              <h3 className="services-font"> Repairs </h3>
              <p>
                <button
                  onClick={() => handleButtonClick("btn-2")}
                  className="btn btn-custom fw-medium"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#contentId1"
                  aria-expanded="false"
                  aria-controls="contentId1"
                  id="btn-2"
                >
                  {buttonText}
                </button>
              </p>
              <div className="collapse" id="contentId1">
                <ServiceOption service_primer="If you are experiencing leaks, running out of hot water, or need a new kitchen faucet installed, AttaPlumbing provides expert and reliable solutions. When selecting a team to protect your home and manage essential plumbing repairs, trust our skilled, licensed, and certified plumbing specialists. Chronic leaks and plumbing issues often stem from the system's age and the water pressure entering your home. High water pressure can weaken seals and cause extensive problems throughout the system. Additionally, when older faucets, showerheads, and appliance connections become corroded and start leaking, it is imperative to replace them promptly to prevent further damage to your home. For professional and trustworthy plumbing services, choose AttaPlumbing to ensure your home's plumbing system remains in optimal condition." />
              </div>
            </div>
          </div>

          <div className="card mb-2">
            <div className="card-body bg-light ">
              <h3 className="services-font"> Home Remodeling & Additions </h3>
              <p>
                <button
                  onClick={() => handleButtonClick("btn-3")}
                  className="btn btn-custom fw-medium"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#contentId2"
                  aria-expanded="false"
                  aria-controls="contentId2"
                  id="btn-3"
                >
                  {buttonText}
                </button>
              </p>
              <div className="collapse" id="contentId2">
                <ServiceOption service_primer="If you are experiencing leaks, running out of hot water, or need a new kitchen faucet installed, AttaPlumbing provides expert and reliable solutions. When selecting a team to protect your home and manage essential plumbing repairs, trust our skilled, licensed, and certified plumbing specialists. Chronic leaks and plumbing issues often stem from the system's age and the water pressure entering your home. High water pressure can weaken seals and cause extensive problems throughout the system. Additionally, when older faucets, showerheads, and appliance connections become corroded and start leaking, it is imperative to replace them promptly to prevent further damage to your home. For professional and trustworthy plumbing services, choose AttaPlumbing to ensure your home's plumbing system remains in optimal condition." />
              </div>
            </div>
          </div>

          <div className="card mb-2">
            <div className="card-body bg-light ">
              <h3 className="services-font"> Conventional Water Heaters </h3>
              <p>
                <button
                  onClick={() => handleButtonClick("btn-4")}
                  className="btn btn-custom fw-medium"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#contentId3"
                  aria-expanded="false"
                  aria-controls="contentId3"
                  id="btn-4"
                >
                  {buttonText}
                </button>
              </p>
              <div className="collapse" id="contentId3">
                <ServiceOption service_primer="If you are experiencing leaks, running out of hot water, or need a new kitchen faucet installed, AttaPlumbing provides expert and reliable solutions. When selecting a team to protect your home and manage essential plumbing repairs, trust our skilled, licensed, and certified plumbing specialists. Chronic leaks and plumbing issues often stem from the system's age and the water pressure entering your home. High water pressure can weaken seals and cause extensive problems throughout the system. Additionally, when older faucets, showerheads, and appliance connections become corroded and start leaking, it is imperative to replace them promptly to prevent further damage to your home. For professional and trustworthy plumbing services, choose AttaPlumbing to ensure your home's plumbing system remains in optimal condition." />
              </div>
            </div>
          </div>

          <div className="card mb-2">
            <div className="card-body bg-light ">
              <h3 className="services-font"> Tankless Water Heaters </h3>
              <p>
                <button
                  onClick={() => handleButtonClick("btn-5")}
                  className="btn btn-custom fw-medium"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#contentId4"
                  aria-expanded="false"
                  aria-controls="contentId4"
                  id="btn-5"
                >
                  {buttonText}
                </button>
              </p>
              <div className="collapse" id="contentId4">
                <ServiceOption service_primer="If you are experiencing leaks, running out of hot water, or need a new kitchen faucet installed, AttaPlumbing provides expert and reliable solutions. When selecting a team to protect your home and manage essential plumbing repairs, trust our skilled, licensed, and certified plumbing specialists. Chronic leaks and plumbing issues often stem from the system's age and the water pressure entering your home. High water pressure can weaken seals and cause extensive problems throughout the system. Additionally, when older faucets, showerheads, and appliance connections become corroded and start leaking, it is imperative to replace them promptly to prevent further damage to your home. For professional and trustworthy plumbing services, choose AttaPlumbing to ensure your home's plumbing system remains in optimal condition." />
              </div>
            </div>
          </div>

          <div className="card mb-2">
            <div className="card-body bg-light ">
              <h3 className="services-font"> Fire Place Retrofits </h3>
              <p>
                <button
                  onClick={() => handleButtonClick("btn-6")}
                  className="btn btn-custom fw-medium"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#contentId5"
                  aria-expanded="false"
                  aria-controls="contentId5"
                  id="btn-6"
                >
                  {buttonText}
                </button>
              </p>
              <div className="collapse" id="contentId5">
                <ServiceOption service_primer="If you are experiencing leaks, running out of hot water, or need a new kitchen faucet installed, AttaPlumbing provides expert and reliable solutions. When selecting a team to protect your home and manage essential plumbing repairs, trust our skilled, licensed, and certified plumbing specialists. Chronic leaks and plumbing issues often stem from the system's age and the water pressure entering your home. High water pressure can weaken seals and cause extensive problems throughout the system. Additionally, when older faucets, showerheads, and appliance connections become corroded and start leaking, it is imperative to replace them promptly to prevent further damage to your home. For professional and trustworthy plumbing services, choose AttaPlumbing to ensure your home's plumbing system remains in optimal condition." />
              </div>
            </div>
          </div>

          <div className="card mb-2">
            <div className="card-body bg-light ">
              <h3 className="services-font"> Natural Gas Retrofits </h3>
              <p>
                <button
                  onClick={() => handleButtonClick("btn-7")}
                  className="btn btn-custom fw-medium"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#contentId6"
                  aria-expanded="false"
                  aria-controls="contentId6"
                  id="btn-7"
                >
                  {buttonText}
                </button>
              </p>
              <div className="collapse" id="contentId6">
                <ServiceOption service_primer="If you are experiencing leaks, running out of hot water, or need a new kitchen faucet installed, AttaPlumbing provides expert and reliable solutions. When selecting a team to protect your home and manage essential plumbing repairs, trust our skilled, licensed, and certified plumbing specialists. Chronic leaks and plumbing issues often stem from the system's age and the water pressure entering your home. High water pressure can weaken seals and cause extensive problems throughout the system. Additionally, when older faucets, showerheads, and appliance connections become corroded and start leaking, it is imperative to replace them promptly to prevent further damage to your home. For professional and trustworthy plumbing services, choose AttaPlumbing to ensure your home's plumbing system remains in optimal condition." />
              </div>
            </div>
          </div>

          <div className="card mb-2">
            <div className="card-body bg-light ">
              <h3 className="services-font">
                {" "}
                Commercial & Residential Emergency Services{" "}
              </h3>
              <p>
                <button
                  onClick={() => handleButtonClick("btn-8")}
                  className="btn btn-custom fw-medium"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#contentId7"
                  aria-expanded="false"
                  aria-controls="contentId7"
                  id="btn-8"
                >
                  {buttonText}
                </button>
              </p>
              <div className="collapse" id="contentId7">
                <ServiceOption service_primer="If you are experiencing leaks, running out of hot water, or need a new kitchen faucet installed, AttaPlumbing provides expert and reliable solutions. When selecting a team to protect your home and manage essential plumbing repairs, trust our skilled, licensed, and certified plumbing specialists. Chronic leaks and plumbing issues often stem from the system's age and the water pressure entering your home. High water pressure can weaken seals and cause extensive problems throughout the system. Additionally, when older faucets, showerheads, and appliance connections become corroded and start leaking, it is imperative to replace them promptly to prevent further damage to your home. For professional and trustworthy plumbing services, choose AttaPlumbing to ensure your home's plumbing system remains in optimal condition." />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
