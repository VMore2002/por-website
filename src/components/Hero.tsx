import TechIconStrip from "./TechIconStrip";
import { motion } from "framer-motion";

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
      <motion.div
        className="space-y-6 relative"
        initial={{ opacity: 0, x: -24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
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
          DevOps Engineer specializing in AWS infrastructure, CI/CD pipelines,
          Terraform-based infrastructure as code, Ansible automation, Docker
          containerization, and end-to-end monitoring and observability with
          Prometheus, Grafana, and CloudWatch.
        </p>

        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={handleDownload}
            className="inline-flex items-center gap-2 rounded-full bg-primary-500 px-5 py-2 text-xs sm:text-sm font-medium text-slate-950 shadow-glow-primary hover:bg-primary-600 transition"
          >
            Download Resume
          </button>

          <button
            onClick={handleContactScroll}
            className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/60 px-5 py-2 text-xs sm:text-sm text-slate-200 hover:border-primary-500 hover:text-primary-300 transition"
          >
            Contact Me
          </button>
        </div>

        <TechIconStrip />
      </motion.div>

      <motion.div
        className="flex-1 flex items-center justify-center"
        initial={{ opacity: 0, x: 24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="relative h-56 w-56 sm:h-64 sm:w-64 rounded-[2rem] border border-slate-700 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 shadow-2xl shadow-slate-900/70 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_0_0,rgba(56,189,248,0.35),transparent_55%),radial-gradient(circle_at_100%_100%,rgba(147,51,234,0.4),transparent_55%)]" />
          <div className="relative h-full w-full flex items-center justify-center">
            <div className="text-center space-y-2">
              <div className="mx-auto mb-2 h-20 w-20 rounded-3xl border border-slate-700 bg-slate-900/80 flex items-center justify-center">
                <span className="text-4xl">⚙️</span>
              </div>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-300">
                DevOps Engineer
              </p>
              <p className="text-xs text-slate-400">
                AWS • CI/CD • Terraform • Kubernetes • Security
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;