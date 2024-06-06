import React from "react";

// Import ReactDOM from the react-dom package to interact with the DOM
import ReactDOM from "react-dom/client";
// Import utilities from react-router-dom for setting up application routing behavior
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// Import Bootstrap CSS for styling
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

// Import various page components
import App from "./App";
import Error from "./pages/Error";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Services from "./pages/Services";
import Installations from "./pages/Installations";
import Repairs from "./pages/Repairs";
import HomeRemodelingAdditions from "./pages/HomeRemodelingAdditions";
import ConventionalWaterHeaters from "./pages/ConventionalWaterHeaters";
import TanklessWaterHeaters from "./pages/TanklessWaterHeaters";
import GasLines from "./pages/GasLines";
import FirePlaceRetrofits from "./pages/FirePlaceRetrofits";
import ResidentialRepiping from "./pages/ResidentialRepiping";
import WaterTreatment from "./pages/WaterTreatment";
import GarbageDisposalRepair from "./pages/GarbageDisposalRepair";
import SewerRepair from "./pages/SewerRepair";

// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: "/", // Root path
    element: <App />, // Main App component
    errorElement: <Error />, // Error component to render in case of routing errors
    children: [
      {
        index: true, // Indicate that this route is the index route
        element: <About />, // Render the About component for the root path
      },
      {
        path: "/Services", // Services path
        element: <Services />, // Render the Services component for the Services path
      },
      {
        path: "/Contact", // Contact path
        element: <Contact />, // Render the Contact component for the Contact path
      },
      {
        path: "/Resume", // Resume path
        element: <Resume />, // Render the Resume component for the Resume path
      },
      {
        path: "/Installations", // Resume path
        element: <Installations />, // Render the Resume component for the Resume path
      },
      {
        path: "/Repairs", // Resume path
        element: <Repairs />, // Render the Resume component for the Resume path
      },
      {
        path: "/HomeRemodelingAdditions", // Resume path
        element: <HomeRemodelingAdditions />, // Render the Resume component for the Resume path
      },
      {
        path: "/ConventionalWaterHeaters", // Resume path
        element: <ConventionalWaterHeaters />, // Render the Resume component for the Resume path
      },
      {
        path: "/TanklessWaterHeaters", // Resume path
        element: <TanklessWaterHeaters />, // Render the Resume component for the Resume path
      },
      {
        path: "/GasLines", // Resume path
        element: <GasLines />, // Render the Resume component for the Resume path
      },
      {
        path: "/FirePlaceRetrofits", // Resume path
        element: <FirePlaceRetrofits />, // Render the Resume component for the Resume path
      },
      {
        path: "/ResidentialRepiping", // Resume path
        element: <ResidentialRepiping />, // Render the Resume component for the Resume path
      },
      {
        path: "/WaterTreatment", // Resume path
        element: <WaterTreatment />, // Render the Resume component for the Resume path
      },
      {
        path: "/GarbageDisposalRepair", // Resume path
        element: <GarbageDisposalRepair />, // Render the Resume component for the Resume path
      },
      {
        path: "/SewerRepair", // Resume path
        element: <SewerRepair />, // Render the Resume component for the Resume path
      },
    ],
  },
]);

// Render the application using ReactDOM
ReactDOM.createRoot(document.getElementById("root")).render(
  // Provide the router configuration to the RouterProvider component
  <RouterProvider router={router} />,
);
