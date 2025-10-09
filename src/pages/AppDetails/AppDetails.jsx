import React, { useState } from "react";
import { useParams } from "react-router";
import useApps from "../../hooks/useApps";

import { FaCommentDots, FaDownload, FaStar } from "react-icons/fa";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine,
  ResponsiveContainer,
} from "recharts";
import toast, { Toaster } from "react-hot-toast";

const AppDetails = () => {
  const { id } = useParams();
  const { apps, loading, error } = useApps();
  const app = apps.find((a) => String(a.id) === id);

  const [isInstalled, setIsInstalled] = useState(false);

  if (loading)
    return (
      <p className="flex justify-center item center">
        <span className="loading loading-spinner text-primary"></span>
        <span className="loading loading-spinner text-secondary"></span>
        <span className="loading loading-spinner text-accent"></span>
        <span className="loading loading-spinner text-neutral"></span>
        <span className="loading loading-spinner text-info"></span>
        <span className="loading loading-spinner text-success"></span>
        <span className="loading loading-spinner text-warning"></span>
        <span className="loading loading-spinner text-error"></span>
      </p>
    );
  if (error) return <p>Error loading app data.</p>;
  if (!app) return <p>App not found.</p>;

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
    toast.success(`Successfully installed ${title}!`, {
      duration: 3000,
      position: "top-center",
    });
    setIsInstalled(true);
  };

  const processedRatings = ratings.map((r) => ({
    ...r,
    count: Number(r.count),
  }));
  const chartData = processedRatings.reverse();

  const maxCount = chartData.reduce(
    (max, item) => Math.max(max, item.count),
    0
  );
  const referenceLinePosition = 0;
  const xAxisTicks = [0, 3000, 6000, 9000, 12000];

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
            className={`w-[200px] sm:w-[220px] md:w-[240px] h-[48px] sm:h-[52px] text-white font-semibold rounded-lg cursor-pointer mt-6 transition duration-200 
                ${
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
        <div className="bg-[#f0f3f8] rounded-xl p-4 h-[260px] sm:h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={chartData}
              layout="horizontal"
              margin={{ top: 10, right: 30, left: 20, bottom: 5 }}
              barCategoryGap="10%"
            >
              <CartesianGrid
                horizontal={true}
                vertical={false}
                stroke="#e0e0e0"
                strokeDasharray="3 3"
              />
              <XAxis
                type="number"
                tick={{ fill: "#6b7280", fontSize: 12 }}
                domain={[
                  0,
                  maxCount > xAxisTicks[xAxisTicks.length - 1]
                    ? maxCount
                    : xAxisTicks[xAxisTicks.length - 1],
                ]}
                ticks={xAxisTicks}
                tickFormatter={(value) => value.toLocaleString()}
              />
              <YAxis
                dataKey="name"
                type="category"
                tickLine={false}
                axisLine={false}
                tick={{ fill: "#4b5563", fontSize: 13, textAnchor: "end" }}
                width={70}
                interval={0}
                tickMargin={10}
              />
              <Tooltip
                cursor={{ fill: "rgba(0,0,0,0.05)" }}
                formatter={(value) => [value.toLocaleString(), "Votes"]}
              />
              <ReferenceLine
                x={referenceLinePosition}
                stroke="#dc2626"
                strokeWidth={2}
                ifOverflow="extendDomain"
              />
              <Bar
                dataKey="count"
                fill="#ff8c00"
                barSize={20}
                isAnimationActive={true}
              />
            </BarChart>
          </ResponsiveContainer>
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
