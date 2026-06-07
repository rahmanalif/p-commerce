import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-grid w-full mt-auto">
      <div className="max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-gutter">
          {/* Brand & Tagline */}
          <div className="md:col-span-6 flex flex-col space-y-4">
            <span className="text-headline-md font-bold text-on-surface uppercase tracking-tighter">
              PERFUME FIELD
            </span>
            <p className="font-technical-label text-technical-label text-on-surface-variant tracking-widest uppercase">
              ENGINEERED FOR SENSORY PRECISION.
            </p>
          </div>

          {/* Navigation Columns */}
          <div className="md:col-span-3 flex flex-col space-y-4">
            <span className="font-technical-label text-technical-label text-on-surface-variant tracking-widest uppercase border-b border-grid pb-2">
              SUPPORT
            </span>
            <nav className="flex flex-col space-y-2">
              <Link
                href="#"
                className="font-technical-label text-technical-label uppercase text-on-surface hover:text-primary transition-colors"
              >
                Terms
              </Link>
              <Link
                href="#"
                className="font-technical-label text-technical-label uppercase text-on-surface hover:text-primary transition-colors"
              >
                Shipping
              </Link>
              <Link
                href="#"
                className="font-technical-label text-technical-label uppercase text-on-surface hover:text-primary transition-colors"
              >
                Returns
              </Link>
            </nav>
          </div>

          <div className="md:col-span-3 flex flex-col space-y-4">
            <span className="font-technical-label text-technical-label text-on-surface-variant tracking-widest uppercase border-b border-grid pb-2">
              NETWORK
            </span>
            <nav className="flex flex-col space-y-2">
              <Link
                href="#"
                className="font-technical-label text-technical-label uppercase text-on-surface hover:text-primary transition-colors"
              >
                Stores
              </Link>
              <Link
                href="#"
                className="font-technical-label text-technical-label uppercase text-on-surface hover:text-primary transition-colors"
              >
                Instagram
              </Link>
              <Link
                href="#"
                className="font-technical-label text-technical-label uppercase text-on-surface hover:text-primary transition-colors"
              >
                Newsletter
              </Link>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-grid flex flex-col md:flex-row justify-between items-center">
          <span className="font-technical-label text-technical-label uppercase text-on-surface-variant tracking-widest">
            © 2024 PERFUME FIELD. ALL RIGHTS RESERVED.
          </span>
          <div className="flex items-center mt-4 md:mt-0">
            <span className="w-2 h-2 rounded-full bg-primary mr-2 animate-pulse"></span>
            <span className="font-technical-value text-technical-value text-on-surface uppercase tracking-widest">
              SYSTEM ONLINE
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
