"use client";

import { motion } from "framer-motion";
import { Facebook, Github, Linkedin, Mail, Download } from "lucide-react";

import contact from "../data/contact";

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-zinc-900 text-white">
      <div className="max-w-6xl mx-auto px-8 text-center">
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="uppercase tracking-[.4em] text-orange-400"
        >
          Contact
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-serif text-6xl mt-6"
        >
          Let's Build Something Great Together
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="max-w-3xl mx-auto mt-8 text-zinc-300 leading-9 text-xl"
        >
          I'm always open to collaborating on innovative projects, internships,
          freelance work, or software engineering opportunities.
        </motion.p>

        <div className="flex justify-center mt-12">
          <a
            href={`mailto:${contact.email}`}
            className="px-8 py-4 rounded-full bg-orange-500 hover:bg-orange-600 transition"
          >
            <Mail className="inline mr-2" />
            Email Me
          </a>
        </div>

        <div className="flex justify-center gap-8 mt-16">
          <a href={contact.github}>
            <Github size={30} />
          </a>

          <a href={contact.linkedin}>
            <Linkedin size={30} />
          </a>

          <a href={contact.facebook}>
            <Facebook size={30} />
          </a>

          <a href={contact.resume}>
            <Download size={30} />
          </a>
        </div>
      </div>
    </section>
  );
}
