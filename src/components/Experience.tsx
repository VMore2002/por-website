import SectionHeading from "./SectionHeading";
import { useInViewReveal } from "../hooks/useInViewReveal";

type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  location?: string;
  points: string[];
};

const experiences: ExperienceItem[] = [
  {
    role: "DevOps Engineer",
    company: "Heaptrace Technology",
    period: "2025 – Present",
    points: [
      "Designed and deployed a three-tier web application architecture on AWS using EC2, RDS, Application Load Balancer, and Auto Scaling Groups.",
      "Configured a secure VPC with public/private subnets, NAT Gateway, route tables, and security groups.",
      "Containerized applications using Docker and managed multi-container deployments with Docker Compose.",
      "Provisioned infrastructure using Terraform and automated server configuration with Ansible.",
      "Implemented CI/CD pipelines using Jenkins for automated build, test, and deployment workflows.",
      "Configured monitoring with CloudWatch and integrated Prometheus and Grafana for metrics and dashboards.",
      "Applied IAM least-privilege principles and network isolation to harden cloud security.",
    ],
  },
];

const Experience = () => {
  const { ref, visible } = useInViewReveal();

  return (
    <div
      ref={ref}
      className={`section-container transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <SectionHeading
        eyebrow="Experience"
        title="Experience & Training"
        subtitle="Practical DevOps and infrastructure experience delivering secure, automated environments."
      />

      <ol className="relative border-l border-slate-800 ml-3 mt-4 space-y-8">
        {experiences.map((exp) => (
          <li key={exp.company} className="ml-4">
            <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-primary-400 bg-slate-950" />
            <div className="card p-4 space-y-2">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div>
                  <h3 className="text-sm font-semibold text-slate-100">
                    {exp.role}
                  </h3>
                  <p className="text-xs text-primary-300">{exp.company}</p>
                </div>
                <p className="text-[11px] text-slate-400">{exp.period}</p>
              </div>
              <ul className="mt-2 list-disc list-inside text-xs sm:text-sm text-slate-300 space-y-1.5">
                {exp.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Experience;

