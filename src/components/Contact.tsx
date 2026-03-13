import { useInViewReveal } from "../hooks/useInViewReveal";
import { FiMail, FiGithub, FiLinkedin, FiDownload } from "react-icons/fi";

const Contact = () => {
  const { ref, visible } = useInViewReveal();

  const handleLinkedIn = () => {
    window.open("https://www.linkedin.com/in/vipul-more25", "_blank");
  };

  const handleDownload = () => {
    window.open("/vipul-more-resume.pdf", "_blank");
  };

  return (
    <section
      ref={ref}
      className={`transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      } bg-[linear-gradient(135deg,#3b5bdb_0%,#4c6ef5_40%,#5f3dc4_100%)] text-white py-16 md:py-24`}
    >
      <div className="max-w-[900px] mx-auto px-4 text-center">
        <h2 className="text-[28px] md:text-[36px] font-bold mb-3">
          Let&apos;s Connect
        </h2>
        <p className="text-[17px] text-white/85 max-w-[700px] mx-auto mb-10">
          Interested in discussing DevOps, cloud infrastructure, or
          collaboration opportunities?
        </p>

        <div className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-[10px] p-8 md:p-10 space-y-7">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-left">
            <div className="flex items-center gap-3 rounded-xl border border-white/15 bg-white/10 px-4 py-3.5 transition-all duration-200 hover:-translate-y-1">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15">
                <FiMail className="h-4 w-4 text-white" />
              </div>
              <div>
                <p className="text-sm font-medium text-white">Email</p>
                <a
                  href="mailto:vipulmore790@gmail.com"
                  className="text-[14px] text-white/80"
                >
                  vipulmore790@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-xl border border-white/15 bg-white/10 px-4 py-3.5 transition-all duration-200 hover:-translate-y-1">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15">
                <FiGithub className="h-4 w-4 text-white" />
              </div>
              <div>
                <p className="text-sm font-medium text-white">GitHub</p>
                <a
                  href="https://github.com/VMore2002"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[14px] text-white/80"
                >
                  @VMore2002
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-2">
            <button
              onClick={handleLinkedIn}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-[#3b5bdb] transition-all duration-200 hover:bg-[#f1f3f5] hover:-translate-y-0.5 hover:scale-[1.03]"
            >
              <FiLinkedin className="h-4 w-4" />
              <span>Connect on LinkedIn</span>
            </button>
            <button
              onClick={handleDownload}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 bg-transparent px-5 py-2.5 text-sm font-medium text-white transition-all duration-200 hover:bg-white/15 hover:scale-[1.03]"
            >
              <FiDownload className="h-4 w-4" />
              <span>Download Resume</span>
            </button>
          </div>
        </div>

        <p className="mt-7 text-[14px] text-white/70">
          © {new Date().getFullYear()} Vipul More. Built with React &amp;
          Tailwind CSS.
        </p>
      </div>
    </section>
  );
};

export default Contact;

