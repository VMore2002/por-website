import SectionHeading from "./SectionHeading";
import { useInViewReveal } from "../hooks/useInViewReveal";

const GithubStats = () => {
  const { ref, visible } = useInViewReveal();

  return (
    <div
      ref={ref}
      className={`section-container transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <SectionHeading
        eyebrow="GitHub"
        title="GitHub Activity"
        subtitle="Open-source work, learning projects, and experiments around DevOps, automation, and cloud."
      />

      <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] items-start">
        <div className="card p-4 space-y-3">
          <h3 className="text-sm font-semibold text-slate-100">
            Contribution Graph
          </h3>
          <p className="text-xs text-slate-400">
            A snapshot of recent GitHub activity for{" "}
            <span className="text-primary-300">@VMore2002</span>.
          </p>
          <div className="mt-2 rounded-xl border border-slate-800 bg-slate-950/60 px-2 py-2 overflow-x-auto">
            <img
              src="https://ghchart.rshah.org/38bdf8/VMore2002"
              alt="GitHub contribution chart for VMore2002"
              className="w-full min-w-[480px]"
              loading="lazy"
            />
          </div>
        </div>

        <div className="space-y-3 text-xs sm:text-sm">
          <div className="card p-4 space-y-2">
            <h3 className="text-sm font-semibold text-slate-100">
              Repository Highlights
            </h3>
            <ul className="list-disc list-inside text-slate-300 space-y-1.5">
              <li>DevOps and infrastructure-as-code experiments on AWS.</li>
              <li>Secure CI/CD and DevSecOps pipeline prototypes.</li>
              <li>Network security labs using pfSense, VLANs, and monitoring.</li>
            </ul>
          </div>
          <div className="card p-4 space-y-2">
            <h3 className="text-sm font-semibold text-slate-100">
              Explore GitHub
            </h3>
            <p className="text-slate-300">
              See all repositories, contributions, and pinned projects on GitHub.
            </p>
            <a
              href="https://github.com/VMore2002"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-primary-500/70 bg-primary-500/10 px-4 py-1.5 text-[11px] font-medium text-primary-300 hover:bg-primary-500/20 transition"
            >
              View GitHub Profile ↗
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GithubStats;

