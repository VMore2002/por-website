import SectionHeading from "./SectionHeading";
import { useInViewReveal } from "../hooks/useInViewReveal";
import type { IconType } from "react-icons";
import {
  FiTerminal,
  FiCloud,
  FiGitBranch,
  FiBox,
  FiCode,
  FiGitCommit,
  FiActivity,
} from "react-icons/fi";

type SkillCategory = {
  name: string;
  items: string[];
  borderColor: string;
  Icon: IconType;
};

const categories: SkillCategory[] = [
  {
    name: "Operating Systems & Scripting",
    items: ["Linux", "Bash", "Cron", "Shell Scripting"],
    borderColor: "#86efac",
    Icon: FiTerminal,
  },
  {
    name: "Cloud (AWS)",
    items: [
      "EC2, VPC, S3, EBS, EFS, RDS",
      "IAM, CloudWatch",
      "Route 53, CloudFront, Lambda",
    ],
    borderColor: "#fdba74",
    Icon: FiCloud,
  },
  {
    name: "Version Control",
    items: ["Git", "GitHub", "GitLab"],
    borderColor: "#fca5a5",
    Icon: FiGitBranch,
  },
  {
    name: "Containers & Orchestration",
    items: ["Docker", "Docker Compose", "Kubernetes", "EKS"],
    borderColor: "#93c5fd",
    Icon: FiBox,
  },
  {
    name: "Infrastructure as Code",
    items: ["Terraform", "Modules", "State Management", "Workspaces"],
    borderColor: "#c4b5fd",
    Icon: FiCode,
  },
  {
    name: "CI/CD",
    items: [
      "Jenkins, Maven, SonarQube",
      "Blue-Green Deployments",
      "Canary Deployments",
      "Rolling Deployments",
    ],
    borderColor: "#93c5fd",
    Icon: FiGitCommit,
  },
  {
    name: "Monitoring & Observability",
    items: ["Datadog", "Logs & Metrics", "Alerts"],
    borderColor: "#86efac",
    Icon: FiActivity,
  },
];

const Skills = () => {
  const { ref: sectionRef, visible: sectionVisible } = useInViewReveal();

  return (
    <div
      ref={sectionRef}
      className={`section-container transition-all duration-700 ${
        sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <SectionHeading
        eyebrow="Skills"
        title="Skills & Tech Stack"
        subtitle="Core technologies and domains I work with across cloud infrastructure and DevOps."
      />
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map(({ name, items, borderColor, Icon }) => (
          <div
            key={name}
            className="h-full rounded-[14px] border-[2px] bg-white p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-all duration-200 hover:-translate-y-1"
            style={{ borderColor }}
          >
            <div className="flex items-center gap-2.5 mb-3.5">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#f9fafb] text-[#111827]">
                <Icon className="h-4 w-4" />
              </span>
              <h3 className="text-[18px] font-semibold text-[#111827]">
                {name}
              </h3>
            </div>
            <ul className="mt-1.5 space-y-1.5 list-disc pl-[18px] text-[15px] leading-[1.8] text-[#111827] marker:text-[#2563eb]">
              {items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

