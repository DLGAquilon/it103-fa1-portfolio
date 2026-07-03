"use client";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/70 border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">
        <h1 className="font-serif text-2xl font-bold">VB.</h1>

        <nav className="hidden md:flex gap-10 text-sm uppercase tracking-widest">
          <a
            href="#about"
            className=" relative after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-orange-500 after:transition-all hover:after:w-full "
          >
            About
          </a>

          <a
            href="#projects"
            className=" relative after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-orange-500 after:transition-all hover:after:w-full "
          >
            Projects
          </a>

          <a
            href="#certificates"
            className=" relative after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-orange-500 after:transition-all hover:after:w-full "
          >
            Certificates
          </a>

          <a
            href="#contact"
            className=" relative after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-orange-500 after:transition-all hover:after:w-full "
          >
            Contact
          </a>
          <a
            href="#timeline"
            className=" relative after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-orange-500 after:transition-all hover:after:w-full "
          >
            Timeline
          </a>
        </nav>
      </div>
    </header>
  );
}
