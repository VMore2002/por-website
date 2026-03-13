import SectionHeading from "./SectionHeading";
import { useInViewReveal } from "../hooks/useInViewReveal";

const Blog = () => {
  const { ref, visible } = useInViewReveal();

  return (
    <div
      ref={ref}
      className={`section-container transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <SectionHeading
        eyebrow="Blog"
        title="Writing & Deep Dives"
      subtitle="Long-form breakdowns of real DevOps and DevSecOps implementations."
      />

      <div className="mt-6 grid gap-4 md:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] items-stretch">
        <article className="card p-6 flex flex-col justify-between space-y-3 hover:-translate-y-1 hover:shadow-md transition-all duration-200">
          <div className="space-y-2">
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#6366f1]">
              DevSecOps • Case Study
            </p>
            <h3 className="text-sm sm:text-base font-semibold text-[#111827]">
              Building a Secure DevSecOps CI/CD Pipeline with Automated Security
              Scanning
            </h3>
            <p className="text-xs sm:text-sm text-[#6b7280]">
              A detailed walkthrough of designing a GitLab-based CI/CD pipeline
              that embeds SAST, DAST, SCA, and container image scanning, with
              security gates enforcing safe deployments.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 text-[10px] text-[#6b7280] pt-1">
            {["GitLab CI/CD", "DevSecOps", "SAST", "DAST", "SCA", "Containers"].map(
              (tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[#e5e7eb] bg-[#f5f7fb] px-2 py-0.5"
                >
                  {tag}
                </span>
              )
            )}
          </div>
          <div className="pt-2">
            <a
              href="https://vipuldevopslab.hashnode.dev/building-a-secure-devsecops-ci-cd-pipeline-with-automated-security-scanning"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-[#6366f1] bg-white px-4 py-1.5 text-[11px] font-medium text-[#6366f1] hover:bg-[#eef2ff] transition-all duration-200 transform hover:scale-[1.02]"
            >
              Read full article ↗
            </a>
          </div>
        </article>

        <div className="card p-6 space-y-3 text-xs sm:text-sm text-[#6b7280] hover:-translate-y-1 hover:shadow-md transition-all duration-200">
          <h3 className="text-sm font-semibold text-[#111827]">
            Why this article matters
          </h3>
          <ul className="list-disc list-inside space-y-1.5">
            <li>Shows practical experience implementing DevSecOps in CI/CD.</li>
            <li>
              Demonstrates understanding of security tooling and risk-based
              gating.
            </li>
            <li>
              Highlights how you think about secure delivery from commit to
              deployment.
            </li>
          </ul>
          <p className="text-[11px] text-[#9ca3af] pt-1">
            Future posts can extend this section to cover AWS architectures,
            Terraform modules, and observability patterns.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;

