import "../styles/Services.css";
export default function Installations() {
  return (
    <div className="container-fluid services-child-page">
      <div className="card m-2 p-2">
        <div className="row g-0 justify-content-center">
          <div className="col-md-4">
            <img
              src="default.png"
              className="img-fluid rounded mx-auto d-block"
              alt="..."
            />
          </div>

          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Installations</h5>
              <p className="card-text d-flex">
                If you are experiencing leaks, running out of hot water, or need
                a new kitchen faucet installed, AttaPlumbing provides expert and
                reliable solutions. When selecting a team to protect your home
                and manage essential plumbing repairs, trust our skilled,
                licensed, and certified plumbing specialists. Chronic leaks and
                plumbing issues often stem from the system's age and the water
                pressure entering your home. High water pressure can weaken
                seals and cause extensive problems throughout the system.
                Additionally, when older faucets, showerheads, and appliance
                connections become corroded and start leaking, it is imperative
                to replace them promptly to prevent further damage to your home.
                For professional and trustworthy plumbing services, choose
                AttaPlumbing to ensure your home's plumbing system remains in
                optimal condition.
              </p>

              <Link
                to="/Contact"
                style={{
                  display: "inline-block",
                }}
              >
                <button type="button" className="btn btn-primary">
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
