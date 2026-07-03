"use client";

import { motion } from "framer-motion";
import timeline from "../data/timeline";
import TimelineItem from "./timeline/TimelineItem";
import TimelineLine from "./timeline/TimelineLine";

export default function Timeline() {
  return (
    <section id="timeline" className="relative py-32">
      <div className="max-w-6xl mx-auto px-8">
        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <p className="uppercase tracking-[.4em] text-orange-500 font-semibold">
            Development Journey
          </p>

          <h2 className="font-serif text-6xl mt-6">
            My Journey as a Developer
          </h2>
        </motion.div>

        <div className="relative">
          <TimelineLine />

          <div className="space-y-24">
            {timeline.map((item, index) => (
              <TimelineItem
                key={item.id}
                item={item}
                reverse={index % 2 !== 0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
