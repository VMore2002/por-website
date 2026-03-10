type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
};

const SectionHeading = ({ eyebrow, title, subtitle }: SectionHeadingProps) => {
  return (
    <div className="section-container mb-8">
      {eyebrow && (
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary-300">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-1 text-2xl sm:text-3xl font-semibold tracking-tight text-slate-50">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 max-w-2xl text-sm text-slate-300">{subtitle}</p>
      )}
    </div>
  );
};

export default SectionHeading;

