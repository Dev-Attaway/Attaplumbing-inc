import React, { createContext, useContext, useState, useEffect } from "react";

// Create a context to hold the mobile state
const MobileContext = createContext();

// MobileProvider component to provide the mobile state to its children
export const MobileProvider = ({ children }) => {
  // Initialize the state variable 'isMobile' to false
  const [isMobile, setIsMobile] = useState(false);

  // useEffect hook to check if the user is on a mobile device when the component mounts
  useEffect(() => {
    // Function to check if the user agent indicates a mobile device
    const checkIfMobile = () => /Mobi|Android/i.test(navigator.userAgent);

    // Update the 'isMobile' state based on the check
    setIsMobile(checkIfMobile());
  }, []); // Empty dependency array means this effect runs once after initial render

  // Return the context provider with 'isMobile' value
  return (
    <MobileContext.Provider value={isMobile}>{children}</MobileContext.Provider>
  );
};

// Custom hook to consume the MobileContext and get the 'isMobile' value
export const mobileCheck = () => useContext(MobileContext);
