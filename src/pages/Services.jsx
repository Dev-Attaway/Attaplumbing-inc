import ServicesPrimer from "../components/ServicesPrimer";
import { Link } from "react-router-dom";
import "../styles/Services.css";

// Define the Services component
export default function Services() {
  // Render the Services component
  return (
    /* Project component from the specified file path
       has data manually inserted into the properties below
       these properties then used within the project component
    */
    <div className="services mx-auto">
      <ServicesPrimer />
      <div className="p-4">
        <div className="d-flex flex-column">
          <div className="card w-50 h-25 m-2">
            <div className="card-body bg-light ">
              <Link
                className="service-style"
                to="/Installations"
                // This is a conditional (ternary) operator that checks to see if the current page is "Home"
                // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
              >
                Installations
              </Link>
            </div>
          </div>

          <div className="card w-50 h-25 m-2">
            <div className="card-body bg-light ">
              <Link
                className="service-style"
                to="/Repairs"
                // This is a conditional (ternary) operator that checks to see if the current page is "Home"
                // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
              >
                Repairs
              </Link>
            </div>
          </div>

          <div className="card w-50 h-25 m-2">
            <div className="card-body bg-light ">
              <Link
                className="service-style"
                to="/HomeRemodelingAdditions"
                // This is a conditional (ternary) operator that checks to see if the current page is "Home"
                // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
              >
                Home Remodeling & Additions
              </Link>
            </div>
          </div>

          <div className="card w-50 h-25 m-2">
            <div className="card-body bg-light ">
              <Link
                className="service-style"
                to="/ConventionalWaterHeaters"
                // This is a conditional (ternary) operator that checks to see if the current page is "Home"
                // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
              >
                Conventional Water Heaters
              </Link>
            </div>
          </div>

          <div className="card w-50 h-25 m-2">
            <div className="card-body bg-light ">
              <Link
                className="service-style"
                to="/TanklessWaterHeaters"
                // This is a conditional (ternary) operator that checks to see if the current page is "Home"
                // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
              >
                Tankless Water Heaters
              </Link>
            </div>
          </div>

          <div className="card w-50 h-25 m-2">
            <div className="card-body bg-light ">
              <Link
                className="service-style"
                to="/GasLines"
                // This is a conditional (ternary) operator that checks to see if the current page is "Home"
                // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
              >
                Gas Lines
              </Link>
            </div>
          </div>

          <div className="card w-50 h-25 m-2">
            <div className="card-body bg-light ">
              <Link
                className="service-style"
                to="/FirePlaceRetrofits"
                // This is a conditional (ternary) operator that checks to see if the current page is "Home"
                // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
              >
                Fire Place Retrofits
              </Link>
            </div>
          </div>

          <div className="card w-50 h-25 m-2">
            <div className="card-body bg-light ">
              <Link
                className="service-style"
                to="/ResidentialRepiping"
                // This is a conditional (ternary) operator that checks to see if the current page is "Home"
                // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
              >
                Residential Repiping
              </Link>
            </div>
          </div>

          <div className="card w-50 h-25 m-2">
            <div className="card-body bg-light ">
              <Link
                className="service-style"
                to="/WaterTreatment"
                // This is a conditional (ternary) operator that checks to see if the current page is "Home"
                // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
              >
                Water Treatment
              </Link>
            </div>
          </div>
          <div className="card w-50 h-25 m-2">
            <div className="card-body bg-light ">
              <Link
                className="service-style"
                to="/GarbageDisposalRepair"
                // This is a conditional (ternary) operator that checks to see if the current page is "Home"
                // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
              >
                Garbage Disposal Repair
              </Link>
            </div>
          </div>
          <div className="card w-50 h-25 m-2">
            <div className="card-body bg-light ">
              <Link
                className="service-style"
                to="/SewerRepair"
                // This is a conditional (ternary) operator that checks to see if the current page is "Home"
                // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
              >
                Sewer Repair
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
