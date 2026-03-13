import SectionHeading from "./SectionHeading";
import { useInViewReveal } from "../hooks/useInViewReveal";

type Highlight = {
  number: string;
  title: string;
  description: string;
};

const highlights: Highlight[] = [
  {
    number: "01",
    title: "Linux & System Administration",
    description:
      "File system hierarchy and management, user and permission management, process management and systemd, shell scripting and automation, package management (apt, yum), network configuration and troubleshooting, log management and monitoring.",
  },
  {
    number: "02",
    title: "AWS Cloud Services",
    description:
      "Compute (EC2, Lambda, ECS, EKS), storage (S3, EBS, EFS, Glacier), networking (VPC, Route 53, CloudFront, ALB/NLB), databases (RDS, DynamoDB, ElastiCache), security (IAM, Security Groups, ACM), monitoring (CloudWatch, CloudTrail), and Well-Architected Framework principles.",
  },
  {
    number: "03",
    title: "Git & Source Control",
    description:
      "Git fundamentals and workflows, branching strategies (GitFlow, trunk-based), merge vs rebase strategies, pull requests and code reviews, GitHub/GitLab CI integration, and repository management best practices.",
  },
  {
    number: "04",
    title: "Containers & Orchestration",
    description:
      "Docker fundamentals and image creation, multi-stage builds and optimization, Docker Compose for local development, Kubernetes architecture and components, deployments, services, ingress, ConfigMaps, Secrets, Volumes, and Helm chart management.",
  },
  {
    number: "05",
    title: "Infrastructure as Code",
    description:
      "Terraform configuration language (HCL), resource and data source management, reusable modules, state management and locking, workspaces for multi-environment setups, variables, outputs, locals, and IaC best practices.",
  },
  {
    number: "06",
    title: "CI/CD Pipelines",
    description:
      "Jenkins pipelines as code (Jenkinsfile), build automation with Maven, code quality gates with SonarQube, automated testing integration, blue-green and canary deployments, and pipeline optimization techniques.",
  },
  {
    number: "07",
    title: "Monitoring & Observability",
    description:
      "Metrics collection and analysis, log aggregation and parsing, distributed tracing concepts, dashboard creation and KPIs, alert configuration and management, SLIs, SLOs, SLAs, and incident response workflows.",
  },
];

const TrainingHighlights = () => {
  const { ref, visible } = useInViewReveal();

  return (
    <div
      ref={ref}
      className={`section-container transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <SectionHeading
        eyebrow="Training"
        title="Training & Learning Highlights"
        subtitle="Comprehensive learning path focused on practical DevOps skills and implementations."
      />

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {highlights.map((item) => (
          <div
            key={item.number}
            className="card p-5 flex flex-col gap-3 hover:-translate-y-1 hover:shadow-md transition-all duration-200"
          >
            <div className="flex items-center gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#eef2ff] text-[13px] font-semibold text-[#6366f1]">
                {item.number}
              </span>
              <h3 className="text-sm font-semibold text-[#111827]">
                {item.title}
              </h3>
            </div>
            <p className="text-[14px] text-[#6b7280] leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrainingHighlights;

