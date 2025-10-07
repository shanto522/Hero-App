import React from "react";
import errorImg from "../../assets/errorImg.png";
const ErrorPage = () => {
  return (
    <div className="flex justify-center items-center text-center">
      <div className="space-y-4">
        <img className="mt-20" src={errorImg} alt="" />
        <h2 className="text-[48px] font-semibold">Oops, page not found!</h2>
        <p className="text-[20px] text-[#627382]">
          The page you are looking for is not available.
        </p>
        <button className="btn btn-primary px-10 py-6 bg-gradient-to-r from-[#632ee3] to-[#9f62f2]">
          Go Back!
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
