"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: "INDEX", href: "/" },
    { name: "SCENTS", href: "/scents" },
    { name: "LAB", href: "/lab" },
    { name: "ARCHIVE", href: "/archive" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-surface-container-highest">
      <div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-4 max-w-container-max-width mx-auto">
        {/* Brand */}
        <Link
          className="font-headline-sm text-headline-sm font-bold text-on-surface tracking-tight"
          href="/"
        >
          PERFUME FIELD
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                className={`font-technical-label text-technical-label uppercase tracking-widest pb-1 transition-all duration-150 transform ${
                  isActive
                    ? "text-primary border-b border-primary -translate-y-0.5"
                    : "text-on-surface-variant hover:text-primary border-b border-transparent hover:-translate-y-0.5"
                }`}
                href={link.href}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-6">
          <div className="hidden md:flex items-center gap-2 text-on-surface-variant">
            <span className="material-symbols-outlined text-[16px]">search</span>
            <input
              className="bg-transparent border-none focus:ring-0 p-0 text-technical-label placeholder:text-on-surface-variant w-24 focus:w-32 transition-all duration-300 outline-none"
              placeholder="SEARCH"
              type="text"
            />
          </div>
          <Link 
            className="font-technical-label text-technical-label uppercase tracking-widest text-on-surface hover:text-primary transition-colors duration-150"
            href="/login"
          >
            LOGIN
          </Link>
          <Link 
            className="font-technical-label text-technical-label uppercase tracking-widest text-on-surface hover:text-primary transition-colors duration-150 flex items-center"
            href="/cart"
          >
            CART [0]
          </Link>
          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-on-surface focus:outline-none">
            <span
              className="material-symbols-outlined"
              style={{ fontVariationSettings: "'FILL' 0" }}
            >
              menu
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
}
