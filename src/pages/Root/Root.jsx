import React, { useState, useEffect } from "react";
import Navbar from "../../components/Header/Navbar";
import Footer from "../../components/Footer/Footer";
import { Outlet, useLocation } from "react-router";

const Root = () => {
  const location = useLocation();
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    setShowLoader(true);

    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 200);

    return () => clearTimeout(timer);
  }, [location.key]);

  return (
    <div>
      <Navbar />

      <div className="relative">
        <Outlet />
        {showLoader && (
          <div className="absolute inset-0 flex justify-center items-center bg-white bg-opacity-50 z-50">
            <div className="w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Root;
