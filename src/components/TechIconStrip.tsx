import {
  FaAws,
  FaDocker,
  FaJenkins,
  FaGitlab,
  FaCubes,
  FaCodeBranch,
  FaServer,
} from "react-icons/fa";

const TechIconStrip = () => {
  const icons = [
    { Icon: FaAws, label: "AWS" },
    { Icon: FaDocker, label: "Docker" },
    { Icon: FaCubes, label: "Kubernetes" },
    { Icon: FaJenkins, label: "Jenkins" },
    { Icon: FaGitlab, label: "GitLab CI/CD" },
    { Icon: FaCodeBranch, label: "Terraform" },
    { Icon: FaServer, label: "Ansible" },
  ];

  return (
    <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-900/40 px-3 py-3">
      <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-slate-400 mb-3">
        Core DevOps Stack
      </p>
      <div className="flex flex-wrap items-center gap-4 text-slate-300 text-xs">
        {icons.map(({ Icon, label }) => (
          <div
            key={label}
            className="inline-flex items-center gap-1.5 rounded-full border border-slate-800 bg-slate-950/70 px-3 py-1 hover:border-primary-500/70 hover:text-primary-200 transition-colors"
          >
            <Icon className="h-4 w-4" />
            <span>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechIconStrip;

