import React, { useState } from "react";
import useApps from "../../hooks/useApps";
import AppCard from "../../components/AppsCard/AppCard";
import { Link } from "react-router";
import { CiSearch } from "react-icons/ci";

const App = () => {
  const { apps } = useApps();
  const [search, setSearch] = useState("");
  const term = search.trim().toLocaleLowerCase();
  const searchedApps = term
    ? apps.filter((app) => app.title.toLocaleLowerCase().includes(term))
    : apps;

  return (
    <div className="max-w-[1600px] mx-auto px-5 sm:px-8 md:px-12">
      <div className="text-center">
        <h2 className="text-[40px] sm:text-[56px] md:text-[56px] leading-tight font-semibold mt-12 sm:mt-20">
          Our All Applications
        </h2>

        <p className="text-[#627382] mt-4 text-base sm:text-lg md:text-xl leading-relaxed px-2 sm:px-16 md:px-40">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <div>
        <div className="flex justify-between py-5 items-center">
          <h1 className="text-3xl font-semibold">
            <span>({searchedApps.length})</span> Apps Found
          </h1>
          <label className="input font-semibold">
            <CiSearch></CiSearch>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="search"
              placeholder="Search Apps"
            />
          </label>
        </div>
        {searchedApps.length === 0 ? (
          <div className="text-center py-20">
            <h2 className="text-4xl font-bold text-gray-700">
              No Apps Found 😔
            </h2>
            <div className="flex justify-center items-center">
              <Link to="/app">
                <button className="h-[48px] w-[145px] bg-gradient-to-r from-[#632ee3] to-[#9f62f2] mt-[40px] mb-[80px] text-white font-semibold cursor-pointer rounded-xl">
                  Show All Apps
                </button>
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-[80px]">
            {searchedApps.map((app) => (
              <AppCard key={app.id} app={app}></AppCard>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
