"use client";

import { motion } from "framer-motion";
import projects from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="py-32">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{
            opacity: 0,

            y: 40,
          }}
          whileInView={{
            opacity: 1,

            y: 0,
          }}
          viewport={{
            once: true,
          }}
          className="text-center mb-24"
        >
          <p className="uppercase tracking-[.4em] text-orange-500 font-semibold">
            Featured Projects
          </p>

          <h2 className="font-serif text-6xl mt-6">Selected Work</h2>

          <p className="max-w-3xl mx-auto mt-8 text-zinc-600 text-xl leading-9">
            Each project represents my passion for building clean, scalable, and
            impactful software solutions.
          </p>
        </motion.div>

        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} reverse={index % 2 !== 0} />
        ))}
      </div>
    </section>
  );
}
