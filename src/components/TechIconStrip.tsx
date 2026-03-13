import {
  FaAws,
  FaDocker,
  FaJenkins,
  FaGitlab,
  FaCubes,
  FaCodeBranch,
  FaServer,
  FaChartLine,
  FaTachometerAlt,
  FaLinux,
} from "react-icons/fa";
import { motion } from "framer-motion";

const icons = [
  { Icon: FaAws, label: "AWS" },
  { Icon: FaDocker, label: "Docker" },
  { Icon: FaCubes, label: "Kubernetes" },
  { Icon: FaCodeBranch, label: "Terraform" },
  { Icon: FaServer, label: "Ansible" },
  { Icon: FaJenkins, label: "Jenkins" },
  { Icon: FaChartLine, label: "Prometheus" },
  { Icon: FaTachometerAlt, label: "Grafana" },
  { Icon: FaLinux, label: "Linux" },
];

const TechIconStrip = () => {
  return (
    <div className="mt-6 rounded-[12px] border border-[#e5e7eb] bg-white px-3 py-3 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
      <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#9ca3af] mb-3">
        Core DevOps Stack
      </p>
      <motion.div
        className="flex flex-wrap items-center gap-4 text-[#6b7280] text-xs"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {icons.map(({ Icon, label }, index) => (
          <motion.div
            key={label}
            className="group inline-flex items-center gap-1.5 rounded-full border border-[#e5e7eb] bg-[#f5f7fb] px-3 py-1 hover:border-[#6366f1] hover:text-[#111827] transition-colors"
            whileHover={{ scale: 1.06, boxShadow: "0 0 18px rgba(99,102,241,0.3)" }}
            transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.02 * index }}
          >
            <Icon className="h-4 w-4 text-[#9ca3af] group-hover:text-[#6366f1]" />
            <span>{label}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default TechIconStrip;

