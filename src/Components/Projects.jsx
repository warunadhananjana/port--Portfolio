import React from "react";
import { PROJECTS } from "../constants";
import { motion } from "motion/react";
function Projects() {
  return (
    <div className="border-b border-neutral-900 pb-12 text-white">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-12 text-center text-4xl font-bold"
      >
        Projects
      </motion.h1>
      <div className="flex flex-col items-center gap-8">
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="flex w-full max-w-4xl flex-col gap-6 lg:flex-row lg:items-center"
          >
            {/* Project Image */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4 flex justify-start lg:justify-center"
            >
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-lg object-cover shadow-lg w-40 h-40"
                />
              </a>
            </motion.div>

            {/* Project Details */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-3/4"
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-purple-300 transition"
              >
                <h6 className="mb-2 text-2xl font-semibold text-purple-400">
                  {project.title}
                </h6>
              </a>
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
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
