import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "../src/App.css";

function App() {
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Header className={isSticky ? "sticky" : ""} id="myHeader" />
      <main>
        <Outlet />
        <Footer />
      </main>
    </>
  );
}

export default App;
