import TechIconStrip from "./TechIconStrip";

const Hero = () => {
  const handleDownload = () => {
    window.open("/vipul-more-resume.pdf", "_blank");
  };

  const handleContactScroll = () => {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="section-container flex flex-col-reverse gap-10 lg:flex-row lg:items-center">
      <div className="space-y-6 relative">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary-300">
          DevOps • Cloud • Infrastructure
        </p>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-50">
          Hi, I&apos;m <span className="text-primary-400">Vipul More</span>
        </h1>

        <h2 className="text-lg sm:text-xl font-medium text-slate-200">
          DevOps / Cloud / Infrastructure Engineer
        </h2>

        <p className="max-w-2xl text-sm sm:text-base text-slate-300 leading-relaxed">
          DevOps Engineer with hands-on experience designing, deploying, and
          automating scalable AWS infrastructure using CI/CD, Terraform,
          Ansible, and Docker.
        </p>

        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={handleDownload}
            className="inline-flex items-center gap-2 rounded-full bg-primary-500 px-5 py-2 text-xs sm:text-sm font-medium text-slate-950"
          >
            Download Resume
          </button>

          <button
            onClick={handleContactScroll}
            className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-5 py-2 text-xs sm:text-sm text-slate-200"
          >
            Contact Me
          </button>
        </div>

        <TechIconStrip />
      </div>
    </div>
  );
};

export default Hero;