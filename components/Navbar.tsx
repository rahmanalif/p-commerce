"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

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
          onClick={() => setIsMobileMenuOpen(false)}
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
            className="hidden md:block font-technical-label text-technical-label uppercase tracking-widest text-on-surface hover:text-primary transition-colors duration-150"
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
          <button 
            className="md:hidden text-on-surface focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span
              className="material-symbols-outlined"
              style={{ fontVariationSettings: "'FILL' 0" }}
            >
              {isMobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-[65px] bg-background z-40 md:hidden flex flex-col p-margin-mobile animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-8 mt-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`font-display-lg text-headline-md font-bold tracking-tight ${
                    isActive ? "text-primary" : "text-on-surface"
                  }`}
                  href={link.href}
                >
                  {link.name}
                </Link>
              );
            })}
            
            <div className="pt-8 border-t border-surface-container-highest flex flex-col space-y-6">
              <Link 
                className="font-technical-label text-technical-label uppercase tracking-widest text-on-surface"
                href="/login"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                LOGIN / REGISTER
              </Link>
              <div className="flex items-center gap-4 text-on-surface-variant border border-surface-container-highest p-4">
                <span className="material-symbols-outlined text-[20px]">search</span>
                <input
                  className="bg-transparent border-none focus:ring-0 p-0 text-body-md placeholder:text-on-surface-variant w-full outline-none"
                  placeholder="SEARCH THE COLLECTION"
                  type="text"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
