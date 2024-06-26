import React, { useState, useEffect } from "react";
import "../styles/Reviews.css";

export default function Reviews() {
  const [data, setData] = useState({
    rating: null,
    review_count: null,
    url: null,
  });
  const [starState, setStarState] = useState(0);
  const [error, setError] = useState(null);

  const YELP_URL = import.meta.env.VITE_YELP_API_CALL;

  useEffect(() => {
    const setYelpStart = async () => {
      const star = data.rating;
      switch (star) {
        case 0:
          setStarState("./public/yelp-stars/Review_Ribbon_medium_20_0.png");
          break;

        case 0.5:
          setStarState();
          break;

        case 1:
          setStarState();
          break;

        case 1.5:
          setStarState();
          break;

        case 2:
          setStarState();
          break;

        case 2.5:
          setStarState();
          break;

        case 3:
          setStarState();
          break;

        case 3.5:
          setStarState();
          break;

        case 4:
          setStarState();
          break;

        case 4.5:
          setStarState();
          break;

        case 5:
          setStarState("yelp-stars/Review_Ribbon_medium_20_5.png");
          break;
      }
    };

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
        }
      } catch (error) {
        setError(error);
      }
    };
    fetchYelpData();
    setYelpStart();
  }, []);

  // will display an error to the user if data isn't fetched
  if (error) return <div>Error: {error.message}</div>;
  return (
    <div className="h-100 p-2 d-flex justify-content-evenly flex-wrap">
      <div
        className="card w-100 p-3 m-3 align-self-center "
        style={{ minWidth: "15rem" }}
      >
        <div className="mt-auto p-3 d-flex justify-content-around align-items-center flex-wrap">
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
