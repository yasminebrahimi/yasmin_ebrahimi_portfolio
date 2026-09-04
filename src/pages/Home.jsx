import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import About from "../sections/About";
import Experience from "../sections/Experience";
import Education from "../sections/Education";
import Projects from "../sections/Projects";
import Contact from "../sections/Contact";
import Hero from "../sections/Hero";

function Home() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const el = document.getElementById(hash.slice(1));
    el?.scrollIntoView({ behavior: "smooth" });
  }, [hash]);

  return (
    <div className="relative overflow-hidden">
      {/* Decorative background blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* top right, start of the site */}
        <div className="absolute -right-24 top-0 h-96 w-96 rounded-full bg-brand/25 blur-3xl" />
        {/* left, between Hero and About */}
        <div className="absolute -left-32 top-[14%] h-80 w-80 rounded-full bg-blue-400/25 blur-3xl" />
        {/* right, next to Experience */}
        <div className="absolute -right-32 top-[38%] h-96 w-96 rounded-full bg-brand/20 blur-3xl" />
        {/* left, next to Projects */}
        <div className="absolute -left-40 top-[58%] h-96 w-96 rounded-full bg-blue-300/20 blur-3xl" />
        {/* right, next to Contact - mix of purple and blue */}
        <div className="absolute -right-24 top-[80%] h-96 w-96 rounded-full bg-linear-to-br from-brand/25 to-blue-400/25 blur-3xl" />
      </div>

      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
