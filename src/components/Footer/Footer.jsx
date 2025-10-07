import React from "react";
import footerImg from "../../assets/logo.png";
import { FaFacebook, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="bg-black text-white px-6 py-10 max-w-[1600px] mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-6 mb-8 text-center sm:text-left">
        <div className="flex items-center justify-center sm:justify-start gap-2">
          <img className="h-[40px] w-[40px]" src={footerImg} alt="logo" />
          <h2 className="text-lg font-semibold">HERO.IO</h2>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-2">Social Link</h2>
          <div className="flex items-center justify-center sm:justify-start gap-3 text-2xl">
            <FaTwitterSquare className="hover:text-blue-400 cursor-pointer" />
            <FaLinkedin className="hover:text-blue-500 cursor-pointer" />
            <FaFacebook className="hover:text-blue-600 cursor-pointer" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 border-t border-gray-700 pt-8 pb-6 text-sm">
        <nav>
          <h6 className="footer-title font-semibold mb-2">Services</h6>
          <a className="block link link-hover">Branding</a>
          <a className="block link link-hover">Design</a>
          <a className="block link link-hover">Marketing</a>
          <a className="block link link-hover">Advertisement</a>
        </nav>

        <nav>
          <h6 className="footer-title font-semibold mb-2">Company</h6>
          <a className="block link link-hover">About us</a>
          <a className="block link link-hover">Contact</a>
          <a className="block link link-hover">Jobs</a>
          <a className="block link link-hover">Press kit</a>
        </nav>

        <nav>
          <h6 className="footer-title font-semibold mb-2">Legal</h6>
          <a className="block link link-hover">Terms of use</a>
          <a className="block link link-hover">Privacy policy</a>
          <a className="block link link-hover">Cookie policy</a>
        </nav>

        <nav>
          <h6 className="footer-title font-semibold mb-2">Social</h6>
          <a className="block link link-hover">Twitter</a>
          <a className="block link link-hover">Instagram</a>
          <a className="block link link-hover">Facebook</a>
          <a className="block link link-hover">GitHub</a>
        </nav>

        <nav>
          <h6 className="footer-title font-semibold mb-2">Explore</h6>
          <a className="block link link-hover">Features</a>
          <a className="block link link-hover">Enterprise</a>
          <a className="block link link-hover">Security</a>
          <a className="block link link-hover">Pricing</a>
        </nav>

        <nav>
          <h6 className="footer-title font-semibold mb-2">Apps</h6>
          <a className="block link link-hover">Mac</a>
          <a className="block link link-hover">Windows</a>
          <a className="block link link-hover">iPhone</a>
          <a className="block link link-hover">Android</a>
        </nav>
      </div>

      <div className="flex justify-center items-center mt-6 text-gray-400 text-sm">
        © 2025 HERO.IO — All rights reserved
      </div>
    </div>
  );
};

export default Footer;
