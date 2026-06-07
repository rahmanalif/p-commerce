import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "./Cart.module.css";

export default function CartPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-grow w-full max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Header */}
          <div className="col-span-1 lg:col-span-12 mb-8 border-b border-on-surface pb-4 flex justify-between items-end">
            <h1 className="font-display-lg text-display-lg uppercase tracking-tight">ORDER SUMMARY</h1>
            <span className="font-technical-value text-technical-value text-on-surface-variant">2 ITEMS / 100ML TOTAL</span>
          </div>

          {/* Cart Items List */}
          <div className="col-span-1 lg:col-span-8 flex flex-col gap-0 border-t border-b border-outline-variant">
            {/* Item 1 */}
            <div className="grid grid-cols-4 md:grid-cols-6 gap-4 py-6 border-b border-outline-variant last:border-b-0 items-center">
              <div className="col-span-1 md:col-span-1 aspect-square bg-surface-container flex items-center justify-center p-2 border border-outline-variant">
                <img 
                  alt="Industrial Vetiver" 
                  className="w-full h-full object-contain mix-blend-multiply" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBoM5j7lOpsZYYf-f1sSOfAWgvVTZH1VUd9lZxittKoBJMRc2_UAx1IM2h3CADLUVd5GoVVNTKkd83lUPj8FKR4LkMYhAyy3KCEXfAh4ezRRILryeFJtEoDgq71wRh61djGsfTXFCvOL7FMgN7xdNvFlsxPOia6UcilsVC_pR5cKOO0Gvs9JfZ6myC4maKzlm0PFjpoJbEz-oPixJmdHhnuu2QABfKhfL-Qkmf8zblgdrLvEyNnJxcYhwREwnm_73PnZOK8WaNzDI4" 
                />
              </div>
              <div className="col-span-3 md:col-span-3 flex flex-col justify-center px-4">
                <span className="font-technical-label text-technical-label text-on-surface-variant mb-1">PF-01</span>
                <h3 className="font-headline-sm text-headline-sm uppercase leading-none mb-2">INDUSTRIAL VETIVER</h3>
                <div className="flex gap-2 mb-2">
                  <span className="inline-block px-2 py-1 bg-surface-container-highest font-technical-value text-technical-value rounded">50ML</span>
                  <span className="inline-block px-2 py-1 bg-surface-container-highest font-technical-value text-technical-value rounded">EDP</span>
                </div>
              </div>
              <div className="col-span-2 md:col-span-1 flex items-center justify-start md:justify-center mt-4 md:mt-0">
                <div className="flex items-center border border-on-surface p-1 bg-surface">
                  <button className="w-8 h-8 flex items-center justify-center bg-surface hover:bg-surface-container-high transition-colors text-on-surface font-technical-label text-technical-label border-r border-outline-variant">
                    <span className="material-symbols-outlined text-[16px]">remove</span>
                  </button>
                  <span className="w-8 text-center font-technical-value text-technical-value">1</span>
                  <button className="w-8 h-8 flex items-center justify-center bg-surface hover:bg-surface-container-high transition-colors text-on-surface font-technical-label text-technical-label border-l border-outline-variant">
                    <span className="material-symbols-outlined text-[16px]">add</span>
                  </button>
                </div>
              </div>
              <div className="col-span-2 md:col-span-1 flex flex-col items-end justify-center mt-4 md:mt-0">
                <span className="font-body-lg text-body-lg mb-2">$185.00</span>
                <button className="font-technical-label text-technical-label text-on-surface-variant hover:text-primary uppercase flex items-center gap-1 transition-colors">
                  <span className="material-symbols-outlined text-[14px]">close</span> REMOVE
                </button>
              </div>
            </div>

            {/* Item 2 */}
            <div className="grid grid-cols-4 md:grid-cols-6 gap-4 py-6 border-b border-outline-variant last:border-b-0 items-center">
              <div className="col-span-1 md:col-span-1 aspect-square bg-surface-container flex items-center justify-center p-2 border border-outline-variant">
                <img 
                  alt="Synthetic Oud" 
                  className="w-full h-full object-contain mix-blend-multiply" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkCj1c3WN4EIyw21o2UPQ0msGKIWOZbFT16LZ50rQALaWmBf6rhHvoQUJ10SkF3ZMmB9LMZuOvijq7NiEg-NaQ8dfgRHdNS1j0j9ZiTX0WVZ33EZbBk10KGdvyKDWM1CHVWeJT5xWfbBIXfv29o-Ji8tWvMQ9OGIyW4rmbgA2EaQaVvqTIxqsrsUYz77_ZbGk8jRTSXMRpGXqDR8ljpOf9Xs88B-9Cb-xjj7Vsc4Tc9M5WLvaZxWJzIni7AaWlBN-VO447jZraZJc" 
                />
              </div>
              <div className="col-span-3 md:col-span-3 flex flex-col justify-center px-4">
                <span className="font-technical-label text-technical-label text-on-surface-variant mb-1">PF-04</span>
                <h3 className="font-headline-sm text-headline-sm uppercase leading-none mb-2">SYNTHETIC OUD</h3>
                <div className="flex gap-2 mb-2">
                  <span className="inline-block px-2 py-1 bg-surface-container-highest font-technical-value text-technical-value rounded">50ML</span>
                  <span className="inline-block px-2 py-1 bg-surface-container-highest font-technical-value text-technical-value rounded">EXTRAIT</span>
                </div>
              </div>
              <div className="col-span-2 md:col-span-1 flex items-center justify-start md:justify-center mt-4 md:mt-0">
                <div className="flex items-center border border-on-surface p-1 bg-surface">
                  <button className="w-8 h-8 flex items-center justify-center bg-surface hover:bg-surface-container-high transition-colors text-on-surface font-technical-label text-technical-label border-r border-outline-variant">
                    <span className="material-symbols-outlined text-[16px]">remove</span>
                  </button>
                  <span className="w-8 text-center font-technical-value text-technical-value">1</span>
                  <button className="w-8 h-8 flex items-center justify-center bg-surface hover:bg-surface-container-high transition-colors text-on-surface font-technical-label text-technical-label border-l border-outline-variant">
                    <span className="material-symbols-outlined text-[16px]">add</span>
                  </button>
                </div>
              </div>
              <div className="col-span-2 md:col-span-1 flex flex-col items-end justify-center mt-4 md:mt-0">
                <span className="font-body-lg text-body-lg mb-2">$240.00</span>
                <button className="font-technical-label text-technical-label text-on-surface-variant hover:text-primary uppercase flex items-center gap-1 transition-colors">
                  <span className="material-symbols-outlined text-[14px]">close</span> REMOVE
                </button>
              </div>
            </div>
          </div>

          {/* Summary Section */}
          <div className="col-span-1 lg:col-span-4 bg-surface-container-low border border-outline-variant p-8 flex flex-col justify-between h-fit sticky top-24">
            <div>
              <h2 className="font-headline-sm text-headline-sm uppercase mb-6 border-b border-on-surface pb-2">TRANSACTION DATA</h2>
              <div className="flex justify-between items-center mb-4 font-technical-value text-technical-value">
                <span className="text-on-surface-variant">SUBTOTAL</span>
                <span className="">$425.00</span>
              </div>
              <div className="flex justify-between items-center mb-4 font-technical-value text-technical-value">
                <span className="text-on-surface-variant">SHIPPING (STANDARD)</span>
                <span className="">CALCULATED AT CHECKOUT</span>
              </div>
              <div className="flex justify-between items-center mb-6 font-technical-value text-technical-value">
                <span className="text-on-surface-variant">TAX</span>
                <span className="">CALCULATED AT CHECKOUT</span>
              </div>
              <div className="w-full h-px bg-outline-variant mb-6"></div>
              <div className="flex justify-between items-end mb-8">
                <span className="font-technical-label text-technical-label uppercase">TOTAL (USD)</span>
                <span className="font-headline-md text-headline-md leading-none">$425.00</span>
              </div>
            </div>

            {/* Tactical Primary Action */}
            <div className={styles.btn_wrapper}>
              <button className={`${styles.checkout_button} font-technical-label text-technical-label uppercase group`}>
                <span>INITIATE CHECKOUT</span>
                <span className="material-symbols-outlined transform group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </button>
            </div>
            <p className="font-technical-value text-technical-value text-center text-on-surface-variant mt-4 opacity-70">SECURE ENCRYPTED CONNECTION</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
