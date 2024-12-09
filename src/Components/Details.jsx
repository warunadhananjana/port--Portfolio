import aboutImg from "../assets/VR FOC SUSL-99.jpg";
import { ABOUT_TEXT } from "../constants/index";
import React from "react";
import { motion } from "motion/react";

function Details() {
  return (
    <div id="about" className="border-b border-neutral-900 pd-4">
      <h1 className=" my-20 text-center  text-4xl font-bold">
        About
        <span className="text-neutral-500 ml-2 font-bold"> Me</span>
      </h1>
      <div className="flex flex-wrap items-start">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <img className="rounded-2xl" src={aboutImg} alt="about"></img>
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2  "
        >
          <div className="flex justify-center  lg:justify-start">
            <p className="my-2 max-w-xl py-6">{ABOUT_TEXT}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Details;
