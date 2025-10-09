import React from "react";
import { FaDownload, FaStar } from "react-icons/fa";
import { Link } from "react-router";

const AppCard = ({ app }) => {
  const { title, downloads, ratingAvg, image } = app;
  return (
    <div>
      <div className="card bg-base-100 border shadow-sm hover:scale-105 transition ease-in-out">
        <figure className="h-90 overflow-hidden">
          <img
            className="h-full p-5 rounded-xl w-full object-cover"
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <div className="card-actions flex justify-between">
            <div className="flex items-center gap-1 font-semibold bg-[#f1f5e8] px-3 py-1 text-green-600">
              <FaDownload />
              {downloads}
            </div>
            <div className="flex items-center gap-1 font-semibold bg-[#f1f5e8] px-3 py-1 text-amber-600">
              <FaStar />
              {ratingAvg}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppCard;
