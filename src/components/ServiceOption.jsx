import { Link } from "react-router-dom";

import "../styles/Services.css";

// Define the Project component
function ServiceOption({ title, service_primer, projectLink, githubLink }) {
  // Add touch event listeners to handle hover effects on touch devices
  // useEffect(() => {
  //   // Select the project element
  //   const element = document.querySelector(".option");

  //   // Function to handle touchstart event
  //   const handleTouchStart = () => {
  //     element.classList.add("hovered"); // Add 'hovered' class on touchstart
  //   };

  //   // Function to handle touchend event
  //   const handleTouchEnd = () => {
  //     element.classList.remove("hovered"); // Remove 'hovered' class on touchend
  //   };

  //   // Add touchstart event listener
  //   element.addEventListener("touchstart", handleTouchStart);

  //   // Add touchend event listener
  //   element.addEventListener("touchend", handleTouchEnd);

  //   // Cleanup function to remove event listeners on component unmount
  //   return () => {
  //     element.removeEventListener("touchstart", handleTouchStart);
  //     element.removeEventListener("touchend", handleTouchEnd);
  //   };
  // }, []); // Run this effect only once after the component mounts

  // Render the Project component
  return (
    <div className="option services-child-page">
      <div className="card">
        <div className="row g-0 justify-content-center">
          <div className="col-md-4">
            <img
              src="default.webp"
              className="img-fluid rounded mx-auto d-block"
              alt="..."
            />
          </div>

          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text d-flex">{service_primer}</p>

              <Link
                to="/Contact"
                style={{
                  display: "inline-block",
                }}
              >
                <button type="button" className="btn btn-custom fw-medium">
                  Contact us for a Quote
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceOption;
