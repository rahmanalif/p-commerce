import Link from "next/link";

export default function AuthNavbar() {
  return (
    <nav className="w-full px-margin-mobile md:px-margin-desktop py-4">
      <div className="max-w-container-max-width mx-auto bg-white rounded-b-2xl shadow-sm border border-outline-variant/30 flex justify-between items-center px-8 py-5">
        {/* Brand */}
        <Link
          className="font-headline-sm text-[20px] font-bold text-on-surface tracking-tight uppercase"
          href="/"
        >
          PERFUME FIELD
        </Link>

        {/* Action */}
        <Link
          className="font-technical-label text-[10px] uppercase tracking-[0.2em] text-on-surface-variant hover:text-primary transition-colors duration-150 flex items-center gap-2"
          href="/"
        >
          <span className="material-symbols-outlined text-[14px]">arrow_back</span>
          RETURN TO SYSTEM
        </Link>
      </div>
    </nav>
  );
}
