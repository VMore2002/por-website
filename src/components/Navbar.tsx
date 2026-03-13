const sections = [
  { id: "hero", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "blog", label: "Blog" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const handleDownload = () => {
    window.open("/vipul-more-resume.pdf", "_blank");
  };

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-[#e5e7eb] bg-white/90 backdrop-blur">
      <nav className="section-container flex items-center justify-between py-3">
        <button
          onClick={() => handleScroll("hero")}
          className="text-sm font-semibold tracking-tight text-[#111827]"
        >
          Vipul <span className="text-[#6366f1]">More</span>
        </button>
        <div className="hidden md:flex items-center gap-8 text-sm text-[#6b7280]">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => handleScroll(section.id)}
              className="hover:text-[#111827] transition-colors"
            >
              {section.label}
            </button>
          ))}
        </div>
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={handleDownload}
            className="text-sm text-[#6b7280] hover:text-[#111827] transition-colors"
          >
            Resume
          </button>
          <button
            onClick={() => handleScroll("contact")}
            className="rounded-full bg-[#111827] text-white text-xs font-medium px-4 py-2 hover:bg-[#4b5563] transition-all duration-200 transform hover:scale-[1.02]"
          >
            Contact
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

