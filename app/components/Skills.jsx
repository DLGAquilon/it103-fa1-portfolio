"use client";

import { motion } from "framer-motion";
import skills from "../data/skills";
import SkillCategory from "./skills/SkillCategory";

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-32 bg-zinc-50"
    >
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
            Skills
          </p>

          <h2 className="font-serif text-6xl mt-6">
            Technologies
            <br />
            I Work With
          </h2>

          <p className="mt-8 max-w-3xl mx-auto text-xl text-zinc-600 leading-9">
            A collection of technologies, frameworks, and tools
            that I use to design, develop, and deploy modern
            software applications.
          </p>
        </motion.div>

        {skills.map((category) => (
          <SkillCategory
            key={category.category}
            category={category}
          />
        ))}

      </div>
    </section>
  );
}