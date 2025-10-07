import React, { useState } from "react";
import logoImg from "../../assets/logo.png";
import { Link } from "react-router";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  const activeClass = "border-b-3 border-purple-600";

  const [active, setActive] = useState("home");

  return (
    <div className="max-w-[1600px] mx-auto">
      <div className="navbar bg-base-100 shadow-sm lg:px-15">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-4 space-y-2 shadow"
            >
              <Link
                className={`font-semibold ${
                  active === "home" ? activeClass : ""
                }`}
                to="/"
                onClick={() => setActive("home")}
              >
                Home
              </Link>
              <Link
                className={`font-semibold ${
                  active === "app" ? activeClass : ""
                }`}
                to="/app"
                onClick={() => setActive("app")}
              >
                App
              </Link>
              <Link
                className={`font-semibold ${
                  active === "installation" ? activeClass : ""
                }`}
                to="/installation"
                onClick={() => setActive("installation")}
              >
                Installation
              </Link>
            </ul>
          </div>

          <Link className="flex justify-center items-center gap-2 text-xl font-bold bg-gradient-to-r from-[#632ee3]  to-[#9f62f2] bg-clip-text text-transparent">
            <img className="h-[40px] w-[40px]" src={logoImg} alt="" />
            HERO.IO
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal space-x-3">
            <Link
              to="/"
              className={`font-semibold ${
                active === "home" ? activeClass : ""
              }`}
              onClick={() => setActive("home")}
            >
              Home
            </Link>
            <Link
              className={`font-semibold ${active === "app" ? activeClass : ""}`}
              to="/app"
              onClick={() => setActive("app")}
            >
              App
            </Link>
            <Link
              className={`font-semibold ${
                active === "installation" ? activeClass : ""
              }`}
              to="/installation"
              onClick={() => setActive("installation")}
            >
              Installation
            </Link>
          </ul>
        </div>

        <div className="navbar-end">
          <Link
            to="https://github.com/shanto522"
            className="btn text-white bg-gradient-to-r from-[#632ee3] to-[#9f62f2]"
          >
            <FaGithub /> Contribute
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
