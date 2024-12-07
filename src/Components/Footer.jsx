import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Footer Logo/Name */}
        <div className="text-lg font-bold">Waruna Dhananjana</div>

        {/* Navigation Links */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#home" className="text-gray-400 hover:text-white">
            Home
          </a>
          <a href="#about" className="text-gray-400 hover:text-white">
            About
          </a>
          <a href="#contact" className="text-gray-400 hover:text-white">
            Contact
          </a>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            <i className="fab fa-facebook"></i>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
