import { useState } from "react";
import SectionHeading from "./SectionHeading";
import { useInViewReveal } from "../hooks/useInViewReveal";

type Project = {
  title: string;
  description: string;
  technologies: string[];
  architecture: string;
  github?: string;
  categoryTags: string[];
};

const projects: Project[] = [
  {
    title: "Secure DevSecOps Pipeline with ASPM & CI/CD Scanning",
    description:
      "Designed and implemented a secure CI/CD pipeline using GitLab CI/CD with integrated security controls across the SDLC. The pipeline performs automated SAST, DAST, SCA, and container image scanning before allowing builds and deployments.",
    technologies: [
      "GitLab CI/CD",
      "Docker",
      "Kubernetes",
      "SAST",
      "DAST",
      "SCA",
      "ASPM",
    ],
    architecture:
      "The pipeline orchestrates stages for code checkout, static analysis, dependency scanning, container image build and scan, dynamic security testing, and deployment. An ASPM platform aggregates findings from all tools, enforces security gates on merge requests, and provides dashboards for vulnerability trends and compliance.",
    github: "https://github.com/your-username/devsecops-aspm-pipeline",
    categoryTags: ["DevSecOps", "CI/CD", "Security"],
  },
  {
    title: "AWS Three-Tier Web Application Architecture",
    description:
      "Designed and deployed a production-ready three-tier architecture on AWS using EC2, RDS, Application Load Balancer, and Auto Scaling Groups, backed by Terraform and Ansible automation.",
    technologies: [
      "AWS EC2",
      "AWS RDS",
      "Application Load Balancer",
      "Auto Scaling",
      "Terraform",
      "Ansible",
      "CloudWatch",
    ],
    architecture:
      "The solution uses a secure VPC with public and private subnets, NAT Gateway, route tables, and security groups. Application instances run in private subnets behind an ALB, while RDS is deployed in isolated subnets. Terraform provisions all resources, Ansible automates instance configuration, and CloudWatch, Prometheus, and Grafana provide monitoring.",
    github: "https://github.com/your-username/aws-three-tier-architecture",
    categoryTags: ["AWS", "IaC", "DevOps"],
  },
  {
    title: "Segmented Enterprise Network with pfSense & Nagios",
    description:
      "Implemented a secure enterprise network using pfSense as the core firewall and router, with multiple VLANs for WAN, LAN, DMZ, internal, and IPS zones, and integrated Nagios for continuous monitoring.",
    technologies: ["pfSense", "VLANs", "DMZ", "IPS", "Nagios", "Virtualization"],
    architecture:
      "The design follows defense-in-depth principles with segmented VLANs for different trust zones, strict firewall rules for east-west and north-south traffic, and a DMZ hosting public-facing services. pfSense handles routing, firewalling, and VPN, while Nagios monitors host and service health along with inter-VLAN and internet connectivity.",
    github: "https://github.com/your-username/enterprise-network-pfsense",
    categoryTags: ["Networking", "Security", "Monitoring"],
  },
];

const allFilters = [
  "All",
  "AWS",
  "DevOps",
  "DevSecOps",
  "Security",
  "IaC",
  "Networking",
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [expandedTitle, setExpandedTitle] = useState<string | null>(null);
  const { ref, visible } = useInViewReveal();

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter(
          (project) =>
            project.technologies
              .concat(project.categoryTags)
              .map((t) => t.toLowerCase())
              .includes(activeFilter.toLowerCase())
        );

  return (
    <div
      ref={ref}
      className={`section-container transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <SectionHeading
        eyebrow="Projects"
        title="Highlighted Projects"
        subtitle="Representative work showcasing DevOps, cloud, security, and networking experience."
      />

      <div className="mb-6 flex flex-wrap gap-2 text-xs">
        {allFilters.map((filter) => {
          const isActive = filter === activeFilter;
          return (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full border px-3 py-1 transition ${
                isActive
                  ? "border-primary-500 bg-primary-500/10 text-primary-300"
                  : "border-slate-700 bg-slate-900/60 text-slate-300 hover:border-primary-500/70 hover:text-primary-200"
              }`}
            >
              {filter}
            </button>
          );
        })}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {filtered.map((project) => {
          const isExpanded = expandedTitle === project.title;
          return (
            <article
              key={project.title}
              className="card p-5 space-y-3 border-slate-800 hover:border-primary-500/80 transition-colors"
            >
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-sm font-semibold text-slate-100">
                {project.title}
              </h3>
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[11px] font-medium text-primary-300 hover:text-primary-200"
                >
                  GitHub ↗
                </a>
              )}
            </div>
            <p className="text-xs sm:text-sm text-slate-300">
              {project.description}
            </p>
            <button
              type="button"
              onClick={() =>
                setExpandedTitle(isExpanded ? null : project.title)
              }
              className="text-[11px] font-medium text-primary-300 hover:text-primary-200"
            >
              {isExpanded ? "Hide architecture details ↑" : "View architecture details ↓"}
            </button>
            {isExpanded && (
              <div className="mt-2 border-t border-slate-800 pt-3 space-y-1.5">
                <p className="text-[11px] font-semibold text-slate-200">
                  Architecture
                </p>
                <p className="text-xs text-slate-400">
                  {project.architecture}
                </p>
              </div>
            )}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-slate-900/80 border border-slate-700 px-2 py-0.5 text-[10px] text-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </article>
        );
      })}
      </div>
    </div>
  );
};

export default Projects;

