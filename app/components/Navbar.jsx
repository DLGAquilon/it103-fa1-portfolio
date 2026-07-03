"use client";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/70 border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">
        <h1 className="font-serif text-2xl font-bold">VB.</h1>

        <nav className="hidden md:flex gap-10 text-sm uppercase tracking-widest">
          <a href="#about" className="hover:text-orange-500 transition">
            About
          </a>

          <a href="#projects" className="hover:text-orange-500 transition">
            Projects
          </a>

          <a href="#certificates" className="hover:text-orange-500 transition">
            Certificates
          </a>

          <a href="#contact" className="hover:text-orange-500 transition">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
