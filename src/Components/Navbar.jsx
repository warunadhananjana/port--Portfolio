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
        <FaLinkedin />
        <FaGithub />
        <FaFacebook />
        <FaInstagram />
      </div>
    </nav>
  );
}

export default Navbar;
