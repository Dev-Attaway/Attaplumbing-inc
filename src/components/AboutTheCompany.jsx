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
      <div className="row justify-content-center gy-3">
        <div className="h-100">
          <AboutCard
            imageSrc="https://ik.imagekit.io/pbq9icsqc/pexels-wdnet-14953886.webp?updatedAt=1720653473873"
            title="Card title"
            text="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
            imageWidth="150"
            imageHeight="150"
          />
        </div>
        <div className="h-100">
          <AboutCard
            imageSrc="https://ik.imagekit.io/pbq9icsqc/pexels-magda-ehlers-pexels-3721272.webp?updatedAt=1720653474324"
            title="Card title"
            text="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
            imageWidth="150"
            imageHeight="150"
          />
        </div>
        <div className="h-100">
          <AboutCard
            imageSrc="https://ik.imagekit.io/pbq9icsqc/vecteezy_ai-generated-beautiful-photography-for-plumbing-services_38813454.webp?updatedAt=1720653474196"
            title="Card title"
            text="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
            imageWidth="150"
            imageHeight="150"
          />
        </div>
      </div>

      {/* Reviews Section */}
      <div className="container reviews">
        <div className="row justify-content-center">
          <div className="col d-flex justify-content-center">
            <Yelp />
          </div>
          <div className="col d-flex justify-content-center">
            <BuildZoom />
          </div>
          <ContactTab />
        </div>
        {/* Contact Tab */}
      </div>
    </div>
  );
}

export default AboutTheCompany;
