import React from "react";
import logo from "../assets/warunadhna.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
function Navbar() {
  return (
    <nav className=" mb-20 flex items-center justify-between py-3">
      <div className="flex flex-shrink-0">
        <img className=" mx-2 w-10" src={logo} alt="" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/waruna-dhananjana-08137b228/"
          className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-900 text-gray-400 transition duration-300 hover:bg-blue-700 hover:text-white"
        >
          <FaLinkedin />
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/warunadhananjana"
          className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-900 text-gray-400 transition duration-300 hover:bg-gray-700 hover:text-white"
        >
          <FaGithub />
        </a>

        {/* Facebook */}
        <a
          href="https://www.facebook.com/warunadhananjana"
          className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-900 text-gray-400 transition duration-300 hover:bg-blue-600 hover:text-white"
        >
          <FaFacebook />
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/warunadhananjana/"
          className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-900 text-gray-400 transition duration-300 hover:bg-pink-600 hover:text-white"
        >
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
