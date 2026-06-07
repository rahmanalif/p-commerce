import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function ScentDetailPage({ params }: Props) {
  const { id } = await params;

  // Mock data for the specific scent based on the provided design
  // In a real app, this would be fetched from a DB or CMS
  const scent = {
    id: id,
    name: "INDUSTRIAL IRIS",
    no: "01",
    price: "$185.00",
    description:
      "A brutalist interpretation of classical floristry. Engineered with concrete synthetics and absolute iris root. It opens sharp and settles into a cold, powdery finish reminiscent of sterile machinery.",
    top: "OZONE, ALDEHYDE",
    heart: "IRIS PALLIDA, DUST",
    base: "ISO E SUPER, CONCRETE",
    volume: "50ML / 1.7 FL.OZ",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuArCH3VieI-Q5LlJJZHkOr31-sntmDT5SxBZCk52r5BJ_FVhzdFkTyOfqIdqHNS-rGT8-y15bDWKz7ZxG9dzKzljwrL8aS5OuRB84jk0bR-YWDIYE-x0bwl3YrNnW81vhgpJ5SkvmbYFAnenCOKrPb4lf3YmlmBVLfqwwKmddrcgRJ8fWyB52MTtHmQ-36s5b6RXnamB7BcmoNy9Wwig-KSRJgcfPfro33u9ZF7GjkKATLE9VeIApjxznV-r1GjHennuXoOZwR0q-o",
  };

  return (
    <div className="flex-grow flex flex-col antialiased">
      <Navbar />
      <main className="flex-grow w-full max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-px bg-outline-variant">
          {/* Image Column */}
          <div className="md:col-span-7 bg-background p-4 md:p-8 flex items-center justify-center min-h-[512px] md:min-h-[819px]">
            <div className="relative w-full h-full aspect-[3/4] md:aspect-square">
              <img
                alt={`${scent.name} product`}
                className="w-full h-full object-cover rounded-sm grayscale contrast-125"
                src={scent.image}
              />
              {/* Overlay Specs */}
              <div className="absolute bottom-4 left-4 font-technical-value text-technical-value text-on-secondary mix-blend-difference uppercase">
                FIG. {scent.no} / PROTOTYPE
                <br />
                VOL: {scent.volume}
              </div>
            </div>
          </div>

          {/* Details Column */}
          <div className="md:col-span-5 bg-background p-6 md:p-12 flex flex-col justify-between border-t md:border-t-0 border-outline-variant md:border-l">
            <div>
              {/* Breadcrumb / Meta */}
              <div className="flex items-center space-x-2 font-technical-label text-technical-label text-on-surface-variant mb-8 uppercase">
                <Link href="/scents" className="hover:text-primary transition-colors">
                  SCENTS
                </Link>
                <span className="text-outline">/</span>
                <span className="text-primary">
                  {scent.no}_{scent.name.replace(/\s+/g, "_")}
                </span>
              </div>
              {/* Title */}
              <h1 className="font-display-lg text-display-lg text-on-surface mb-6 uppercase tracking-tighter">
                SCENT {scent.no}
                <br />
                <span className="text-on-surface-variant font-headline-md text-headline-md block mt-2">
                  {scent.name}
                </span>
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-12 max-w-md">
                {scent.description}
              </p>
              {/* Technical Specs / Accordion style */}
              <div className="border-t border-outline-variant py-4">
                <div className="font-technical-label text-technical-label text-on-surface uppercase mb-4 flex justify-between">
                  <span className="">Olfactive Profile</span>
                  <span className="text-on-surface-variant">DATA</span>
                </div>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div>
                    <div className="font-technical-label text-technical-label text-on-surface-variant mb-1">
                      TOP
                    </div>
                    <div className="font-technical-value text-technical-value text-on-surface">
                      {scent.top}
                    </div>
                  </div>
                  <div>
                    <div className="font-technical-label text-technical-label text-on-surface-variant mb-1">
                      HEART
                    </div>
                    <div className="font-technical-value text-technical-value text-on-surface">
                      {scent.heart}
                    </div>
                  </div>
                  <div>
                    <div className="font-technical-label text-technical-label text-on-surface-variant mb-1">
                      BASE
                    </div>
                    <div className="font-technical-value text-technical-value text-on-surface">
                      {scent.base}
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-t border-outline-variant py-4">
                <div className="font-technical-label text-technical-label text-on-surface uppercase mb-4 flex justify-between">
                  <span className="">Intensity Meter</span>
                  <span className="text-on-surface-variant">HIGH</span>
                </div>
                <div className="flex gap-1 h-2 w-full max-w-xs">
                  <div className="flex-1 bg-primary"></div>
                  <div className="flex-1 bg-primary"></div>
                  <div className="flex-1 bg-primary"></div>
                  <div className="flex-1 bg-primary"></div>
                  <div className="flex-1 bg-surface-container-high"></div>
                </div>
              </div>
            </div>
            {/* Action Area */}
            <div className="mt-12 pt-8 border-t border-outline-variant">
              <div className="flex justify-between items-end mb-6">
                <div className="font-headline-md text-headline-md text-on-surface">
                  {scent.price}
                </div>
                <div className="font-technical-label text-technical-label text-on-surface-variant uppercase">
                  IN STOCK
                </div>
              </div>
              {/* Tactical Record Button */}
              <button className="btn-tactical w-full py-6 font-technical-label text-technical-label uppercase tracking-widest flex justify-center items-center gap-2">
                <span
                  className="material-symbols-outlined"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  add
                </span>
                ADD TO CART
              </button>
              <div className="text-center mt-4 font-technical-label text-technical-label text-on-surface-variant uppercase">
                FREE SHIPPING ON DOMESTIC ORDERS
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
