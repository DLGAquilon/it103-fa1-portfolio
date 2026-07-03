import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechMarquee from "./components/TechMarquee";
import About from "./components/About";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Timeline from "./components/timeline/Timeline";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <TechMarquee />

      <About />

      <Projects />

      <Certificates />

      <Timeline />

      <Skills />

      <Contact />

      <Footer />
    </>
  );
}
