"use client";

import { motion } from "framer-motion";

export default function TimelineCard({ item, left }) {
  return (
    <div
      className={`grid md:grid-cols-2 gap-12 items-center relative ${
        left ? "" : "md:[&>*:first-child]:order-2"
      }`}
    >
      {/* Text */}

      <motion.div
        initial={{
          opacity: 0,
          x: left ? -80 : 80,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.7,
        }}
        className="bg-white rounded-3xl border border-zinc-200 p-8 shadow-sm hover:shadow-xl transition"
      >
        <p className="text-orange-500 uppercase tracking-widest text-sm font-bold">
          {item.year}
        </p>

        <h3 className="font-serif text-3xl mt-4">{item.title}</h3>

        <p className="mt-6 text-zinc-600 leading-8">{item.description}</p>
      </motion.div>

      {/* Timeline */}

      <div className="hidden md:flex justify-center relative h-full">
        <div
          className=" absolute w-[3px] rounded-full bg-gradient-to-b from-orange-400 via-orange-300 to-orange-100 h-full "/>

        <motion.div
          initial={{
            scale: 0,
          }}
          whileInView={{
            scale: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.4,
          }}
          className="w-7 h-7 rounded-full bg-orange-500 border-4 border-white shadow-xl z-10 mt-12"
        />
      </div>
    </div>
  );
}
