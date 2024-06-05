import { Link } from "react-router-dom";
export default function Repairs() {
  return (
    <div className="d-flex justify-content-center align-items-center flex-wrap">
      <div className="container flex my-2">
        <p>
          <Link
            to="/Contact"
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