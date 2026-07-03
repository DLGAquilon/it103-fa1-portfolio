import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechMarquee from "./components/TechMarquee";
import About from "./components/About";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Timeline from "./components/Timeline";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import BackToTop from "./components/BackToTop";

export default function Home() {
  return (
    <>
      <ScrollProgress />

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
      
      <BackToTop />
    </>
  );
}
