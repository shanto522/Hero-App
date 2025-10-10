import React from "react";

const Loading = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-[60vh] space-y-3">
      <div className="flex space-x-2">
        <span className="loading loading-spinner text-primary"></span>
        <span className="loading loading-spinner text-secondary"></span>
        <span className="loading loading-spinner text-accent"></span>
        <span className="loading loading-spinner text-neutral"></span>
        <span className="loading loading-spinner text-info"></span>
        <span className="loading loading-spinner text-success"></span>
        <span className="loading loading-spinner text-warning"></span>
        <span className="loading loading-spinner text-error"></span>
      </div>
      <p className="text-gray-600 font-semibold text-lg">Loading...</p>
    </div>
  );
};

export default Loading;
