import { Link } from "react-router-dom";
export default function ResidentialRepiping() {
  return (
    <div className="d-flex justify-content-center align-items-center flex-wrap">
      <div className="container flex my-2">
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">Installations</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>

            <Link
              to="/Contact"
              style={{
                display: "inline-block",
                color: "rgba(var(--bs-link-color-rgb)",
              }}
            >
              contact page
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
