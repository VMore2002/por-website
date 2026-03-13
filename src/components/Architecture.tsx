import SectionHeading from "./SectionHeading";
import { useInViewReveal } from "../hooks/useInViewReveal";
import { motion } from "framer-motion";
import {
  FaUserAlt,
  FaGithub,
  FaJenkins,
  FaDocker,
  FaAws,
  FaChartLine,
} from "react-icons/fa";

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 * i, duration: 0.4 },
  }),
};

const Architecture = () => {
  const { ref, visible } = useInViewReveal();

  return (
    <div
      ref={ref}
      className={`section-container transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <SectionHeading
        eyebrow="Architecture"
        title="System Architectures"
        subtitle="High-level views of how CI/CD, AWS infrastructure, and DevSecOps pipelines are wired together."
      />

      <motion.div
        className="mt-6 card p-5 space-y-3 hover:-translate-y-1 hover:shadow-md transition-all duration-200 text-xs sm:text-sm"
        initial={{ opacity: 0, y: 16 }}
        animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
        transition={{ duration: 0.4 }}
      >
        <h3 className="text-sm font-semibold text-[#111827]">
          DevOps Delivery Flow
        </h3>
        <p className="text-[#6b7280]">
          A visual overview of how code travels from developer commit to
          monitored production workloads.
        </p>
        <div className="mt-3 flex flex-wrap items-center justify-center gap-3 text-[11px] sm:text-xs text-[#6b7280]">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#f5f7fb] border border-[#e5e7eb] text-[#6366f1]">
              <FaUserAlt />
            </span>
            <span>Developer</span>
          </div>
          <span className="text-[#9ca3af]">→</span>
          <div className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#f5f7fb] border border-[#e5e7eb] text-[#111827]">
              <FaGithub />
            </span>
            <span>GitHub</span>
          </div>
          <span className="text-[#9ca3af]">→</span>
          <div className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#f5f7fb] border border-[#e5e7eb] text-[#d97706]">
              <FaJenkins />
            </span>
            <span>Jenkins</span>
          </div>
          <span className="text-[#9ca3af]">→</span>
          <div className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#f5f7fb] border border-[#e5e7eb] text-[#0ea5e9]">
              <FaDocker />
            </span>
            <span>Docker</span>
          </div>
          <span className="text-[#9ca3af]">→</span>
          <div className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#f5f7fb] border border-[#e5e7eb] text-[#f97316]">
              <FaAws />
            </span>
            <span>AWS</span>
          </div>
          <span className="text-[#9ca3af]">→</span>
          <div className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#f5f7fb] border border-[#e5e7eb] text-[#22c55e]">
              <FaChartLine />
            </span>
            <span>Monitoring</span>
          </div>
        </div>
      </motion.div>

      <div className="mt-6 grid gap-6 md:grid-cols-3 text-xs sm:text-sm">
        <motion.div
          className="card p-5 space-y-3 hover:-translate-y-1 hover:shadow-md transition-all duration-200"
          variants={cardVariants}
          initial="hidden"
          animate={visible ? "visible" : "hidden"}
          custom={0}
        >
          <h3 className="text-sm font-semibold text-[#111827]">
            CI/CD Pipeline Architecture
          </h3>
          <p className="text-[#6b7280]">
            A typical flow from source control to automated build, test, and
            deployment using containers.
          </p>
          <pre className="mt-2 rounded-xl bg-[#f9fafb] border border-[#e5e7eb] px-3 py-2 text-[10px] leading-relaxed text-[#111827] overflow-x-auto">
{`Developer
   ↓
GitHub / GitLab
   ↓
Jenkins / GitLab CI
   ↓
Docker Build & Test
   ↓
Image Registry
   ↓
Staging / Production Deployment`}
          </pre>
        </motion.div>

        <motion.div
          className="card p-5 space-y-3 hover:-translate-y-1 hover:shadow-md transition-all duration-200"
          variants={cardVariants}
          initial="hidden"
          animate={visible ? "visible" : "hidden"}
          custom={1}
        >
          <h3 className="text-sm font-semibold text-[#111827]">
            AWS Three-Tier Infrastructure
          </h3>
          <p className="text-[#6b7280]">
            Highly available web stack with public entry points and private
            application/data tiers.
          </p>
          <pre className="mt-2 rounded-xl bg-[#f9fafb] border border-[#e5e7eb] px-3 py-2 text-[10px] leading-relaxed text-[#111827] overflow-x-auto">
{`Users
   ↓
AWS Route 53 (DNS)
   ↓
Application Load Balancer
   ↓
EC2 Auto Scaling Group (Private Subnets)
   ↓
Amazon RDS (Private Subnets)

VPC with public & private subnets,
NAT Gateway, route tables, security groups`}
          </pre>
        </motion.div>

        <motion.div
          className="card p-5 space-y-3 hover:-translate-y-1 hover:shadow-md transition-all duration-200"
          variants={cardVariants}
          initial="hidden"
          animate={visible ? "visible" : "hidden"}
          custom={2}
        >
          <h3 className="text-sm font-semibold text-[#111827]">
            DevSecOps Pipeline
          </h3>
          <p className="text-[#6b7280]">
            Security integrated into each step of the software delivery
            lifecycle.
          </p>
          <pre className="mt-2 rounded-xl bg-[#f9fafb] border border-[#e5e7eb] px-3 py-2 text-[10px] leading-relaxed text-[#111827] overflow-x-auto">
{`Developer Commit
   ↓
GitLab CI/CD Pipeline
   ↓
SAST • SCA • Secret Scanning
   ↓
Docker Image Build & Scan
   ↓
DAST against staging
   ↓
ASPM Platform (Aggregated Findings)
   ↓
Security Gates → Deploy or Block`}
          </pre>
        </motion.div>
      </div>
    </div>
  );
};

export default Architecture;

