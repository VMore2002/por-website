type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
};

const SectionHeading = ({ eyebrow, title, subtitle }: SectionHeadingProps) => {
  return (
    <div className="mb-6 text-center">
      {eyebrow && (
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#6366f1]">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-1 text-[24px] sm:text-[28px] font-bold tracking-tight text-[#111827]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 max-w-2xl mx-auto text-[16px] text-[#6b7280]">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;

