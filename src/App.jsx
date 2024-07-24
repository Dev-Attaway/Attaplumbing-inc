import React, { useState, useEffect } from "react"; // Import React hooks
import { Outlet } from "react-router-dom"; // Import Outlet for nested routes
import Footer from "./components/Footer"; // Import Footer component
import Header from "./components/Header"; // Import Header component
import { MobileProvider } from "./MobileCheck"; // Import MobileProvider for context
import "../src/App.css"; // Import styles

// Define the App component
function App() {
  // State to track if the header should be sticky
  const [isSticky, setSticky] = useState(false);

  // useEffect hook to handle scroll event
  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      setSticky(window.scrollY > 0); // Set isSticky based on scroll position
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);
    // Cleanup function to remove event listener
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
      <MobileProvider>
        {/* Pass sticky class to Header component based on isSticky state */}
      <Header className={isSticky ? "sticky" : ""} id="myHeader" />

        <main>
          <Outlet /> {/* Render nested routes */}
          <Footer /> {/* Render Footer component */}
        </main>
      </MobileProvider>
  );
}

export default App; // Export App component
