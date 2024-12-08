import React from "react";
import { PROJECTS } from "../constants";

function Projects() {
  return (
    <div className="border-b border-neutral-900 pb-12 text-white">
      <h1 className="my-12 text-center text-4xl font-bold">Projects</h1>
      <div className="flex flex-col items-center gap-8">
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="flex w-full max-w-4xl flex-col gap-6 lg:flex-row lg:items-center"
          >
            {/* Project Image */}
            <div className="w-full lg:w-1/4 flex justify-start lg:justify-center">
              <img
                src={project.image}
                alt={project.title}
                className="rounded-lg object-cover shadow-lg w-40 h-40"
              />
            </div>

            {/* Project Details */}
            <div className="w-full lg:w-3/4">
              <h6 className="mb-2 text-2xl font-semibold text-purple-400">
                {project.title}
              </h6>
              <p className="mb-4 text-neutral-300">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="rounded bg-purple-900 px-3 py-1 text-sm font-medium text-white shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
