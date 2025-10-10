import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router";
import useApps from "../../hooks/useApps";
import { FaCommentDots, FaDownload, FaStar } from "react-icons/fa";
import appErrImg from "../../assets/App_Error.png";
import toast, { Toaster } from "react-hot-toast";
import Loading from "../../components/Loading/Loading";

const INSTALLED_APPS_KEY = "installedApps";

const AppDetails = () => {
  const { id } = useParams();
  const { apps, loading, error } = useApps();
  const app = apps.find((a) => String(a.id) === id);

  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    if (app) {
      const installedApps = JSON.parse(
        localStorage.getItem(INSTALLED_APPS_KEY) || "[]"
      );
      setIsInstalled(
        installedApps.some((installedApp) => String(installedApp.id) === id)
      );
    }
  }, [app, id]);

  if (loading) return <Loading />;
  if (error)
    return <p className="text-center mt-10 text-xl">Error loading app data.</p>;
  if (!app)
    return (
      <div className="flex justify-center items-center min-h-screen p-4">
        <div className="max-w-[1600px] w-full text-center">
          <img
            src={appErrImg}
            alt="App Not Found"
            className="mx-auto w-full max-w-sm sm:max-w-md md:max-w-lg lg:h-[400px] lg:w-[400px]"
          />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold my-6">
            App Is Not Found
          </h2>
          <Link to="/app">
            <button className="btn btn-primary text-lg sm:text-xl md:text-2xl font-semibold h-16 sm:h-20 md:h-24 w-48 sm:w-56 md:w-72 rounded-xl">
              Go Home
            </button>
          </Link>
        </div>
      </div>
    );

  const {
    image,
    title,
    companyName,
    downloads,
    ratingAvg,
    size,
    description,
    reviews,
    ratings,
  } = app;

  const handleInstallClick = () => {
    const installedApps = JSON.parse(
      localStorage.getItem(INSTALLED_APPS_KEY) || "[]"
    );

    if (!installedApps.some((a) => String(a.id) === id)) {
      const updatedApps = [...installedApps, app];
      localStorage.setItem(INSTALLED_APPS_KEY, JSON.stringify(updatedApps));
      toast.success(`Successfully installed ${title}!`, {
        duration: 3000,
        position: "top-center",
      });
      setIsInstalled(true);
    }
  };
  const maxRatingCount = Math.max(...ratings.map((rating) => rating.count));

  return (
    <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-10 lg:px-20">
      <Toaster />
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 pt-10 pb-4 border-b border-gray-300">
        <img
          className="w-[220px] h-[220px] sm:w-[260px] sm:h-[260px] md:w-[300px] md:h-[300px] lg:w-[320px] lg:h-[320px] object-cover rounded-xl shadow-md"
          src={image}
          alt={title}
        />
        <div className="text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-[32px] font-semibold">
            {title}
          </h2>
          <p className="text-[16px] sm:text-[18px] md:text-[20px] font-semibold border-b border-gray-300 pb-2 text-gray-600">
            Developed by {companyName}
          </p>
          <div className="flex flex-wrap justify-center lg:justify-start items-start gap-6 sm:gap-10 mt-4">
            <div className="flex flex-col items-center">
              <FaDownload className="text-[28px] sm:text-[30px] mb-1 text-green-600" />
              <p className="text-sm text-gray-600">Downloads</p>
              <h2 className="text-2xl sm:text-[36px] font-bold">{downloads}</h2>
            </div>
            <div className="flex flex-col items-center">
              <FaStar className="text-[28px] sm:text-[30px] mb-1 text-amber-500" />
              <p className="text-sm text-gray-600">Average Rating</p>
              <h2 className="text-2xl sm:text-[36px] font-bold">{ratingAvg}</h2>
            </div>
            <div className="flex flex-col items-center">
              <FaCommentDots className="text-[28px] sm:text-[30px] mb-1 text-blue-500" />
              <p className="text-sm text-gray-600">Total Reviews</p>
              <h2 className="text-2xl sm:text-[36px] font-bold">{reviews}</h2>
            </div>
          </div>
          <button
            className={`w-[200px] sm:w-[220px] md:w-[240px] h-[48px] sm:h-[52px] text-white font-semibold rounded-lg cursor-pointer mt-6 transition duration-200 ${
              isInstalled
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-[#00d390] hover:bg-[#00b07a]"
            }`}
            onClick={handleInstallClick}
            disabled={isInstalled}
          >
            {isInstalled ? "Installed" : `Install Now (${size} MB)`}
          </button>
        </div>
      </div>

      <div className="border-b border-gray-300 pb-4 mt-8">
        <h2 className="text-xl sm:text-2xl md:text-[24px] font-semibold my-3">
          Ratings
        </h2>
        <div className="bg-[#f0f3f8] rounded-xl p-4 h-[260px] sm:h-[300px] w-full flex flex-col justify-around">
          {ratings
            .slice()
            .reverse()
            .map((rating) => (
              <div key={rating.name} className="flex items-center gap-2">
                <span className="w-16 text-right text-sm font-medium text-gray-700">
                  {rating.name}
                </span>
                <div className="flex-grow bg-gray-200 rounded-full h-4">
                  <div
                    className="bg-orange-500 h-full rounded-full"
                    style={{
                      width: `${(rating.count / maxRatingCount) * 100}%`,
                    }}
                  ></div>
                </div>
                <span className="text-sm text-gray-600 min-w-[50px]">
                  {rating.count.toLocaleString()}
                </span>
              </div>
            ))}
        </div>
      </div>

      <h2 className="text-xl sm:text-2xl md:text-[24px] font-semibold my-3">
        Description
      </h2>
      <p className="mb-10 sm:mb-16 md:mb-20 whitespace-pre-line text-gray-700 leading-relaxed text-[15px] sm:text-[16px]">
        {description}
      </p>
    </div>
  );
};

export default AppDetails;
