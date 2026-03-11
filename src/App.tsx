import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Architecture from "./components/Architecture";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Blog from "./components/Blog";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 text-slate-50">
      <Navbar />
      <main>
        <section id="hero" className="pt-24 pb-16">
          <Hero />
        </section>
        <section id="about" className="py-16">
          <About />
        </section>
        <section id="skills" className="py-16">
          <Skills />
        </section>
        <section id="projects" className="py-16">
          <Projects />
        </section>
        <section id="architecture" className="py-16">
          <Architecture />
        </section>
        <section id="experience" className="py-16">
          <Experience />
        </section>
        <section id="education" className="py-16">
          <Education />
        </section>
        <section id="blog" className="py-16">
          <Blog />
        </section>
        <section id="contact" className="py-16 pb-24">
          <Contact />
        </section>
      </main>
      <footer className="border-t border-slate-800 py-6 text-center text-xs sm:text-sm text-slate-400">
        <p>© {new Date().getFullYear()} Vipul More. All rights reserved.</p>
        <p className="mt-1 text-[11px] text-slate-500">
          Built with React, Vite, TypeScript, Tailwind CSS, Framer Motion, and
          React Icons.
        </p>
      </footer>
    </div>
  );
}

export default App;

