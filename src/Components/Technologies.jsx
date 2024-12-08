import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { FaFigma } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io5";
import { SiPostman } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { TbBrandTailwind } from "react-icons/tb";
import { motion } from "motion/react";
import React from "react";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10], // Corrected the negative value
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity, // Corrected the typo from 'repet' to 'repeat'
      repeatType: "reverse", // Corrected the typo from 'repetType' to 'repeatType'
    },
  },
});
function Technologies() {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 1, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl font-bold"
      >
        Technologies
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={iconVariants(2.5)} // Passes the animation variants with a duration of 2.5 seconds
          initial="initial" // Sets the initial state (as defined in `iconVariants`)
          animate="animate" // Specifies the animation state to play (as defined in `iconVariants`)
          className="rounded-2xl border-4 border-neutral-800 p-4" // Applies styling
        >
          <FaReact className="text-7xl text-cyan-400 " />
        </motion.div>
        <motion.div
          variants={iconVariants(3)} // Passes the animation variants with a duration of 2.5 seconds
          initial="initial" // Sets the initial state (as defined in `iconVariants`)
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 "
        >
          <TbBrandNextjs className="text-7xl " />
        </motion.div>
        <motion.div
          variants={iconVariants(5)} // Passes the animation variants with a duration of 2.5 seconds
          initial="initial" // Sets the initial state (as defined in `iconVariants`)
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 "
        >
          {/* <FaFigma className="text-7xl text-cyan-400 " /> */}
          <img
            width="70"
            height="70"
            src="https://img.icons8.com/color/48/figma--v1.png"
            alt="figma--v1"
          />
        </motion.div>
        <motion.div
          variants={iconVariants(2)} // Passes the animation variants with a duration of 2.5 seconds
          initial="initial" // Sets the initial state (as defined in `iconVariants`)
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 "
        >
          <IoLogoNodejs className="text-7xl text-green-500 " />
        </motion.div>
        <motion.div
          variants={iconVariants(6)} // Passes the animation variants with a duration of 2.5 seconds
          initial="initial" // Sets the initial state (as defined in `iconVariants`)
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 "
        >
          <SiPostman className="text-7xl text-[#Ef5b25] " />
        </motion.div>
        <motion.div
          variants={iconVariants(4)} // Passes the animation variants with a duration of 2.5 seconds
          initial="initial" // Sets the initial state (as defined in `iconVariants`)
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 "
        >
          <DiMongodb className="text-7xl text-green-500 " />
        </motion.div>
        <motion.div
          variants={iconVariants(6)} // Passes the animation variants with a duration of 2.5 seconds
          initial="initial" // Sets the initial state (as defined in `iconVariants`)
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          {/* <TbBrandTailwind className="text-7xl text-turquoise-400" /> */}
          <img
            width="70"
            height="70"
            src="https://img.icons8.com/color/48/tailwind_css.png"
            alt="tailwind_css"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Technologies;
