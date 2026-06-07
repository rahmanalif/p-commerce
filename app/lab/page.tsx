import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "./Lab.module.css";

export default function LabPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <div className="max-w-container-max-width mx-auto border-l border-r border-outline-variant min-h-screen relative flex-grow w-full">
        {/* Background Grid Lines */}
        <div className={`absolute inset-0 ${styles.grid_bg_line} opacity-20 pointer-events-none`}></div>

        {/* Hero Section */}
        <header className="border-b border-outline-variant relative z-10 bg-background/90 backdrop-blur-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
            {/* Title & Intro */}
            <div className="md:col-span-8 p-margin-mobile md:p-margin-desktop py-16 md:py-32 border-b md:border-b-0 md:border-r border-outline-variant">
              <div className="flex items-center gap-4 mb-8">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>science</span>
                <span className="font-technical-label text-technical-label text-on-surface-variant tracking-widest uppercase">FACILITY: 04-B</span>
              </div>
              <h1 className="font-display-lg text-display-lg text-on-surface mb-6 uppercase">LABORATORY</h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
                Real-time telemetry and extraction analytics. This interface provides direct oversight of active molecular distillation processes and raw material inventory status.
              </p>
            </div>

            {/* Live Data Readout */}
            <div className="md:col-span-4 p-margin-mobile md:p-margin-desktop py-16 md:py-32 bg-surface-container-low flex flex-col justify-end">
              <div className="font-technical-label text-technical-label text-on-surface-variant mb-6">ENVIRONMENTAL SENSORS</div>
              <div className="space-y-4 font-technical-value text-technical-value text-on-surface">
                <div className="flex justify-between border-b border-outline-variant pb-2">
                  <span className="">NETWORK STATUS</span>
                  <span className="text-primary animate-pulse">● ONLINE</span>
                </div>
                <div className="flex justify-between border-b border-outline-variant pb-2">
                  <span className="">ATMOSPHERIC PRESSURE</span>
                  <span className="">1.013 BAR</span>
                </div>
                <div className="flex justify-between border-b border-outline-variant pb-2">
                  <span className="">AMBIENT TEMP</span>
                  <span className="">19.4°C</span>
                </div>
                <div className="flex justify-between border-b border-outline-variant pb-2">
                  <span className="">RELATIVE HUMIDITY</span>
                  <span className="">42%</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Technical Content Grid */}
        <main className="grid grid-cols-1 md:grid-cols-12 gap-0 relative z-10 border-b border-outline-variant bg-background">
          {/* Left Pane: Active Extractions */}
          <section className="md:col-span-8 border-b md:border-b-0 md:border-r border-outline-variant">
            <div className="p-4 md:p-8 border-b border-outline-variant flex justify-between items-center bg-surface-container-lowest">
              <h2 className="font-headline-sm text-headline-sm text-on-surface uppercase">Active Extractions</h2>
              <span className="font-technical-label text-technical-label text-on-surface-variant">2 PROCESSES RUNNING</span>
            </div>

            {/* Visual Anchor Image */}
            <div className="w-full h-64 border-b border-outline-variant bg-surface-container-high relative overflow-hidden">
              <img 
                alt="Technical extraction visualization" 
                className="w-full h-full object-cover mix-blend-luminosity opacity-80 filter grayscale" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqSkHDe0VpWnfJIiNXPhxED6FKdBsU-_45expB1rqtZ-91FJgQTZ104BJ8LMArq4-oElE3S6snPS_pSnri5kcnVzahR1i1ubUDETzL_70Mep4F4owOfNMBL_JbP9DoCnsCvIrqWNeztgYl_epY9LFffBsnPZpGYNyzPletIjC8CItF3BjMcHd_z43n6z6iS9ee2u3ItDyhc5wTkypzSLsoaey8DTKrw-qtMEiUGf38Ibf-F0PfIQcr7wrGU2O7-FBuw3iToDIFtt0" 
              />
              <div className="absolute bottom-4 left-4 font-technical-value text-technical-value text-white mix-blend-difference">
                VISUAL: MOLECULAR DISTILLATION FEED
              </div>
            </div>

            {/* Extraction Grids */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              {/* Unit Alpha */}
              <article className="p-6 md:p-8 border-b md:border-b-0 border-r-0 md:border-r border-outline-variant hover:bg-surface-container-low transition-colors">
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <div className="font-technical-label text-technical-label text-on-surface-variant mb-1">UNIT ALPHA</div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface uppercase">Haitian Vetiver</h3>
                  </div>
                  <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 0" }}>water_drop</span>
                </div>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between font-technical-value text-technical-value text-on-surface mb-2">
                      <span className="">YIELD EFFICIENCY</span><span className="">82.4%</span>
                    </div>
                    <div className="w-full bg-surface-container-highest h-[2px]">
                      <div className="bg-primary h-[2px] w-[82.4%]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between font-technical-value text-technical-value text-on-surface mb-2">
                      <span className="">VISCOSITY INDEX</span><span className="">4.2 cP</span>
                    </div>
                    <div className="w-full bg-surface-container-highest h-[2px]">
                      <div className="bg-on-surface h-[2px] w-[45%]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between font-technical-value text-technical-value text-on-surface mb-2">
                      <span className="">THERMAL LOAD</span><span className="">68°C</span>
                    </div>
                    <div className="w-full bg-surface-container-highest h-[2px]">
                      <div className="bg-on-surface h-[2px] w-[68%]"></div>
                    </div>
                  </div>
                </div>
              </article>

              {/* Unit Beta */}
              <article className="p-6 md:p-8 hover:bg-surface-container-low transition-colors">
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <div className="font-technical-label text-technical-label text-on-surface-variant mb-1">UNIT BETA</div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface uppercase">Ambroxan Crystalline</h3>
                  </div>
                  <span className="material-symbols-outlined text-on-surface-variant" style={{ fontVariationSettings: "'FILL' 0" }}>view_in_ar</span>
                </div>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between font-technical-value text-technical-value text-on-surface mb-2">
                      <span className="">PURITY THRESHOLD</span><span className="">99.1%</span>
                    </div>
                    <div className="w-full bg-surface-container-highest h-[2px]">
                      <div className="bg-primary h-[2px] w-[99.1%]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between font-technical-value text-technical-value text-on-surface mb-2">
                      <span className="">CRYSTALLIZATION RATE</span><span className="">1.2 g/m</span>
                    </div>
                    <div className="w-full bg-surface-container-highest h-[2px]">
                      <div className="bg-on-surface h-[2px] w-[30%]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between font-technical-value text-technical-value text-on-surface mb-2">
                      <span className="">PRESSURE DELTA</span><span className="">-0.4 ATM</span>
                    </div>
                    <div className="w-full bg-surface-container-highest h-[2px]">
                      <div className="bg-on-surface h-[2px] w-[15%]"></div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </section>

          {/* Right Pane: Raw Ingredients */}
          <aside className="md:col-span-4 bg-surface-bright flex flex-col h-full">
            <div className="p-4 md:p-8 border-b border-outline-variant bg-surface-container-lowest sticky top-0 z-20">
              <h2 className="font-headline-sm text-headline-sm text-on-surface uppercase">Raw Ingredients</h2>
            </div>
            <ul className="flex-grow divide-y divide-outline-variant font-technical-value text-technical-value overflow-y-auto" style={{ maxHeight: '800px' }}>
              {[
                { name: "Iso E Super", amount: "440.5 KG", tags: ["Synthetic", "Woody"] },
                { name: "Sandalwood Album", amount: "12.0 KG", tags: ["Natural", "India"] },
                { name: "Bergamot (Reggio)", amount: "85.2 KG", tags: ["Cold Pressed", "Citrus"] },
                { name: "Oakmoss Absolute", amount: "DEPLETED", tags: ["Extraction", "Earthy"], depleted: true },
                { name: "Hedione", amount: "210.0 KG", tags: ["Synthetic", "Floral / Air"] },
              ].map((ing, i) => (
                <li key={i} className={`p-4 md:p-6 hover:bg-surface-container-low transition-colors group cursor-pointer ${ing.depleted ? 'opacity-50' : ''}`}>
                  <div className="flex justify-between items-center mb-2">
                    <span className={`text-on-surface font-bold uppercase transition-colors ${!ing.depleted ? 'group-hover:text-primary' : ''}`}>{ing.name}</span>
                    <span className={ing.depleted ? 'text-primary' : 'text-on-surface-variant'}>{ing.amount}</span>
                  </div>
                  <div className="flex gap-2">
                    {ing.tags.map((tag, j) => (
                      <span key={j} className="bg-surface-container-highest px-2 py-1 rounded-DEFAULT text-on-surface-variant text-[9px] uppercase tracking-wider">{tag}</span>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </aside>
        </main>

        {/* Tactical Action Area */}
        <section className="p-margin-mobile md:p-margin-desktop py-16 md:py-24 flex justify-center items-center relative z-10 bg-background">
          <div className={styles.btn_wrapper}>
            <button className={`${styles.lab_data_button} font-technical-label text-technical-label uppercase group`}>
              <span className="material-symbols-outlined text-[18px] group-hover:animate-spin" style={{ fontVariationSettings: "'FILL' 0" }}>sync</span>
              <span>ACCESS FULL LAB DATA</span>
            </button>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
