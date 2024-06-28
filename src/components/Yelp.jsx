import React from "react";
import "../styles/YelpReviews.css";

export default function YelpReviews() {
  return (
    <div className="p-2 d-inline-flex justify-content-evenly flex-wrap">
      <div
        className="shadow card w-50 p-3 m-3 align-self-center"
        style={{ minWidth: "15rem" }}
      >
        <div className="mt-auto p-3 d-inline-flex justify-content-start align-items-baseline flex-wrap">
          <h5>Check out our page on</h5>
          <a
            href={"https://www.yelp.com/biz/atta-plumbing-chula-vista"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="vecteezy_yelp-logo-png-yelp-icon-transparent-png_27127534.png"
              alt="yelp-logo-image"
              className="ms-2 yelp-logo-image"
            />
          </a>
        </div>
        <div className="card d-inline-flex">
          <div className="card-header">Based on 17 reviews</div>
          <div className="card-body text-center">
            <img
              src="yelp-stars/Review_Ribbon_medium_20_5.png"
              alt="yelp star ranking system"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
  );
}