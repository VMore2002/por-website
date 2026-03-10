import SectionHeading from "./SectionHeading";
import { useInViewReveal } from "../hooks/useInViewReveal";

const Contact = () => {
  const { ref, visible } = useInViewReveal();

  return (
    <div
      ref={ref}
      className={`section-container transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <SectionHeading
        eyebrow="Contact"
        title="Let’s Connect"
        subtitle="Feel free to reach out for opportunities, collaborations, or just to discuss DevOps and cloud engineering."
      />

      <div className="mt-4 grid gap-8 md:grid-cols-[minmax(0,1.1fr)]">
        <div className="space-y-4 text-sm text-slate-300 max-w-xl">
          <div className="card p-4 space-y-2">
            <h3 className="text-sm font-semibold text-slate-100">
              Contact Details
            </h3>
            <ul className="space-y-1 text-xs sm:text-sm">
              <li>
                <span className="text-slate-400">Email: </span>
                <a
                  href="mailto:vipulmore790@gmail.com"
                  className="text-primary-300 hover:text-primary-200"
                >
                  vipulmore790@gmail.com
                </a>
              </li>
              <li>
                <span className="text-slate-400">Phone: </span>
                <a
                  href="tel:+919131318740"
                  className="text-primary-300 hover:text-primary-200"
                >
                  +91 91313 18740
                </a>
              </li>
              <li>
                <span className="text-slate-400">Location: </span>Pune, India
              </li>
            </ul>
          </div>

          <div className="card p-4 space-y-3">
            <h3 className="text-sm font-semibold text-slate-100">
              Online Profiles
            </h3>
            <ul className="space-y-1 text-xs sm:text-sm">
              <li>
                <span className="text-slate-400">LinkedIn: </span>
                <a
                  href="https://www.linkedin.com/in/vipul-more25"
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary-300 hover:text-primary-200"
                >
                  linkedin.com/in/vipul-more25
                </a>
              </li>
              <li>
                <span className="text-slate-400">GitHub: </span>
                <a
                  href="https://github.com/VMore2002"
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary-300 hover:text-primary-200"
                >
                  github.com/VMore2002
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

