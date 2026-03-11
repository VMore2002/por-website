const sections = [
  { id: "hero", label: "Home" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "architecture", label: "Architecture" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "blog", label: "Blog" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur">
      <nav className="section-container flex items-center justify-between py-3">
        <button
          onClick={() => handleScroll("hero")}
          className="text-sm font-semibold tracking-tight text-slate-50"
        >
          Vipul <span className="text-primary-500">More</span>
        </button>
        <div className="hidden md:flex items-center gap-6 text-sm text-slate-300">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => handleScroll(section.id)}
              className="hover:text-primary-400 transition-colors"
            >
              {section.label}
            </button>
          ))}
        </div>
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            handleScroll("contact");
          }}
          className="rounded-full border border-primary-500/60 bg-primary-500/10 px-4 py-1.5 text-xs font-medium text-primary-300 shadow-glow-primary hover:bg-primary-500/20 transition"
        >
          Let&apos;s talk
        </a>
      </nav>
    </header>
  );
};

export default Navbar;

