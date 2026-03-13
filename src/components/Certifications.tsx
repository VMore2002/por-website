import SectionHeading from "./SectionHeading";
import { useInViewReveal } from "../hooks/useInViewReveal";

type Certification = {
  title: string;
  issuer: string;
  year: string;
  status?: string;
};

const certifications: Certification[] = [
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    year: "In Progress",
    status: "Preparation Phase",
  },
  {
    title: "Docker & Kubernetes Training",
    issuer: "Hands-on Labs & Online Courses",
    year: "2025",
  },
  {
    title: "Terraform Infrastructure Automation",
    issuer: "Self-directed Projects & Courses",
    year: "2025",
  },
  {
    title: "Linux System Administration",
    issuer: "Academic & Practical Experience",
    year: "2024",
  },
  {
    title: "Networking & Security (PG-DITISS)",
    issuer: "CDAC",
    year: "2025",
  },
];

const Certifications = () => {
  const { ref, visible } = useInViewReveal();

  return (
    <div
      ref={ref}
      className={`section-container transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <SectionHeading
        eyebrow="Certifications"
        title="Certifications & Learning Milestones"
        subtitle="Continuous learning journey in DevOps, cloud infrastructure, and automation."
      />

      <div className="mt-6 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert) => (
          <div
            key={cert.title}
            className="card p-5 flex flex-col gap-2 hover:-translate-y-1 hover:shadow-md transition-all duration-200"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-sm font-semibold text-[#111827]">
                  {cert.title}
                </h3>
                <p className="text-[12px] text-[#6b7280]">{cert.issuer}</p>
              </div>
              <span className="inline-flex items-center rounded-full bg-[#eef2ff] px-3 py-1 text-[11px] font-medium text-[#6366f1]">
                🎓
              </span>
            </div>
            <div className="mt-1 flex items-center justify-between text-[11px] text-[#9ca3af]">
              <span>{cert.year}</span>
              {cert.status && (
                <span className="inline-flex items-center rounded-full border border-[#e5e7eb] bg-[#f5f7fb] px-3 py-0.5 text-[11px] text-[#6366f1]">
                  {cert.status}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;

