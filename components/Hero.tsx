import Link from "next/link";
import Image from "next/image";
import LabButton from "./LabButton";

export default function Hero() {
  return (
    <section className="relative w-full h-[calc(100vh-73px)] min-h-[600px] flex flex-col items-center justify-center border-b border-grid overflow-hidden bg-surface-container-lowest">
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/screen.png"
          alt="Perfume bottle in laboratory setting"
          fill
          priority
          className="object-cover"
        />
        {/* Subtle vignette/overlay for text legibility if needed */}
        <div className="absolute inset-0 bg-background/20"></div>
      </div>
      <div className="relative z-10 text-center px-6 mt-auto mb-16 md:mb-24 lg:mb-32 xl:mb-40">
        <h1 className="text-[48px] md:text-[80px] lg:text-[96px] xl:text-[100px] 2xl:text-[120px] font-bold text-on-surface tracking-tighter leading-none mix-blend-difference text-white">
          worth smelling.
        </h1>
        <p className="mt-6 font-body-lg text-body-lg max-w-2xl mx-auto text-on-surface bg-background/80 p-4 rounded-sm backdrop-blur-sm border border-surface-variant">
          field recorder for the senses. engineered to capture the ephemeral.
        </p>
        <div className="mt-12">
          <Link href="#store">
            <LabButton />
          </Link>
        </div>
      </div>
    </section>
  );
}
