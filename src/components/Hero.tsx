import TechIconStrip from "./TechIconStrip";
import { motion } from "framer-motion";

const Hero = () => {
  const handleDownload = () => {
    window.open("/vipul-more-resume.pdf", "_blank");
  };

  const handleViewProjects = () => {
    const el = document.getElementById("projects");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleContactScroll = () => {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="section-container flex flex-col items-center text-center gap-10 lg:items-center">
      <motion.div
        className="space-y-6 relative max-w-3xl"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#6366f1]">
          DevOps • Cloud • Infrastructure
        </p>

        <h1 className="text-[34px] md:text-[48px] font-bold tracking-tight text-[#111827]">
          Hi, I&apos;m <span className="text-[#6366f1]">Vipul More</span>
        </h1>

        <h2 className="text-lg sm:text-xl font-medium text-[#111827]">
          DevOps / Cloud / Infrastructure Engineer
        </h2>

        <p className="max-w-2xl mx-auto text-[16px] text-[#6b7280] leading-relaxed">
          DevOps Engineer specializing in AWS infrastructure, CI/CD pipelines,
          Terraform-based infrastructure as code, Ansible automation, Docker
          containerization, and end-to-end monitoring and observability with
          Prometheus, Grafana, and CloudWatch.
        </p>

        <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={handleViewProjects}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#111827] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#4f46e5] transition-all duration-200 transform hover:scale-[1.02]"
          >
            View Projects
          </button>
          <button
            onClick={handleDownload}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-[#e5e7eb] bg-white px-5 py-2.5 text-sm font-medium text-[#111827] hover:border-[#6366f1] hover:text-[#6366f1] transition-all duration-200 transform hover:scale-[1.02]"
          >
            Download Resume
          </button>
          <button
            onClick={handleContactScroll}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-[#e5e7eb] bg-white px-5 py-2.5 text-sm font-medium text-[#111827] hover:border-[#6366f1] hover:text-[#6366f1] transition-all duration-200 transform hover:scale-[1.02]"
          >
            LinkedIn
          </button>
        </div>

        <div className="mt-6">
          <TechIconStrip />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;