import React, { useState, useEffect } from "react";
import "../styles/YelpReviews.css";

export default function YelpReviews() {
  // const [data, setData] = useState({
  //   rating: null,
  //   review_count: null,
  //   url: null,
  // });
  const [starState, setStarState] = useState('yelp-stars/Review_Ribbon_medium_20_5.png');
  // const [error, setError] = useState(null);

  /*
    THere is no reason to make an api call to yelp if I can just grab data data from the site
    as long as I don't violate Yelps policies on listing data.
    For instance: this component will not feature any reviews from Yelp for that would break 
    Yelp's regulations.
    However hosting Attaplumbing's Yelp rating, rating metrics, and link is not.
    I'm commenting out this code in case I need it in future developments
  */
  
  // This is a kulgde, I dont want to pay 7 dollars to yelp
  // const YELP_URL = import.meta.env.VITE_YELP_API_CALL;
  // useEffect(() => {
  //   const fetchYelpData = async () => {
  //     const options = {
  //       method: "GET",
  //       headers: {
  //         accept: "application/json",
  //         Authorization: `Bearer ${import.meta.env.VITE_YELP_API_KEY}`,
  //       },
  //     };
  //     try {
  //       const response = await fetch(YELP_URL, options);
  //       if (!response.ok) {
  //         throw new Error(`HTTP error! status: ${response.status}`);
  //       }
  //       const responseData = await response.json();

  //       if (responseData.businesses) {
  //         const business = responseData.businesses[0];
  //         setData({
  //           rating: business.rating,
  //           review_count: business.review_count,
  //           url: business.url,
  //         });

  //         // Set starState based on rating after data is fetched
  //         setYelpStar(business.rating);
  //       }
  //     } catch (error) {
  //       console.error('Error fetching Yelp data:', error);
  //       setError(error);
  //     }
  //   };

  //   fetchYelpData();
  // }, []); // Empty dependency array ensures useEffect runs only once

  // Function to set starState based on rating
  // const setYelpStar = (starRating) => {
  //   // This is a kulgde, I dont want to pay 7 dollars to yelp
  //   const starMap = {
  //     0: "yelp-stars/Review_Ribbon_medium_20_0.png",
  //     0.5: "yelp-stars/Review_Ribbon_medium_20_half.png",
  //     1.0: "yelp-stars/Review_Ribbon_medium_20_1.png",
  //     1.5: "yelp-stars/Review_Ribbon_medium_20_1_half.png",
  //     2.0: "yelp-stars/Review_Ribbon_medium_20_2.png",
  //     2.5: "yelp-stars/Review_Ribbon_medium_20_2_half.png",
  //     3.0: "yelp-stars/Review_Ribbon_medium_20_3.png",
  //     3.5: "yelp-stars/Review_Ribbon_medium_20_3_half.png",
  //     4.0: "yelp-stars/Review_Ribbon_medium_20_4.png",
  //     4.5: "yelp-stars/Review_Ribbon_medium_20_4_half.png",
  //     5.0: "yelp-stars/Review_Ribbon_medium_20_5.png",
  //   };
  //   setStarState(starMap[starRating] || "yelp-stars/Review_Ribbon_medium_20_0.png");
  // };

  // Handle errors
  // if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="p-2 d-inline-flex justify-content-evenly flex-wrap">
      <div
        className="card w-50 p-3 m-3 align-self-center "
        style={{ minWidth: "15rem" }}
      >
        <div className="mt-auto p-3 d-flex justify-content-start align-items-baseline flex-wrap">
          <h5> Check out our page on </h5>
          <a href={'https://www.yelp.com/biz/atta-plumbing-chula-vista'} target="_blank" rel="noopener noreferrer">
            <img
              src="vecteezy_yelp-logo-png-yelp-icon-transparent-png_27127534.png"
              alt="yelp logo"
              className="yelp-logo-image"
            />
          </a>
        </div>
        <div className="card">
          <div className="card-header">
            Based on 17 reviews
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