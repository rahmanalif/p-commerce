import Link from "next/link";
import LabButton from "./LabButton";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[819px] flex flex-col items-center justify-center border-b border-grid overflow-hidden bg-surface-container-lowest">
      <div className="absolute inset-0 w-full h-full">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB8xQN6SEHzzCdyY5eNSRR8xuZu41xL3mm3Gs3oGqVai2bM9DvEVRC0imOfVHJRq_y2HMhH8sxtZOdJnzp_UInVaWp2HW9Vssy5pyUk1YCgo27EbTFtruiT4kWoG1yqR_v6JMedlIwfELV0hJYlaZeRJuJpeT1uJXbTTdIHwJqrc5rcwsXinHh91YqTTPCVl2oLDv41OgU-dEju8UEKpL4qIHjsTUkxvKKa7OukJ-xXcb1zOnUNwXBDCJ5Vypz38-DyiY3rrwM8vcg')",
          }}
        ></div>
        {/* Subtle vignette/overlay for text legibility if needed */}
        <div className="absolute inset-0 bg-background/20"></div>
      </div>
      <div className="relative z-10 text-center px-6 mt-auto mb-32 md:mb-48">
        <h1 className="text-[48px] md:text-[80px] lg:text-[120px] font-bold text-on-surface tracking-tighter leading-none mix-blend-difference text-white">
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
