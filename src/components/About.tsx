import SectionHeading from "./SectionHeading";
import { useInViewReveal } from "../hooks/useInViewReveal";

const About = () => {
  const { ref, visible } = useInViewReveal();

  return (
    <div
      ref={ref}
      className={`section-container space-y-6 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <SectionHeading
        eyebrow="About"
        title="About Me"
        subtitle="DevOps engineer focused on reliable, secure, and automated infrastructure on AWS."
      />

      <div className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-2 space-y-4 text-sm text-slate-300">
          <p>
            I am a DevOps Engineer with hands-on experience designing and
            deploying three-tier web application architectures, secure VPC
            networks, and automated CI/CD pipelines on AWS. My work spans
            infrastructure provisioning with Terraform, configuration management
            using Ansible, and containerized workloads with Docker and Docker
            Compose.
          </p>
          <p>
            I enjoy building robust delivery pipelines, hardening cloud
            environments, and implementing observability with CloudWatch,
            Prometheus, and Grafana. My goal is to bridge development and
            operations by delivering repeatable, reliable, and secure
            deployment workflows.
          </p>
        </div>

        <div className="space-y-3 text-xs sm:text-sm">
          <div className="card p-4 space-y-2">
            <h3 className="text-sm font-semibold text-slate-100">
              Career Focus
            </h3>
            <ul className="list-disc list-inside text-slate-300 space-y-1">
              <li>DevOps & Cloud infrastructure on AWS</li>
              <li>Secure, automated CI/CD pipelines</li>
              <li>Infrastructure as Code & configuration automation</li>
              <li>Monitoring, observability & reliability engineering</li>
            </ul>
          </div>
          <div className="card p-4 space-y-2">
            <h3 className="text-sm font-semibold text-slate-100">
              Key Strengths
            </h3>
            <ul className="list-disc list-inside text-slate-300 space-y-1">
              <li>Strong understanding of AWS networking & security</li>
              <li>Hands-on with Terraform, Ansible, Jenkins, GitLab CI/CD</li>
              <li>Solid Linux administration (Ubuntu) and web servers</li>
              <li>Clear documentation and architecture-first mindset</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

