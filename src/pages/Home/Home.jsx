import React from "react";
import playImg from "../../assets/playStore.png";
import appImg from "../../assets/appImg.png";
import heroImg from "../../assets/hero.png";
const Home = () => {
  return (
    <div className="max-w-[1600px] mx-auto px-5 sm:px-8 md:px-12">
      <div className="text-center">
        <h2 className="text-[40px] sm:text-[56px] md:text-[72px] leading-tight font-semibold mt-12 sm:mt-20">
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
        <button className="btn flex items-center gap-2 py-4 px-6 sm:py-5 sm:px-8 bg-white text-black hover:bg-gray-200 rounded-xl">
          <img src={playImg} alt="Google Play" className="h-6 sm:h-7" />
          Google Play
        </button>
        <button className="btn flex items-center gap-2 py-4 px-6 sm:py-5 sm:px-8 bg-white text-black hover:bg-gray-200 rounded-xl">
          <img src={appImg} alt="App Store" className="h-6 sm:h-7" />
          App Store
        </button>
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
    </div>
  );
};

export default Home;
