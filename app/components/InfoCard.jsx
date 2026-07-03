"use client";

import { motion } from "framer-motion";

export default function InfoCard({ icon, title, children }) {
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
      whileHover={{
        y: -8,
      }}
      className="
            rounded-3xl
            border
            border-zinc-200
            bg-white
            p-8
            shadow-sm
            hover:shadow-xl
            transition-all
            "
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="text-orange-500">{icon}</div>

        <h3 className="text-2xl font-bold">{title}</h3>
      </div>

      <div className="text-zinc-600 leading-8">{children}</div>
    </motion.div>
  );
}
