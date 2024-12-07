import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { FaFigma } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io5";
import { SiPostman } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { TbBrandTailwind } from "react-icons/tb";

import React from "react";

function Technologies() {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-4xl">Technologies</h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4 ">
          <FaReact className="text-7xl text-cyan-400 " />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4 ">
          <TbBrandNextjs className="text-7xl " />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4 ">
          {/* <FaFigma className="text-7xl text-cyan-400 " /> */}
          <img
            width="70"
            height="70"
            src="https://img.icons8.com/color/48/figma--v1.png"
            alt="figma--v1"
          />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4 ">
          <IoLogoNodejs className="text-7xl text-green-500 " />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4 ">
          <SiPostman className="text-7xl text-[#Ef5b25] " />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4 ">
          <DiMongodb className="text-7xl text-green-500 " />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          {/* <TbBrandTailwind className="text-7xl text-turquoise-400" /> */}
          <img
            width="70"
            height="70"
            src="https://img.icons8.com/color/48/tailwind_css.png"
            alt="tailwind_css"
          />
        </div>
        <h1>warunad</h1>
      </div>
    </div>
  );
}

export default Technologies;
