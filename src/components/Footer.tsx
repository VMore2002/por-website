const Footer = () => {
  return (
    <footer className="border-t border-[#e5e7eb] bg-white mt-8">
      <div className="section-container py-6 text-center text-xs sm:text-sm text-[#6b7280]">
        <p>© {new Date().getFullYear()} Vipul More. All rights reserved.</p>
        <p className="mt-1 text-[11px]">
          Built with React, Vite, TypeScript, and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

