import React from "react";
import { useNavigate } from "react-router";
import errorImg from "../../assets/errorImg.png";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center items-center text-center min-h-screen bg-[#fdfbfb] px-4">
      <img className="w-80 mb-8" src={errorImg} alt="Error" />
      <h2 className="text-[40px] md:text-[48px] font-semibold">
        Oops, page not found!
      </h2>
      <p className="text-[18px] md:text-[20px] text-[#627382] mt-2">
        The page you are looking for is not available or doesn’t exist.
      </p>
      <button
        onClick={() => navigate("/")}
        className="btn btn-primary mt-6 px-10 py-3 text-white bg-gradient-to-r from-[#632ee3] to-[#9f62f2]"
      >
        Go Back Home
      </button>
    </div>
  );
};

export default ErrorPage;
