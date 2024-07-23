import { createContext, useContext, useState, useEffect } from "react";
const MobileContext = createContext();

export const MobileProvider = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => /Mobi|Android/i.test(navigator.userAgent);
    const isMobileDevice = checkIfMobile();
    setIsMobile(isMobileDevice);

    // Add touchmove event listener only if it's a mobile device
    if (isMobileDevice) {
      document.addEventListener("touchmove", preventDefault, {
        passive: false,
      });
    }

    // Cleanup function to remove the event listener on component unmount or when isMobile changes
    return () => {
      if (isMobileDevice) {
        document.removeEventListener("touchmove", preventDefault);
      }
    };
  }, []);

  return (
    <MobileContext.Provider value={isMobile}>{children}</MobileContext.Provider>
  );
};

export const mobileCheck = () => useContext(MobileContext);
