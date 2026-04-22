"use client";

import { useState } from "react";
import {
  Sun,
  Moon,
  ExternalLink,
  Award,
  Code,
  GraduationCap,
} from "lucide-react";

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-background text-foreground px-4 py-8 md:px-32 md:py-16 transition-colors duration-500 font-sans">
        <div className="sticky top-4 z-50 flex justify-end max-w-5xl mx-auto mb-8 pointer-events-none">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="pointer-events-auto group flex items-center gap-2 px-5 py-3 md:py-2.5 text-xs md:text-sm font-bold tracking-widest uppercase border-2 border-zinc-200 dark:border-zinc-800 rounded-full hover:border-accent-orange transition-all duration-300 shadow-xl bg-background touch-manipulation active:scale-95"
          >
            {darkMode ? (
              <>
                <Sun
                  size={20}
                  className="text-accent-orange animate-spin-slow"
                />
                <span>Light Mode</span>
              </>
            ) : (
              <>
                <Moon
                  size={20}
                  className="text-zinc-500 group-hover:text-accent-orange"
                />
                <span>Dark Mode</span>
              </>
            )}
          </button>
        </div>

        {/* Hero Header */}
        <header className="flex flex-col items-center mb-16 md:mb-24 text-center">
          <div className="relative p-1.5 md:p-2 rounded-full bg-accent-orange mb-6 md:mb-8 shadow-2xl shadow-orange-500/30">
            <img
              src="/images/formal-image.jpg"
              alt="Vin Benjamin J. Belandres"
              className="w-40 h-40 md:w-72 md:h-72 rounded-full object-cover border-4 md:border-8 border-background"
            />
          </div>
          <h1 className="font-serif text-3xl md:text-7xl font-bold mb-3 md:mb-4 tracking-tight">
            Belandres, Vin Benjamin J.
          </h1>
          <p className="text-accent-orange font-bold tracking-[0.15em] md:tracking-[0.25em] uppercase text-sm md:text-xl flex items-center gap-2">
            <GraduationCap className="w-5 h-5 md:w-6 md:h-6" />
            BS Computer Science - Year 2
          </p>
        </header>

        <main className="max-w-5xl mx-auto flex flex-col gap-10 md:gap-16">
          {/* 1. Achievements Section */}
          <section className="p-6 md:p-12 rounded-2xl md:rounded-3xl border shadow-2xl border-emerald-100 dark:border-emerald-900/30 bg-gradient-to-br from-background via-background to-accent-emerald/10">
            <h2 className="font-serif text-3xl md:text-5xl mb-6 md:mb-8 flex items-center gap-3 md:gap-4">
              <span className="w-1.5 md:w-2.5 h-8 md:h-12 bg-accent-emerald rounded-full"></span>
              Achievements
            </h2>
            <p className="text-lg md:text-2xl opacity-70 italic mb-6 md:mb-10 leading-relaxed">
              "My academic journey has been a continuous pursuit of excellence."
            </p>
            <ul className="space-y-6 md:space-y-10">
              <li className="flex gap-4 items-start">
                <Award
                  className="text-accent-emerald shrink-0 mt-1"
                  size={28}
                />
                <div className="flex flex-col">
                  <span className="text-xl md:text-3xl font-bold">
                    Java IT Specialist
                  </span>
                  <span className="text-base md:text-xl text-accent-emerald font-bold">
                    2025
                  </span>
                </div>
              </li>
              <li className="flex gap-4 items-start opacity-90">
                <Award className="text-zinc-400 shrink-0 mt-1" size={28} />
                <div className="flex flex-col">
                  <span className="text-xl md:text-3xl font-semibold">
                    Dean's Lister
                  </span>
                  <span className="text-base md:text-xl opacity-50 italic">
                    S.Y 2024-2025
                  </span>
                </div>
              </li>
              <li className="flex gap-4 items-start opacity-90">
                <Award className="text-zinc-400 shrink-0 mt-1" size={28} />
                <div className="flex flex-col">
                  <span className="text-xl md:text-3xl font-semibold">
                    With Honors - Grade 12
                  </span>
                  <span className="text-base md:text-xl opacity-50 italic">
                    S.Y 2023-2024
                  </span>
                </div>
              </li>
            </ul>
          </section>

          {/* 2. Projects Section */}
          <section className="p-6 md:p-12 rounded-2xl md:rounded-3xl border shadow-2xl border-orange-100 dark:border-orange-900/20 bg-gradient-to-tr from-background via-background to-accent-orange/10">
            <h2 className="font-serif text-3xl md:text-5xl mb-6 md:mb-8 flex items-center gap-4">
              <Code size={40} className="text-accent-orange" />
              Selected Projects
            </h2>
            <div className="space-y-8 md:space-y-12">
              {[
                {
                  title: "AlagaLink",
                  body: "AI-assisted remote triage system used to optimize wait times.",
                  status: "Completed",
                  highlight: true,
                },
                {
                  title: "CareNest",
                  body: "A home for the aged general management system replacing physical records.",
                  status: "Completed",
                  highlight: true,
                },
                {
                  title: "PathFinder",
                  body: "Pathfinding web app implementing A* and Dijkstra's Algorithm.",
                  status: "In Development",
                },
                {
                  title: "Project PlastiCycle",
                  body: "AI-assisted Plastic deposit and analytics platform for MMCM.",
                  status: "In Development",
                },
                {
                  title: "Eco-Lens",
                  body: "Unified Real-Time Environmental Metric Dashboard using Next.js and REST APIs.",
                },
                {
                  title: "TechnoHub",
                  body: "C# based POS System for PC Peripherals.",
                },
                {
                  title: "BancLite",
                  body: "Offline Banking Simulation app in using Java.",
                },
                {
                  title: "FilipiKnows",
                  body: "A C++ Console-based Quiz Game about everything Filipino. ",
                },
              ].map((proj, i) => (
                <div
                  key={i}
                  className="group border-l-2 border-transparent hover:border-accent-orange pl-4 transition-all"
                >
                  <div className="flex flex-wrap items-center gap-3">
                    <h3
                      className={`text-xl md:text-3xl font-bold ${proj.highlight ? "text-accent-orange" : "opacity-90"}`}
                    >
                      {proj.title}
                    </h3>
                    {proj.status && (
                      <span className="px-3 py-1 text-[10px] md:text-xs font-bold uppercase tracking-widest bg-orange-100 text-orange-700 dark:bg-orange-950 dark:text-orange-300 rounded-full animate-pulse">
                        {proj.status}
                      </span>
                    )}
                  </div>
                  <p className="text-base md:text-xl opacity-60 mt-2 md:mt-3 leading-relaxed">
                    {proj.body}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* 3. Summative Assessments Section */}
          <section className="p-6 md:p-12 rounded-2xl md:rounded-3xl bg-zinc-950 text-white dark:bg-zinc-900/40 dark:border dark:border-zinc-800 shadow-2xl">
            <div className="mb-10">
              <h2 className="font-serif text-3xl md:text-5xl mb-4">
                IT103 Assessments
              </h2>
              <div className="w-20 h-1 bg-accent-orange rounded-full"></div>
            </div>

            <a
              href="https://eco-lens-country-sustainability-das.vercel.app"
              target="_blank"
              className="block p-6 md:p-8 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-accent-orange transition-all group mb-12"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="text-accent-orange text-xs md:text-sm font-bold uppercase tracking-[0.2em]">
                  Summative 1
                </span>
                <ExternalLink
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                  size={20}
                />
              </div>
              <h3 className="text-2xl md:text-4xl font-bold mb-4 group-hover:text-orange-400 transition-colors">
                EcoLens: Global Environmental Monitoring
              </h3>
              <p className="text-zinc-400 text-base md:text-xl mb-6">
                The definitive version of the sustainability dashboard, fully
                deployed.
              </p>
              <span className="inline-flex items-center gap-2 text-accent-emerald font-bold uppercase tracking-widest text-xs md:text-sm">
                View Live Application →
              </span>
            </a>
            <a
              href="https://alagalink-ai-assisted-remote-triage.vercel.app"
              target="_blank"
              className="block p-6 md:p-8 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-accent-orange transition-all group mb-12"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="text-accent-orange text-xs md:text-sm font-bold uppercase tracking-[0.2em]">
                  Summative 2
                </span>
                <ExternalLink
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                  size={20}
                />
              </div>
              <h3 className="text-2xl md:text-4xl font-bold mb-4 group-hover:text-orange-400 transition-colors">
                AlagaLink: AI-Assisted Remote Triage System
              </h3>
              <p className="text-zinc-400 text-base md:text-xl mb-6">
                A web application that provides an AI-assisted remote triage
                system for medical professionals.
              </p>
              <span className="inline-flex items-center gap-2 text-accent-emerald font-bold uppercase tracking-widest text-xs md:text-sm">
                View Live Application →
              </span>
            </a>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
              {[
                {
                  label: "FA2",
                  title: "GreenSense",
                  url: "https://dlgaquilon.github.io/it103-fa2-greensense-landing-page/",
                },
                {
                  label: "FA3",
                  title: "Machine Problems",
                  url: "https://dlgaquilon.github.io/IT103_FA3/",
                },
                {
                  label: "FA4",
                  title: "Tailwind Blog",
                  url: "https://it103-fa4-4px7m2wo7-dlgaquilons-projects.vercel.app/",
                },
                {
                  label: "FA5",
                  title: "The Cozy Corner",
                  url: "https://the-cozy-corner-by-belandres.vercel.app/",
                },
                {
                  label: "FA6",
                  title: "PokeAPI Demo",
                  url: "https://restapi-pokedemo-belandres.vercel.app/",
                },
              ].map((item, idx) => (
                <a
                  key={idx}
                  href={item.url}
                  target="_blank"
                  className="group flex flex-col gap-2"
                >
                  <span className="text-zinc-500 text-[10px] md:text-xs font-black uppercase tracking-widest">
                    {item.label}
                  </span>
                  <span className="text-lg md:text-xl font-bold text-zinc-300 group-hover:text-accent-emerald transition-colors underline decoration-zinc-800 group-hover:decoration-accent-emerald underline-offset-8">
                    {item.title}
                  </span>
                </a>
              ))}
            </div>
          </section>

          {/* 4. Other Projects Section */}
          <section className="p-6 md:p-12 rounded-2xl md:rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/20">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <h2 className="font-serif text-3xl md:text-4xl mb-2">
                  Other Projects
                </h2>
                <p className="text-base md:text-lg opacity-60">
                  Explore my complete repository of academic exercises,
                  experiments, and source code.
                </p>
              </div>
              <a
                href="https://github.com/DLGAquilon/CareNest_Project.git"
                target="_blank"
                className="block p-6 md:p-8 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-accent-orange transition-all group mb-12"
              >
                <div className="flex justify-between items-start mb-4">
                  <span className="text-accent-orange text-xs md:text-sm font-bold uppercase tracking-[0.2em]">
                    CS107 - Information Management Final Project
                  </span>
                  <ExternalLink
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                    size={20}
                  />
                </div>
                <h3 className="text-2xl md:text-4xl font-bold mb-4 group-hover:text-orange-400 transition-colors">
                  CareNest: Integrated Residential Eldercare Management System
                </h3>
                <p className="text-zinc-400 text-base md:text-xl mb-6">
                  A mobile application designed to streamline the management of residential eldercare facilities, replacing traditional paper-based records with a digital solution for improved efficiency and care quality.
                </p>
                <span className="inline-flex items-center gap-2 text-accent-emerald font-bold uppercase tracking-widest text-xs md:text-sm">
                  View GitHub Repository →
                </span>
              </a>
            </div>
          </section>
        </main>

        <footer className="mt-20 text-center py-10 border-t border-zinc-100 dark:border-zinc-900">
          <p className="opacity-40 text-xs md:text-sm uppercase tracking-widest font-bold">
            © 2026 Vin Benjamin Belandres • Portfolio
          </p>
        </footer>
      </div>
    </div>
  );
}
