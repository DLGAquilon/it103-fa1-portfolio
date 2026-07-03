"use client";

import { motion } from "framer-motion";

export default function TimelineDot() {
  return (
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="relative z-20"
    >
      <div className="w-6 h-6 rounded-full bg-orange-500 border-4 border-white shadow-lg" />
    </motion.div>
  );
}