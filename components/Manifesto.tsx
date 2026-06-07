import Link from "next/link";

export default function Manifesto() {
  return (
    <section className="w-full py-24 md:py-32 px-margin-mobile md:px-margin-desktop border-b border-grid bg-background">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h2 className="font-headline-md text-headline-md text-on-surface">
          PF–1 sensory capture.
        </h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
          there are moments, environments, and fragments that – for the sake of
          memory – we need to capture and be able to return to as a reference, as
          a seed for new thoughts or just to remember another time. PF–1 is
          built for just that; to extract, preserve, and layer whatever scent,
          with zero friction in the highest possible quality. it&apos;s not just a
          fragrance; it&apos;s a dedicated piece of chemistry that&apos;ll bring your next
          brilliant stroke to reality.
        </p>
        <div className="pt-8">
          <Link
            className="font-technical-label text-technical-label uppercase tracking-widest text-primary hover:text-on-surface transition-colors duration-200"
            href="#"
          >
            discover process
          </Link>
        </div>
      </div>
    </section>
  );
}
