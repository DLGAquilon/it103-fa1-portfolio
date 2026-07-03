"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import certificates from "../data/certificates";
import CertificateCard from "./CertificateCard";
import ImageModal from "./ImageModal";

export default function Certificates() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="certificates" className="py-32 bg-zinc-50">
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
            Certificates
          </p>

          <h2 className="font-serif text-6xl mt-6">
            Recognition & Achievements
          </h2>

          <p className="mt-8 max-w-3xl mx-auto text-xl text-zinc-600 leading-9">
            Academic achievements and professional certifications that reflect
            my continuous commitment to learning.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {certificates.map((certificate, index) => (
            <CertificateCard
              key={index}
              certificate={certificate}
              onClick={() => setSelected(certificate)}
            />
          ))}
        </div>

        <ImageModal
          open={selected}
          image={selected?.image}
          title={selected?.title}
          onClose={() => setSelected(null)}
        />
      </div>
    </section>
  );
}
