import React from "react";
import playImg from "../../assets/playStore.png";
import appImg from "../../assets/appImg.png";
import heroImg from "../../assets/hero.png";
import { Link } from "react-router";
import AppCard from "../../components/AppsCard/AppCard";
import useApps from "../../hooks/useApps";
const Home = () => {
  const { apps } = useApps();

  const featuredApps = apps.slice(0, 8);
  return (
    <div className="max-w-[1600px] bg-[#fdfbfb] mx-auto w-full px-4 md:px-8 lg:px-12 flex-1]">
      <div className="text-center">
        <h2 className="text-[40px] sm:text-[56px] md:text-[72px] leading-tight font-semibold pt-12 sm:pt-20">
          We Build
          <br />
          <span className="bg-gradient-to-r from-[#632ee3] to-[#9f62f2] bg-clip-text text-transparent">
            Productive
          </span>{" "}
          Apps
        </h2>

        <p className="text-[#627382] mt-4 text-base sm:text-lg md:text-xl leading-relaxed px-2 sm:px-16 md:px-40">
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting.
          <br className="hidden sm:block" />
          Our goal is to turn your ideas into digital experiences that truly
          make an impact.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 my-10 sm:my-12">
        <Link
          to="https://play.google.com/store/apps?hl=es_419"
          className="btn flex items-center gap-2 py-4 px-6 sm:py-5 sm:px-8 bg-white text-black hover:bg-gray-200 rounded-xl"
        >
          <img src={playImg} alt="Google Play" className="h-6 sm:h-7" />
          Google Play
        </Link>
        <Link
          to="https://www.apple.com/app-store/"
          className="btn flex items-center gap-2 py-4 px-6 sm:py-5 sm:px-8 bg-white text-black hover:bg-gray-200 rounded-xl"
        >
          <img src={appImg} alt="App Store" className="h-6 sm:h-7" />
          App Store
        </Link>
      </div>

      <div className="flex items-center justify-center">
        <img
          className="w-[90%] sm:w-[700px] md:w-[840px] h-auto object-contain"
          src={heroImg}
          alt="Hero"
        />
      </div>

      <div className="bg-gradient-to-r from-[#632ee3] to-[#9f62f2]">
        <div className="text-white text-center py-10 sm:py-14">
          <h2 className="text-[28px] sm:text-[36px] md:text-[48px] font-semibold mb-10">
            Trusted by Millions, Built for You
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-6 justify-center items-center px-6 sm:px-12">
            <div>
              <p className="text-sm sm:text-base">Total Downloads</p>
              <h2 className="font-semibold text-[48px] sm:text-[56px] md:text-[64px]">
                29.6M
              </h2>
              <p className="text-sm sm:text-base opacity-90">
                21% more than last month
              </p>
            </div>

            <div>
              <p className="text-sm sm:text-base">Total Reviews</p>
              <h2 className="font-semibold text-[48px] sm:text-[56px] md:text-[64px]">
                906K
              </h2>
              <p className="text-sm sm:text-base opacity-90">
                46% more than last month
              </p>
            </div>

            <div>
              <p className="text-sm sm:text-base">Active Apps</p>
              <h2 className="font-semibold text-[48px] sm:text-[56px] md:text-[64px]">
                132+
              </h2>
              <p className="text-sm sm:text-base opacity-90">
                31 more will Launch
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 sm:mt-16 mb-10 sm:mb-14">
        <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-bold text-center">
          Trending Apps
        </h2>
        <p className="text-[16px] sm:text-[18px] md:text-[20px] mt-4 text-[#627382] text-center px-4 sm:px-20">
          Explore all trending apps on the market developed by us
        </p>
      </div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
          {featuredApps.map((app) => (
            <AppCard key={app.id} app={app}></AppCard>
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center">
        <Link to="/app">
          <button className="h-[48px] w-[145px] bg-gradient-to-r from-[#632ee3] to-[#9f62f2] mt-[40px] mb-[80px] text-white font-semibold cursor-pointer rounded-xl">
            Show All
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
