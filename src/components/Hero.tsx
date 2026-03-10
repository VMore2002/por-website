import TechIconStrip from "./TechIconStrip";
import resumePdf from "../assets/Vipul-More-Resume.pdf";

const Hero = () => {
  const handleDownload = () => {
    window.open(resumePdf, "_blank");
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
          automating scalable, highly available infrastructure on AWS. Skilled
          in CI/CD pipelines, Infrastructure as Code with Terraform, automated
          configuration using Ansible, and containerized deployments with
          Docker. Experienced in secure VPC architectures, load balancing, auto
          scaling, monitoring, and DevOps best practices backed by a strong
          foundation in Linux and cloud networking.
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
            className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/60 px-5 py-2 text-xs sm:text-sm font-medium text-slate-200 hover:border-primary-500 hover:text-primary-300 transition"
          >
            Contact Me
          </button>
        </div>
        <div className="flex flex-wrap gap-3 pt-3 text-[11px] text-slate-300">
          <span className="inline-flex items-center gap-1 rounded-full bg-slate-900/60 px-3 py-1 border border-slate-800">
            Pune, India
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-slate-900/60 px-3 py-1 border border-slate-800">
            AWS • Terraform • Ansible • Docker • Jenkins
          </span>
        </div>

        <div className="grid grid-cols-3 gap-3 pt-4 text-[11px] sm:text-xs">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 px-3 py-2">
            <p className="text-primary-300 text-sm font-semibold">3+</p>
            <p className="text-slate-400">Cloud / DevOps projects</p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 px-3 py-2">
            <p className="text-primary-300 text-sm font-semibold">End-to-end</p>
            <p className="text-slate-400">CI/CD & IaC ownership</p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 px-3 py-2">
            <p className="text-primary-300 text-sm font-semibold">Security</p>
            <p className="text-slate-400">DevSecOps & network design</p>
          </div>
        </div>

        <TechIconStrip />
      </div>
      <div className="flex-1 flex items-center justify-center">
        <div className="relative h-48 w-48 sm:h-56 sm:w-56 rounded-[2rem] border border-slate-700 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 shadow-2xl shadow-slate-900/70 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_0_0,rgba(56,189,248,0.35),transparent_55%),radial-gradient(circle_at_100%_100%,rgba(34,197,94,0.35),transparent_55%)]" />
          <div className="relative h-full w-full flex items-center justify-center">
            <div className="text-center space-y-1">
              <div className="mx-auto mb-2 h-16 w-16 rounded-2xl border border-slate-700 bg-slate-900/80 flex items-center justify-center">
                <span className="text-3xl"></span>
              </div>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-300">
                DevOps
              </p>
              <p className="text-xs text-slate-400">
                AWS • CI/CD • IaC • Security
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

