import SectionHeading from "./SectionHeading";
import { useInViewProgress } from "../hooks/useInViewProgress";
import { useInViewReveal } from "../hooks/useInViewReveal";

type SkillCategory = {
  name: string;
  skills: { label: string; level: number }[];
};

const categories: SkillCategory[] = [
  {
    name: "Cloud Platforms",
    skills: [{ label: "AWS", level: 85 }],
  },
  {
    name: "DevOps Tools",
    skills: [
      { label: "Jenkins", level: 80 },
      { label: "GitLab CI/CD", level: 80 },
    ],
  },
  {
    name: "Containers & Orchestration",
    skills: [
      { label: "Docker", level: 85 },
      { label: "Docker Compose", level: 80 },
      { label: "Kubernetes", level: 60 },
    ],
  },
  {
    name: "CI/CD",
    skills: [
      { label: "Pipeline Design & Automation", level: 85 },
      { label: "Security Scanning (SAST/DAST/SCA)", level: 80 },
    ],
  },
  {
    name: "Infrastructure as Code",
    skills: [
      { label: "Terraform (Modular)", level: 85 },
      { label: "Ansible (Playbooks)", level: 80 },
    ],
  },
  {
    name: "Monitoring & Observability",
    skills: [
      { label: "AWS CloudWatch", level: 80 },
      { label: "Prometheus", level: 75 },
      { label: "Grafana", level: 75 },
      { label: "Nagios", level: 65 },
    ],
  },
  {
    name: "Networking & Security",
    skills: [
      { label: "VPC, Subnets, Route Tables", level: 85 },
      { label: "Security Groups, NACLs", level: 80 },
      { label: "IAM Roles & Policies", level: 80 },
      { label: "DMZ, VLANs, IPS (pfSense)", level: 70 },
    ],
  },
  {
    name: "Programming / Scripting",
    skills: [
      { label: "Bash scripting", level: 75 },
      { label: "Automation scripting", level: 70 },
    ],
  },
  {
    name: "Version Control",
    skills: [
      { label: "Git", level: 85 },
      { label: "GitLab", level: 80 },
    ],
  },
];

const Skills = () => {
  const { ref: barRef, visible } = useInViewProgress();
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
        title="Technical Skills"
        subtitle="A snapshot of the tools and platforms I use to build resilient, secure, and automated systems."
      />
      <div
        ref={barRef}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-4"
      >
        {categories.map((category) => (
          <div key={category.name} className="card p-4 space-y-3">
            <h3 className="text-sm font-semibold text-slate-100">
              {category.name}
            </h3>
            <div className="space-y-3">
              {category.skills.map((skill) => (
                <div key={skill.label}>
                  <div className="flex justify-between text-[11px] text-slate-300 mb-1">
                    <span>{skill.label}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-primary-500 to-accent-500 transition-all duration-700 ease-out"
                      style={{
                        width: visible ? `${skill.level}%` : "0%",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

