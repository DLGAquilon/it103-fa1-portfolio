"use client";

import { motion } from "framer-motion";

export default function CertificateCard({
  certificate,

  onClick,
}) {
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
      whileHover={{
        y: -10,
      }}
      transition={{
        duration: 0.5,
      }}
      onClick={onClick}
      className="cursor-pointer rounded-3xl overflow-hidden bg-white border border-zinc-200 shadow-sm hover:shadow-xl"
    >
      <img
        src={certificate.image}
        alt={certificate.title}
        className="w-full aspect-[4/3] object-cover transition duration-500 hover:scale-105"
      />

      <div className="p-8">
        <h3 className="text-2xl font-bold">{certificate.title}</h3>

        <p className="text-orange-500 mt-2">{certificate.issuer}</p>

        <p className="text-zinc-500 mt-2">{certificate.year}</p>

        <p className="mt-6 text-zinc-600 leading-7">
          {certificate.description}
        </p>
      </div>
    </motion.div>
  );
}
