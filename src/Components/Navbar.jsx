import React, { useState, useEffect } from "react";
import logo from "../assets/warunadhna.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent shadow-md mb-20 py-6">
      <div className="flex flex-wrap items-center justify-between w-full px-10 relative">
        {/* Logo (left side) */}
        <div className=" flex items-center">
          <img className=" w-10 h-10" src={logo} alt="Logo" />
        </div>

        {/* Hamburger Button */}
        <div className="flex md:hidden">
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-300 rounded-lg hover:bg-[#262637] focus:outline-none focus:ring-2 focus:ring-gray-700"
            aria-controls="navbar-default"
            aria-expanded={isOpen ? "true" : "false"}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        {/* Navbar Links - Mobile Overlay */}
        {isOpen && (
          <div
            className="fixed inset-0 top-16 bg-[#1b1b27]/90 backdrop-blur-sm md:hidden"
            onClick={toggleMenu}
          >
            <ul className="flex flex-col p-4 space-y-4 bg-[#1b1b27] shadow-lg mx-4 mt-4 rounded-lg">
              {["home", "about", "skills", "projects"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item}`} // Link to the section by ID
                    className="block py-2 px-3 text-gray-300 rounded hover:bg-[#262637] text-center"
                    onClick={toggleMenu}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}{" "}
                    {/* Capitalize first letter */}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Desktop Menu */}
        <div className="hidden md:block md:w-auto">
          <ul className="flex md:flex-row md:space-x-8">
            {["home", "about", "skills", "projects"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`} // Link to the section by ID
                  className="block py-2 px-3 text-gray-300 hover:text-white"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}{" "}
                  {/* Capitalize first letter */}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
