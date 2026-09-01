import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import About from "../sections/About";
import Experience from "../sections/Experience";
import Education from "../sections/Education";
import Projects from "../sections/Projects";
import Contact from "../sections/Contact";

function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <About />
        <Experience />
        <Education />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default Home;
