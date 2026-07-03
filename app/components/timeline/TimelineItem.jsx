"use client";

import { motion } from "framer-motion";
import TimelineDot from "./TimelineDot";

export default function TimelineItem({ item, reverse }) {
  return (
    <div
      className={`grid lg:grid-cols-2 gap-16 items-center ${
        reverse ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      <motion.div
        initial={{
          opacity: 0,
          x: reverse ? 80 : -80,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm hover:shadow-xl transition-all"
      >
        <span className="text-orange-500 uppercase tracking-[.3em] text-xs font-semibold">
          {item.subtitle}
        </span>

        <h3 className="font-serif text-3xl mt-3">{item.title}</h3>

        <p className="text-sm text-zinc-500 mt-2">{item.year}</p>

        <p className="mt-6 text-zinc-600 leading-8">{item.description}</p>
      </motion.div>

      <div className="hidden lg:flex justify-center">
        <TimelineDot />
      </div>
    </div>
  );
}
