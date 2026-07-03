"use client";

import Marquee from "react-fast-marquee";
import technologies from "../data/technologies";

export default function TechMarquee() {
  return (
    <section className="relative overflow-hidden border-y border-zinc-200 bg-white py-8">
      {/* Left Fade */}

      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-40 bg-gradient-to-r from-white to-transparent" />

      {/* Right Fade */}

      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-40 bg-gradient-to-l from-white to-transparent" />

      <Marquee speed={40} gradient={false} pauseOnHover>
        {technologies.map((tech, index) => (
          <div key={index} className="mx-8 flex items-center">
            <span className="text-zinc-700 text-lg font-semibold tracking-wide hover:text-orange-500 transition">
              {tech}
            </span>

            <span className="ml-8 text-orange-500 text-xl">•</span>
          </div>
        ))}
      </Marquee>
    </section>
  );
}
