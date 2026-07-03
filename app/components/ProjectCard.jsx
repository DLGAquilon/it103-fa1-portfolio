"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

export default function ProjectCard({
  title,
  description,
  image,
  github,
  demo,
  technologies,
  status,
  reverse = false,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -8 }}
      className={`grid lg:grid-cols-2 gap-12 items-center py-20 ${
        reverse ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      {/* Screenshot */}

      <div className="group overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-100 shadow-sm">
        <img
          src={image}
          alt={title}
          className="w-full aspect-video object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}

      <div>
        <span className="inline-flex px-4 py-2 rounded-full bg-orange-100 text-orange-600 text-xs uppercase tracking-widest font-bold">
          {status}
        </span>

        <h3 className="font-serif text-5xl mt-6">{title}</h3>

        <p className="mt-6 text-zinc-600 leading-8 text-lg">{description}</p>

        {/* Tech */}

        <div className="flex flex-wrap gap-3 mt-8">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 rounded-full border border-zinc-300 text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}

        <div className="flex gap-4 mt-10">
          <a
            href={github}
            target="_blank"
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-zinc-900 text-white hover:bg-orange-500 transition"
          >
            <Github size={18} />
            GitHub
          </a>

          <a
            href={demo}
            target="_blank"
            className="flex items-center gap-2 px-6 py-3 rounded-full border border-zinc-300 hover:bg-zinc-100"
          >
            <ExternalLink size={18} />
            Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
}
