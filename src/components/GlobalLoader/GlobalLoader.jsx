import React from "react";

const GlobalLoader = () => {
  return (
    <div className="fixed inset-0 flex flex-col justify-center items-center bg-white/80 backdrop-blur-sm z-[9999]">
      <div className="flex space-x-2">
        <span className="loading loading-spinner text-primary"></span>
        <span className="loading loading-spinner text-secondary"></span>
        <span className="loading loading-spinner text-accent"></span>
        <span className="loading loading-spinner text-info"></span>
        <span className="loading loading-spinner text-success"></span>
        <span className="loading loading-spinner text-warning"></span>
        <span className="loading loading-spinner text-error"></span>
      </div>
      <p className="mt-3 text-gray-700 font-semibold text-lg animate-pulse">
        Loading Page...
      </p>
    </div>
  );
};

export default GlobalLoader;
