"use client";

import { motion } from "framer-motion";
import SkillBadge from "./SkillBadge";

export default function SkillCategory({ category }) {
  return (
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
      transition={{
        duration: 0.6,
      }}
      className="mb-16"
    >
      <h3 className="font-serif text-3xl mb-8">{category.category}</h3>

      <div className="flex flex-wrap gap-4">
        {category.items.map((skill) => (
          <SkillBadge key={skill} skill={skill} />
        ))}
      </div>
    </motion.div>
  );
}
