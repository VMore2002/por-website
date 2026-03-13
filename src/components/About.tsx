import SectionHeading from "./SectionHeading";
import { useInViewReveal } from "../hooks/useInViewReveal";

const About = () => {
  const { ref, visible } = useInViewReveal();

  return (
    <div
      ref={ref}
      className={`section-container transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <div className="text-center mb-8">
        <SectionHeading title="About Me" />
      </div>

      <div className="card p-8 md:p-10 text-[16px] leading-[1.7] text-[#6b7280]">
        <p className="mb-4">
          I’m a DevOps engineer focused on designing and operating{" "}
          <span className="font-medium text-[#111827]">cloud infrastructure</span>,{" "}
          <span className="font-medium text-[#111827]">automation</span>, and{" "}
          <span className="font-medium text-[#111827]">CI/CD pipelines</span> that keep
          applications reliable and secure.
        </p>
        <p className="mb-4">
          My work centers around modern tooling like{" "}
          <span className="font-medium text-[#111827]">Docker</span>,{" "}
          <span className="font-medium text-[#111827]">Kubernetes</span>,{" "}
          <span className="font-medium text-[#111827]">Terraform</span>, and{" "}
          <span className="font-medium text-[#111827]">Jenkins</span> running on{" "}
          <span className="font-medium text-[#111827]">Linux</span>, with a strong focus on
          observability and <span className="font-medium text-[#111827]">monitoring</span> so that
          issues are detected before they impact users.
        </p>
        <p>
          I enjoy building simple, repeatable workflows that make it easy for teams to ship
          changes quickly, safely, and confidently—whether that’s through well-structured
          infrastructure as code, automated deployments, or clear feedback loops.
        </p>
      </div>
    </div>
  );
};

export default About;

