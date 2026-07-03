"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}

      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-orange-300 rounded-full blur-[150px] opacity-15" />

        <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-300 rounded-full blur-[180px] opacity-20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-20 items-center">
        {/* Left */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="uppercase tracking-[.4em] text-orange-500 font-semibold text-sm">
            Software Engineer
          </span>

          <h1 className="font-serif text-6xl lg:text-8xl mt-5 leading-tight">
            Vin Benjamin
            <br />
            Belandres
          </h1>

          <p className="mt-8 text-xl text-zinc-600 leading-9 max-w-xl">
            Computer Science student passionate about building beautiful digital
            products, scalable applications, and solving real-world problems
            through software.
          </p>

          <div className="flex gap-5 mt-10">
            <a
              href="#projects"
              className="px-8 py-4 rounded-full bg-orange-500 text-white hover:-translate-y-1 hover:shadow-xl transition-all duration-300 "
            >
              View Projects
            </a>

            <a
              href="/resume.pdf"
              className="px-8 py-4 rounded-full border border-zinc-300 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 "
            >
              Download Resume
            </a>
          </div>
        </motion.div>

        {/* Right */}

        <motion.div
          animate={{
            y: [0, -12, 0],
          }}
          transition={{
            duration: 5,

            repeat: Infinity,

            ease: "easeInOut",
          }}
          initial={{
            opacity: 0,

            scale: 0.8,
          }}
          whileInView={{
            opacity: 1,

            scale: 1,
          }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-orange-300 blur-3xl opacity-15" />

            <img
              src="/images/formal-image.jpg"
              alt="Profile"
              className="relative w-[420px] h-[420px] rounded-full object-cover border-8 border-white shadow-2xl"
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll */}

      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{
          repeat: Infinity,

          duration: 2,
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <p className="text-xs uppercase tracking-[.3em] text-zinc-500 mb-2 text-center">
          Scroll
        </p>

        <ArrowDown className="mx-auto text-orange-500" size={30} />
      </motion.div>
    </section>
  );
}
