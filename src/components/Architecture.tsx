import SectionHeading from "./SectionHeading";
import { useInViewReveal } from "../hooks/useInViewReveal";
import { motion } from "framer-motion";

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

      <div className="mt-6 grid gap-6 md:grid-cols-3 text-xs sm:text-sm">
        <motion.div
          className="card p-4 space-y-3"
          variants={cardVariants}
          initial="hidden"
          animate={visible ? "visible" : "hidden"}
          custom={0}
        >
          <h3 className="text-sm font-semibold text-slate-100">
            CI/CD Pipeline Architecture
          </h3>
          <p className="text-slate-300">
            A typical flow from source control to automated build, test, and
            deployment using containers.
          </p>
          <pre className="mt-2 rounded-xl bg-slate-950/70 border border-slate-800 px-3 py-2 text-[10px] leading-relaxed text-slate-200 overflow-x-auto">
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
          className="card p-4 space-y-3"
          variants={cardVariants}
          initial="hidden"
          animate={visible ? "visible" : "hidden"}
          custom={1}
        >
          <h3 className="text-sm font-semibold text-slate-100">
            AWS Three-Tier Infrastructure
          </h3>
          <p className="text-slate-300">
            Highly available web stack with public entry points and private
            application/data tiers.
          </p>
          <pre className="mt-2 rounded-xl bg-slate-950/70 border border-slate-800 px-3 py-2 text-[10px] leading-relaxed text-slate-200 overflow-x-auto">
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
          className="card p-4 space-y-3"
          variants={cardVariants}
          initial="hidden"
          animate={visible ? "visible" : "hidden"}
          custom={2}
        >
          <h3 className="text-sm font-semibold text-slate-100">
            DevSecOps Pipeline
          </h3>
          <p className="text-slate-300">
            Security integrated into each step of the software delivery
            lifecycle.
          </p>
          <pre className="mt-2 rounded-xl bg-slate-950/70 border border-slate-800 px-3 py-2 text-[10px] leading-relaxed text-slate-200 overflow-x-auto">
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

