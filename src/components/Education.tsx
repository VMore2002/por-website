import SectionHeading from "./SectionHeading";
import { useInViewReveal } from "../hooks/useInViewReveal";

type EducationItem = {
  title: string;
  institution: string;
  period: string;
  location?: string;
  detail?: string;
};

const education: EducationItem[] = [
  {
    title:
      "Post Graduate Diploma in IT Infrastructure, Systems & Security (PG-DITISS)",
    institution: "CDAC",
    period: "02/2025 – 08/2025 • Pune",
    detail: "Percentage: 77.5%",
  },
  {
    title: "B.Tech, Computer Science and Engineering",
    institution: "Indore Institute of Science and Technology",
    period: "08/2020 – 08/2024",
    detail: "CGPA: 7.75",
  },
  {
    title: "Higher Secondary Education",
    institution: "Gyandeep Hr. Sec. School, Shahpur",
    period: "05/2019 – 06/2020",
    detail: "Percentage: 85.6%",
  },
];

const Education = () => {
  const { ref, visible } = useInViewReveal();

  return (
    <div
      ref={ref}
      className={`section-container transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <SectionHeading
        eyebrow="Education"
        title="Education & Certifications"
        subtitle="Formal education and specialized training that underpin my DevOps and infrastructure skills."
      />
      <div className="mt-4 space-y-4">
        {education.map((item) => (
          <div
            key={item.title}
            className="card p-5 flex flex-col gap-1.5 hover:-translate-y-1 hover:shadow-md transition-all duration-200"
          >
            <h3 className="text-sm font-semibold text-[#111827]">
              {item.title}
            </h3>
            <p className="text-xs text-[#6366f1]">{item.institution}</p>
            <p className="text-[11px] text-[#9ca3af]">{item.period}</p>
            {item.detail && (
              <p className="text-[11px] text-[#6b7280]">{item.detail}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;

