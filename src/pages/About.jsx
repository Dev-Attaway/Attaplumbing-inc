import { Link, useLocation } from "react-router-dom";
import "../styles/About.css";
import AboutTheCompany from "../components/AboutTheCompany";

export default function About() {
  // Get the current URL path
  const currentPage = useLocation().pathname;

  return (
    <div className="about d-flex justify-content-center align-items-center flex-wrap">
      <div className="container flex my-2">
        <AboutTheCompany />
        <p>
          <Link
            to="/Contact"
            className={
              currentPage === "/Contact" ? "nav-link active" : "nav-link"
            }
            style={{
              display: "inline-block",
              color: "rgba(var(--bs-link-color-rgb)",
            }}
          >
            &nbsp;contact page&nbsp;
          </Link>
        </p>
      </div>
    </div>
  );
}
