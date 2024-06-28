import React, { useState, useEffect } from "react";
import "../styles/YelpReviews.css";

export default function YelpReviews() {
  const [data, setData] = useState({
    rating: null,
    review_count: null,
    url: null,
  });
  const [starState, setStarState] = useState(null);
  const [error, setError] = useState(null);

  const YELP_URL = import.meta.env.VITE_YELP_API_CALL;

  useEffect(() => {
    const fetchYelpData = async () => {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_YELP_API_KEY}`,
        },
      };
      try {
        const response = await fetch(YELP_URL, options);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const responseData = await response.json();

        if (responseData.businesses) {
          const business = responseData.businesses[0];
          setData({
            rating: business.rating,
            review_count: business.review_count,
            url: business.url,
          });

          // Set starState based on rating after data is fetched
          setYelpStar(business.rating);
        }
      } catch (error) {
        setError(error);
      }
    };

    fetchYelpData();
  }, []); // Empty dependency array ensures useEffect runs only once

  // Function to set starState based on rating
  const setYelpStar = (starRating) => {
    switch (starRating) {
      case 0:
        setStarState("yelp-stars/Review_Ribbon_medium_20_0.png");
        break;
      case 0.5:
        setStarState("yelp-stars/Review_Ribbon_medium_20_half.png");
        break;
      case 1.0:
        setStarState("yelp-stars/Review_Ribbon_medium_20_1.png");
        break;
      case 1.5:
        setStarState("yelp-stars/Review_Ribbon_medium_20_1_half.png");
        break;
      case 2.0:
        setStarState("yelp-stars/Review_Ribbon_medium_20_2.png");
        break;
      case 2.5:
        setStarState("yelp-stars/Review_Ribbon_medium_20_2_half.png");
        break;
      case 3.0:
        setStarState("yelp-stars/Review_Ribbon_medium_20_3.png");
        break;
      case 3.5:
        setStarState("yelp-stars/Review_Ribbon_medium_20_3_half.png");
        break;
      case 4.0:
        setStarState("yelp-stars/Review_Ribbon_medium_20_4.png");
        break;
      case 4.5:
        setStarState("yelp-stars/Review_Ribbon_medium_20_4_half.png");
        break;
      case 5.0:
        setStarState("yelp-stars/Review_Ribbon_medium_20_5.png");
        break;
      default:
        setStarState("yelp-stars/Review_Ribbon_medium_20_0.png"); // Default image path
        break;
    }
  };

  // Handle errors
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="p-2 d-inline-flex justify-content-evenly flex-wrap">
      <div
        className="card w-50 p-3 m-3 align-self-center "
        style={{ minWidth: "15rem" }}
      >
        <div className="mt-auto p-3 d-flex justify-content-start align-items-baseline flex-wrap">
          <h5> Check out our page on </h5>
          <a href={data.url} target="_blank" rel="noopener noreferrer">
            <img
              src="vecteezy_yelp-logo-png-yelp-icon-transparent-png_27127534.png"
              alt="yelp logo"
              className="yelp-logo-image"
            />
          </a>
        </div>
        <div className="card">
          <div className="card-header">
            Based on {data.review_count} reviews
          </div>
          <div className="card-body">
            <p className="card-text"></p>
            <img src={starState} alt="yelp star ranking system" />
          </div>
        </div>
      </div>
    </div>
  );
}
