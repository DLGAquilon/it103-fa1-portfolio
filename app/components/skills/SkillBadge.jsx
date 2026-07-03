"use client";

import { motion } from "framer-motion";

export default function SkillBadge({ skill }) {
  return (
    <motion.div
      whileHover={{
        y: -6,
        scale: 1.05,
        rotate: [-1, 1, 0],
      }}
      whileTap={{
        scale: 0.96,
      }}
      className="
        px-5
        py-3
        rounded-full
        border
        border-zinc-300
        bg-white
        text-zinc-700
        shadow-sm
        cursor-default
        hover:border-orange-400
        hover:text-orange-500
        hover:shadow-lg
        transition-all
      "
    >
      {skill}
    </motion.div>
  );
}
