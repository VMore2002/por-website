import SectionHeading from "./SectionHeading";
import { useInViewReveal } from "../hooks/useInViewReveal";
import TechIconStrip from "./TechIconStrip";

const TechStackSection = () => {
  const { ref, visible } = useInViewReveal();

  return (
    <div
      ref={ref}
      className={`section-container transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <SectionHeading
        eyebrow="Tech Stack"
        title="Tools & Platforms"
        subtitle="Core technologies I use to design, automate, and operate DevOps environments."
      />
      <TechIconStrip />
    </div>
  );
};

export default TechStackSection;

