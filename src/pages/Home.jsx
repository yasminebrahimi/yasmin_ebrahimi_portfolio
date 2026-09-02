import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import About from "../sections/About";
import Experience from "../sections/Experience";
import Education from "../sections/Education";
import Projects from "../sections/Projects";
import Contact from "../sections/Contact";
import Hero from "../sections/Hero";

function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default Home;
