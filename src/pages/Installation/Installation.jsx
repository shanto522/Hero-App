import React, { useState, useEffect } from "react";
import { FaDownload, FaStar } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";

const Installation = () => {
  const [installedApps, setInstalledApps] = useState([]);
  const [sortBy, setSortBy] = useState("none");

  useEffect(() => {
    loadInstalledApps();
  }, []);

  const loadInstalledApps = () => {
    try {
      const storedApps = JSON.parse(
        localStorage.getItem("installedApps") || "[]"
      );
      setInstalledApps(storedApps);
    } catch (error) {
      console.error("Error loading installed apps from localStorage:", error);
      setInstalledApps([]);
    }
  };

  const handleUninstall = (appId, appTitle) => {
    const updatedApps = installedApps.filter(
      (app) => String(app.id) !== String(appId)
    );
    localStorage.setItem("installedApps", JSON.stringify(updatedApps));
    setInstalledApps(updatedApps);
    toast.success(`Successfully uninstalled ${appTitle}.`, {
      duration: 3000,
      position: "top-center",
    });
  };

  const sortApps = (apps) => {
    const appsToSort = [...apps];

    const parseDownloads = (downloadsString) => {
      const str = String(downloadsString).toUpperCase();
      const number = parseFloat(str.replace(/[A-Z]/g, ""));
      if (str.includes("B")) return number * 1_000_000_000;
      if (str.includes("M")) return number * 1_000_000;
      if (str.includes("K")) return number * 1_000;
      return number;
    };

    switch (sortBy) {
      case "sizeDesc":
        return appsToSort.sort(
          (a, b) => parseFloat(b.size) - parseFloat(a.size)
        );
      case "downloadsHigh":
        return appsToSort.sort(
          (a, b) => parseDownloads(b.downloads) - parseDownloads(a.downloads)
        );
      case "downloadsLow":
        return appsToSort.sort(
          (a, b) => parseDownloads(a.downloads) - parseDownloads(b.downloads)
        );
      default:
        return apps;
    }
  };

  const sortedApps = sortApps(installedApps);

  return (
    <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12">
      <Toaster />
      <div className="text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mt-8 sm:mt-12">
          Your Installed Apps
        </h2>
        <p className="text-gray-600 mt-2 sm:mt-3 text-sm sm:text-base md:text-lg leading-relaxed px-2 sm:px-10 md:px-32">
          Explore all the apps you’ve installed from our platform.
        </p>
      </div>

      <div className="mt-6 sm:mt-10 bg-gray-50 p-4 sm:p-6 md:p-8 rounded-xl shadow-md sm:shadow-lg">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800">
            {installedApps.length} App{installedApps.length !== 1 ? "s" : ""}{" "}
            Found
          </h3>

          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <span className="text-sm text-gray-600">Sort By:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm sm:text-base cursor-pointer"
            >
              <option value="sizeDesc">Sort By Download</option>
              <option value="downloadsHigh">Downloads (High → Low)</option>
              <option value="downloadsLow">Downloads (Low → High)</option>
            </select>
          </div>
        </div>

        {sortedApps.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-gray-500 text-base sm:text-lg">
              No installed apps found. Install some from the app details pages!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {sortedApps.map((app) => (
              <div
                key={app.id}
                className="flex flex-col sm:flex-row items-center sm:items-start justify-between p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition duration-200"
              >
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-5 w-full">
                  <img
                    src={app.image}
                    alt={`${app.title} icon`}
                    className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-lg border border-gray-200"
                  />

                  <div className="flex-1 text-center sm:text-left">
                    <p className="text-lg sm:text-xl font-semibold text-gray-900">
                      {app.title}
                    </p>

                    <div className="flex flex-wrap justify-center sm:justify-start items-center gap-2 text-sm sm:text-base text-gray-600 mt-2">
                      <span className="flex items-center">
                        <FaDownload className="text-green-600 mr-1" />
                        {app.downloads}
                      </span>

                      <span className="flex items-center">
                        <FaStar className="text-yellow-500 mr-1" />
                        {app.ratingAvg}
                      </span>

                      <span>{app.size} MB</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 sm:mt-0 sm:ml-4 w-full sm:w-auto text-center">
                  <button
                    onClick={() => handleUninstall(app.id, app.title)}
                    className="w-full sm:w-auto bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-200 text-sm sm:text-base"
                  >
                    Uninstall
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Installation;
