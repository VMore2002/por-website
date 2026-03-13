import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import TechStackSection from "./components/TechStackSection";
import Projects from "./components/Projects";
import Architecture from "./components/Architecture";
import Certifications from "./components/Certifications";
import TrainingHighlights from "./components/TrainingHighlights";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-[#f5f7fb] text-[#111827]">
      <Navbar />
      <main>
        <section id="hero" className="pt-28 pb-20">
          <Hero />
        </section>
        <section id="about" className="py-12 md:py-20">
          <About />
        </section>
        <section id="skills" className="py-12 md:py-20">
          <Skills />
        </section>
        <section id="tech-stack" className="py-12 md:py-20">
          <TechStackSection />
        </section>
        <section id="projects" className="py-12 md:py-20">
          <Projects />
        </section>
        <section id="architecture" className="py-12 md:py-20">
          <Architecture />
        </section>
        <section id="certifications" className="py-12 md:py-20">
          <Certifications />
        </section>
        <section id="training" className="py-12 md:py-20">
          <TrainingHighlights />
        </section>
        <section id="blog" className="py-12 md:py-20">
          <Blog />
        </section>
        <section id="experience" className="py-12 md:py-20">
          <Experience />
        </section>
        <section id="education" className="py-12 md:py-20">
          <Education />
        </section>
        <section id="contact" className="py-12 md:py-20 pb-24">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;

