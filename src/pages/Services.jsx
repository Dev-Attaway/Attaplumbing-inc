import ServicesPrimer from "../components/ServicesPrimer";
import ServiceOption from "../components/Project";
import "../styles/Services.css";

// Define the Services component
export default function Services() {
  // Render the Services component
  return (
    /* Project component from the specified file path
       has data manually inserted into the properties below
       these properties then used within the project component
    */

    <div className="container-fluid mx-auto">
      <ServicesPrimer />
      <div className="p-4">
        <div className="d-flex flex-column">
          <div className="card mb-2">
            <div className="card-body bg-light ">
              <h3> Installations </h3>
              <p>
                <button
                  className="btn btn-primary"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#contentId0"
                  aria-expanded="false"
                  aria-controls="contentId0"
                >
                  Show
                </button>
              </p>
              <div className="collapse" id="contentId0">
                <ServiceOption
                  title="Installations"
                  service_primer="If you are experiencing leaks, running out of hot water, or need
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
                optimal condition."
                />
              </div>
            </div>
          </div>

          <div className="card mb-2">
            <div className="card-body bg-light ">
              <h3> Repairs </h3>
              <p>
                <button
                  className="btn btn-primary"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#contentId1"
                  aria-expanded="false"
                  aria-controls="contentId1"
                >
                  Show
                </button>
              </p>
              <div className="collapse" id="contentId1">
                <ServiceOption
                  title="Repairs"
                  service_primer="If you are experiencing leaks, running out of hot water, or need
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
                optimal condition."
                />
              </div>
            </div>
          </div>

          <div className="card mb-2">
            <div className="card-body bg-light ">
              <h3> Home Remodeling & Additions </h3>
              <p>
                <button
                  className="btn btn-primary"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#contentId2"
                  aria-expanded="false"
                  aria-controls="contentId2"
                >
                  Show
                </button>
              </p>
              <div className="collapse" id="contentId2">
                <ServiceOption
                  title="Home Remodeling & Additions"
                  service_primer="If you are experiencing leaks, running out of hot water, or need
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
                optimal condition."
                />
              </div>
            </div>
          </div>

          <div className="card mb-2">
            <div className="card-body bg-light ">
              <h3> Conventional Water Heaters </h3>
              <p>
                <button
                  className="btn btn-primary"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#contentId3"
                  aria-expanded="false"
                  aria-controls="contentId3"
                >
                  Show
                </button>
              </p>
              <div className="collapse" id="contentId3">
                <ServiceOption
                  title="Conventional Water Heaters"
                  service_primer="If you are experiencing leaks, running out of hot water, or need
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
                optimal condition."
                />
              </div>
            </div>
          </div>

          <div className="card mb-2">
            <div className="card-body bg-light ">
              <h3> Tankless Water Heaters </h3>
              <p>
                <button
                  className="btn btn-primary"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#contentId4"
                  aria-expanded="false"
                  aria-controls="contentId4"
                >
                  Show
                </button>
              </p>
              <div className="collapse" id="contentId4">
                <ServiceOption
                  title="Tankless Water Heaters"
                  service_primer="If you are experiencing leaks, running out of hot water, or need
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
                optimal condition."
                />
              </div>
            </div>
          </div>

          <div className="card mb-2">
            <div className="card-body bg-light ">
              <h3> Fire Place Retrofits </h3>
              <p>
                <button
                  className="btn btn-primary"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#contentId5"
                  aria-expanded="false"
                  aria-controls="contentId5"
                >
                  Show
                </button>
              </p>
              <div className="collapse" id="contentId5">
                <ServiceOption
                  title="Fire Place Retrofits"
                  service_primer="If you are experiencing leaks, running out of hot water, or need
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
                optimal condition."
                />
              </div>
            </div>
          </div>

          <div className="card mb-2">
            <div className="card-body bg-light ">
              <h3> Residential Repiping </h3>
              <p>
                <button
                  className="btn btn-primary"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#contentId6"
                  aria-expanded="false"
                  aria-controls="contentId6"
                >
                  Show
                </button>
              </p>
              <div className="collapse" id="contentId6">
                <ServiceOption
                  title="Residential Repiping"
                  service_primer="If you are experiencing leaks, running out of hot water, or need
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
                optimal condition."
                />
              </div>
            </div>
          </div>

          <div className="card mb-2">
            <div className="card-body bg-light ">
              <h3> Water Treatment </h3>
              <p>
                <button
                  className="btn btn-primary"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#contentId7"
                  aria-expanded="false"
                  aria-controls="contentId7"
                >
                  Show
                </button>
              </p>
              <div className="collapse" id="contentId7">
                <ServiceOption
                  title="Water Treatment"
                  service_primer="If you are experiencing leaks, running out of hot water, or need
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
                optimal condition."
                />
              </div>
            </div>
          </div>

          <div className="card mb-2">
            <div className="card-body bg-light ">
              <h3> Garbage Disposal Repair & Replace </h3>
              <p>
                <button
                  className="btn btn-primary"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#contentId8"
                  aria-expanded="false"
                  aria-controls="contentId8"
                >
                  Show
                </button>
              </p>
              <div className="collapse" id="contentId8">
                <ServiceOption
                  title="Garbage Disposal Repair & Replace"
                  service_primer="If you are experiencing leaks, running out of hot water, or need
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
                optimal condition."
                />
              </div>
            </div>
          </div>

          <div className="card mb-2">
            <div className="card-body bg-light ">
              <h3> Sewer Repair </h3>
              <p>
                <button
                  className="btn btn-primary"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#contentId9"
                  aria-expanded="false"
                  aria-controls="contentId9"
                >
                  Show
                </button>
              </p>
              <div className="collapse" id="contentId9">
                <ServiceOption
                  title="Sewer Repair"
                  service_primer="If you are experiencing leaks, running out of hot water, or need
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
                optimal condition."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
