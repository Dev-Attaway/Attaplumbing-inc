import React from "react";
import Yelp from "../components/Yelp";
import ContactTab from "./ContactTab";
import BuildZoom from "./BuildZoom";
import AboutCard from "./AboutCard";
import "../styles/About.css";

function AboutTheCompany() {
  return (
    <div className="container">
      {/* Card Section */}
      <div className="row m-4 justify-content-center gy-3">
        <div className="col-md-8 d-flex h-100 justify-content-center">
          <AboutCard
            imageSrc="vecteezy_ai-generated-beautiful-photography-for-plumbing-services_38813454.png"
            title="Card title"
            text="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
          />
        </div>
        <div className="col-md-8 d-flex h-100 justify-content-center">
          <AboutCard
            imageSrc="pexels-wdnet-14953886.png"
            title="Card title"
            text="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
          />
        </div>
        <div className="col-md-8 d-flex h-100 justify-content-center">
          <AboutCard
            imageSrc="pexels-thirdman-8470830.png"
            title="Card title"
            text="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
          />
        </div>
      </div>

      {/* Reviews Section */}
      <div className="row justify-content-center m-4">
        <div className="col-lg-6 col-md-8 col-sm-10 d-flex justify-content-center">
          <div style={{ maxWidth: "20rem", height: "25rem" }}>
            <Yelp />
          </div>
        </div>
        <div className="col-lg-6 col-md-8 col-sm-10 d-flex justify-content-center">
          <div style={{ maxWidth: "20rem", height: "25rem" }}>
            <BuildZoom />
          </div>
        </div>
      </div>

      {/* Contact Tab */}
      <ContactTab />
    </div>
  );
}

export default AboutTheCompany;
