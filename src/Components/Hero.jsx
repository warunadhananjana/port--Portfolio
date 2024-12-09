import React from "react";
import profileimg from "../assets/DSC1_7016.jpg";
import { motion } from "motion/react";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

function Hero() {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap lg:flex-nowrap">
        <div className="w-full lg:w-1/2 order-2 lg:order-1">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:mb-16 lg:text-8xl"
            >
              Waruna Dhananjana
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500
             to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Full Stack Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
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
              transition={{ duration: 1, delay: 1.2 }}
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
