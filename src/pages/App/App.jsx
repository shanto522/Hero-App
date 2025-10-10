import React, { useState, useEffect } from "react";
import useApps from "../../hooks/useApps";
import AppCard from "../../components/AppsCard/AppCard";
import { FaSpinner } from "react-icons/fa";

const App = () => {
  const { apps, loading, error } = useApps();
  const [search, setSearch] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    if (search.trim() === "") {
      setIsSearching(false);
      return;
    }

    setIsSearching(true);
    const timer = setTimeout(() => {
      setIsSearching(false);
    }, 500); // 500ms debounce

    return () => clearTimeout(timer);
  }, [search]);

  if (loading)
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <FaSpinner className="animate-spin text-5xl text-gray-400" />
      </div>
    );

  if (error)
    return <p className="text-center mt-10 text-xl">Error loading apps.</p>;

  const filteredApps = apps.filter((app) =>
    app.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-10 lg:px-20 py-8">
      <h1 className="text-3xl font-bold mb-4">Apps</h1>

      <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <p className="text-gray-600 font-bold">
          <span className="font-bold">({filteredApps.length})</span> Apps Found
        </p>

        <input
          type="text"
          placeholder="Search Apps"
          className="input input-bordered w-full sm:w-64"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {isSearching ? (
        <div className="flex justify-center items-center h-[200px]">
          <FaSpinner className="animate-spin text-4xl text-gray-400" />
        </div>
      ) : filteredApps.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredApps.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
      ) : (
        <p className="text-center mt-10 text-gray-500 text-5xl py-10">
          No apps found.
        </p>
      )}
    </div>
  );
};

export default App;
