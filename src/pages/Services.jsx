import ServicesPrimer from "../components/ServicesPrimer";
import ServiceOption from "../components/ServiceOption";
import "../styles/Services.css";
import React, { useState } from "react";

export default function Services() {
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const handleButtonClick = (id) => {
    if (isButtonDisabled) return; // Prevent action if button is disabled
    const btn = document.getElementById(id); // Get the button element by its ID
    if (btn) {
      // Toggle the button text between 'Show' and 'Close'
      if (btn.innerHTML === "Show") {
        btn.innerHTML = "Close";
      } else if (btn.innerHTML === "Close") {
        btn.innerHTML = "Show";
      }
    }
    setIsButtonDisabled(true); // Disable button
    setTimeout(() => {
      setIsButtonDisabled(false); // Re-enable button after 300ms
    }, 1000);
  };

  return (
    <div className="container-fluid mx-auto">
      <ServicesPrimer />
      <div className="p-4">
        <div className="d-flex flex-column">
          <div className="card mb-2">
            <div className="card-body bg-light ">
              <h3> Installations </h3>
              <p>
                <button
                  onClick={() => handleButtonClick(1)}
                  className="btn btn-custom fw-medium"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#contentId0"
                  aria-expanded="false"
                  aria-controls="contentId0"
                  id="1"
                >
                  Show
                </button>
              </p>
              <div className="collapse" id="contentId0">
                <ServiceOption
                  title="Installations"
                  service_primer="If you are experiencing leaks, running out of hot water, or need a new kitchen faucet installed, AttaPlumbing provides expert and reliable solutions. When selecting a team to protect your home and manage essential plumbing repairs, trust our skilled, licensed, and certified plumbing specialists. Chronic leaks and plumbing issues often stem from the system's age and the water pressure entering your home. High water pressure can weaken seals and cause extensive problems throughout the system. Additionally, when older faucets, showerheads, and appliance connections become corroded and start leaking, it is imperative to replace them promptly to prevent further damage to your home. For professional and trustworthy plumbing services, choose AttaPlumbing to ensure your home's plumbing system remains in optimal condition."
                />
              </div>
            </div>
          </div>

          <div className="card mb-2">
            <div className="card-body bg-light ">
              <h3> Repairs </h3>
              <p>
                <button
                  onClick={() => handleButtonClick(2)}
                  className="btn btn-custom fw-medium"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#contentId1"
                  aria-expanded="false"
                  aria-controls="contentId1"
                  id="2"
                >
                  Show
                </button>
              </p>
              <div className="collapse" id="contentId1">
                <ServiceOption
                  title="Repairs"
                  service_primer="If you are experiencing leaks, running out of hot water, or need a new kitchen faucet installed, AttaPlumbing provides expert and reliable solutions. When selecting a team to protect your home and manage essential plumbing repairs, trust our skilled, licensed, and certified plumbing specialists. Chronic leaks and plumbing issues often stem from the system's age and the water pressure entering your home. High water pressure can weaken seals and cause extensive problems throughout the system. Additionally, when older faucets, showerheads, and appliance connections become corroded and start leaking, it is imperative to replace them promptly to prevent further damage to your home. For professional and trustworthy plumbing services, choose AttaPlumbing to ensure your home's plumbing system remains in optimal condition."
                />
              </div>
            </div>
          </div>

          <div className="card mb-2">
            <div className="card-body bg-light ">
              <h3> Home Remodeling & Additions </h3>
              <p>
                <button
                  onClick={() => handleButtonClick(3)}
                  className="btn btn-custom fw-medium"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#contentId2"
                  aria-expanded="false"
                  aria-controls="contentId2"
                  id="3"
                >
                  Show
                </button>
              </p>
              <div className="collapse" id="contentId2">
                <ServiceOption
                  title="Home Remodeling & Additions"
                  service_primer="If you are experiencing leaks, running out of hot water, or need a new kitchen faucet installed, AttaPlumbing provides expert and reliable solutions. When selecting a team to protect your home and manage essential plumbing repairs, trust our skilled, licensed, and certified plumbing specialists. Chronic leaks and plumbing issues often stem from the system's age and the water pressure entering your home. High water pressure can weaken seals and cause extensive problems throughout the system. Additionally, when older faucets, showerheads, and appliance connections become corroded and start leaking, it is imperative to replace them promptly to prevent further damage to your home. For professional and trustworthy plumbing services, choose AttaPlumbing to ensure your home's plumbing system remains in optimal condition."
                />
              </div>
            </div>
          </div>

          <div className="card mb-2">
            <div className="card-body bg-light ">
              <h3> Conventional Water Heaters </h3>
              <p>
                <button
                  onClick={() => handleButtonClick(4)}
                  className="btn btn-custom fw-medium"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#contentId3"
                  aria-expanded="false"
                  aria-controls="contentId3"
                  id="4"
                >
                  Show
                </button>
              </p>
              <div className="collapse" id="contentId3">
                <ServiceOption
                  title="Conventional Water Heaters"
                  service_primer="If you are experiencing leaks, running out of hot water, or need a new kitchen faucet installed, AttaPlumbing provides expert and reliable solutions. When selecting a team to protect your home and manage essential plumbing repairs, trust our skilled, licensed, and certified plumbing specialists. Chronic leaks and plumbing issues often stem from the system's age and the water pressure entering your home. High water pressure can weaken seals and cause extensive problems throughout the system. Additionally, when older faucets, showerheads, and appliance connections become corroded and start leaking, it is imperative to replace them promptly to prevent further damage to your home. For professional and trustworthy plumbing services, choose AttaPlumbing to ensure your home's plumbing system remains in optimal condition."
                />
              </div>
            </div>
          </div>

          <div className="card mb-2">
            <div className="card-body bg-light ">
              <h3> Tankless Water Heaters </h3>
              <p>
                <button
                  onClick={() => handleButtonClick(5)}
                  className="btn btn-custom fw-medium"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#contentId4"
                  aria-expanded="false"
                  aria-controls="contentId4"
                  id="5"
                >
                  Show
                </button>
              </p>
              <div className="collapse" id="contentId4">
                <ServiceOption
                  title="Tankless Water Heaters"
                  service_primer="If you are experiencing leaks, running out of hot water, or need a new kitchen faucet installed, AttaPlumbing provides expert and reliable solutions. When selecting a team to protect your home and manage essential plumbing repairs, trust our skilled, licensed, and certified plumbing specialists. Chronic leaks and plumbing issues often stem from the system's age and the water pressure entering your home. High water pressure can weaken seals and cause extensive problems throughout the system. Additionally, when older faucets, showerheads, and appliance connections become corroded and start leaking, it is imperative to replace them promptly to prevent further damage to your home. For professional and trustworthy plumbing services, choose AttaPlumbing to ensure your home's plumbing system remains in optimal condition."
                />
              </div>
            </div>
          </div>

          <div className="card mb-2">
            <div className="card-body bg-light ">
              <h3> Fire Place Retrofits </h3>
              <p>
                <button
                  onClick={() => handleButtonClick(6)}
                  className="btn btn-custom fw-medium"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#contentId5"
                  aria-expanded="false"
                  aria-controls="contentId5"
                  id="6"
                >
                  Show
                </button>
              </p>
              <div className="collapse" id="contentId5">
                <ServiceOption
                  title="Fire Place Retrofits"
                  service_primer="If you are experiencing leaks, running out of hot water, or need a new kitchen faucet installed, AttaPlumbing provides expert and reliable solutions. When selecting a team to protect your home and manage essential plumbing repairs, trust our skilled, licensed, and certified plumbing specialists. Chronic leaks and plumbing issues often stem from the system's age and the water pressure entering your home. High water pressure can weaken seals and cause extensive problems throughout the system. Additionally, when older faucets, showerheads, and appliance connections become corroded and start leaking, it is imperative to replace them promptly to prevent further damage to your home. For professional and trustworthy plumbing services, choose AttaPlumbing to ensure your home's plumbing system remains in optimal condition."
                />
              </div>
            </div>
          </div>

          <div className="card mb-2">
            <div className="card-body bg-light ">
              <h3> Natural Gas Retrofits </h3>
              <p>
                <button
                  onClick={() => handleButtonClick(7)}
                  className="btn btn-custom fw-medium"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#contentId6"
                  aria-expanded="false"
                  aria-controls="contentId6"
                  id="7"
                >
                  Show
                </button>
              </p>
              <div className="collapse" id="contentId6">
                <ServiceOption
                  title="Natural Gas Retrofits"
                  service_primer="If you are experiencing leaks, running out of hot water, or need a new kitchen faucet installed, AttaPlumbing provides expert and reliable solutions. When selecting a team to protect your home and manage essential plumbing repairs, trust our skilled, licensed, and certified plumbing specialists. Chronic leaks and plumbing issues often stem from the system's age and the water pressure entering your home. High water pressure can weaken seals and cause extensive problems throughout the system. Additionally, when older faucets, showerheads, and appliance connections become corroded and start leaking, it is imperative to replace them promptly to prevent further damage to your home. For professional and trustworthy plumbing services, choose AttaPlumbing to ensure your home's plumbing system remains in optimal condition."
                />
              </div>
            </div>
          </div>

          <div className="card mb-2">
            <div className="card-body bg-light ">
              <h3> Commercial & Residential Emergency Services </h3>
              <p>
                <button
                  onClick={() => handleButtonClick(8)}
                  className="btn btn-custom fw-medium"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#contentId7"
                  aria-expanded="false"
                  aria-controls="contentId7"
                  id="8"
                >
                  Show
                </button>
              </p>
              <div className="collapse" id="contentId7">
                <ServiceOption
                  title="Commercial & Residential Emergency Services"
                  service_primer="If you are experiencing leaks, running out of hot water, or need a new kitchen faucet installed, AttaPlumbing provides expert and reliable solutions. When selecting a team to protect your home and manage essential plumbing repairs, trust our skilled, licensed, and certified plumbing specialists. Chronic leaks and plumbing issues often stem from the system's age and the water pressure entering your home. High water pressure can weaken seals and cause extensive problems throughout the system. Additionally, when older faucets, showerheads, and appliance connections become corroded and start leaking, it is imperative to replace them promptly to prevent further damage to your home. For professional and trustworthy plumbing services, choose AttaPlumbing to ensure your home's plumbing system remains in optimal condition."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
