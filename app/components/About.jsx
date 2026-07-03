"use client";

import { motion } from "framer-motion";

import { GraduationCap, Laptop, Lightbulb } from "lucide-react";

import InfoCard from "./InfoCard";

export default function About() {
  return (
    <section id="about" className="py-32 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-8">
        {/* Heading */}

        <motion.div
          initial={{
            opacity: 0,
            y: 50,
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
            About Me
          </p>

          <h2 className="font-serif text-6xl mt-6">
            Passionate About Building Digital Experiences
          </h2>

          <p className="max-w-3xl mx-auto mt-8 text-xl text-zinc-600 leading-9 text-justify">
            Technically-inclined Computer Science students with a passion for
            building impactful projects, cleaning malware-infected systems, and
            creating innovative solutions. Skilled in programming languages, web
            development, and problem-solving, with a strong desire to learn and
            grow in the field of technology. During my childhood, I was
            constantly annoyed by malware-infected systems, which sparked my
            interest in technology and led me to pursue a career in the field. I
            am eager to contribute my skills and knowledge to make a positive
            impact in the world of technology.
          </p>
          <motion.div
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            transition={{
              delay: 0.4,
            }}
            className="mt-12"
          >
            <p className="font-serif italic text-2xl text-orange-500">
              "Keeping every project surrendered on God's hands."
            </p>
          </motion.div>
        </motion.div>
        <div className="w-32 h-[2px] bg-orange-500 mx-auto my-16 rounded-full" />
        {/* Cards */}

        <div className="grid lg:grid-cols-3 gap-8">
          <InfoCard title="Education" icon={<GraduationCap size={35} />}>
            <p>Bachelor of Science in Computer Science, 2nd Year</p>

            <br />

            <p>Mapua Malayan Colleges Mindanao</p>
          </InfoCard>

          <InfoCard title="Developer" icon={<Laptop size={35} />}>
            <p>Passionate about creating modern web and mobile applications.</p>

            <br />

            <p>
              Interested in React, Expo, Next.js, React Native, UI/UX, AI
              Integration, and scalable software.
            </p>
          </InfoCard>

          <InfoCard title="Currently Learning" icon={<Lightbulb size={35} />}>
            <p>
              Exploring machine learning, CI/CD, and fundamental cybersecurity
              concepts to enhance my skills and knowledge in the field of
              technology.
            </p>
          </InfoCard>
        </div>
      </div>
    </section>
  );
}
