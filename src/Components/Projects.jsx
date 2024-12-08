import React from "react";
import { PROJECTS } from "../constants";

function Projects() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">Projects</h1>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-row lg:justify-center">
            <div className=" bg-slate-200 w-full lg:w-1/4">
              <img
                src={project.image}
                width={150}
                height={150}
                alt={project.title}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
