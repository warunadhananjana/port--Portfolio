import React from "react";
import profileimg from "../assets/DSC1_7016.jpg";
import { motion } from "motion/react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const iconAnimation = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

function Hero() {
  return (
    <div id="home" className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap lg:flex-nowrap pt-16 mt-10">
        {" "}
        {/* Adjusted to add space at the top */}
        <div className="w-full lg:w-1/2 order-2 lg:order-1">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(1)} // Delay for text
              initial="hidden"
              animate="visible"
              className="pt-8 pb-15 text-6xl font-thin text-center md:text-start tracking-tight lg:mb-8 lg:text-8xl"
            >
              Waruna Dhananjana
            </motion.h1>

            {/* Social Media Icons with Animation */}
            <motion.div
              className="mt-4 lg:mt-1  mb-6 flex items-center justify-start gap-6 text-2xl lg:gap-6"
              variants={container(1)}
              initial="hidden"
              animate="visible"
            >
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
            </motion.div>

            <motion.span
              variants={container(1.3)} // Delay for text
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500
             to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Full Stack Developer
            </motion.span>

            <motion.p
              variants={container(1.3)} // Delay for text
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter  md:text-left"
            >
              I am an undergraduate in software engineering with a passion for
              full-stack development. Skilled in React, Node.js, and MongoDB, I
              have experience building responsive web applications and APIs. I
              am eager to contribute and learn through hands-on experience as an
              intern.
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 order-1 lg:order-2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0 }} // Image comes first with no delay
              className="w-48 h-48 rounded-full lg:w-80 lg:h-80 object-cover"
              src={profileimg}
              alt="waruna dhananjana"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
