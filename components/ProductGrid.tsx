import Link from "next/link";

export default function ProductGrid() {
  return (
    <section
      className="w-full max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop py-16"
      id="store"
    >
      <div className="flex justify-between items-end mb-8 border-b border-grid pb-4">
        <h3 className="font-technical-label text-technical-label uppercase tracking-widest text-on-surface-variant">
          LATEST EXTRACTIONS
        </h3>
        <span className="font-technical-value text-technical-value text-on-surface-variant">
          04 ITEMS
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter bg-surface-container-high border border-grid p-gutter">
        {/* Product 1: Large Feature */}
        <Link
          className="group block col-span-1 md:col-span-8 bg-background relative overflow-hidden border border-grid transition-all hover:border-outline p-6 flex flex-col justify-between min-h-[500px]"
          href="#"
        >
          <div className="absolute inset-0 bg-surface-container-lowest opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          <div className="flex justify-between items-start relative z-10">
            <div className="space-y-2">
              <span className="inline-block bg-surface-container-high px-2 py-1 font-technical-label text-technical-label text-on-surface-variant rounded-sm">
                01 / INDUSTRIAL
              </span>
              <h4 className="font-headline-sm text-headline-sm text-on-surface mt-2">
                CONCRETE RAIN
              </h4>
            </div>
            <span className="font-technical-value text-technical-value border border-on-surface px-2 py-1">
              $180
            </span>
          </div>
          <div className="relative w-full h-64 my-8 flex items-center justify-center">
            <img
              alt="Concrete Rain Product"
              className="max-h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQ5HLQ7PDxq5PsVSQvpwu5Zwt49RtHg9ev6Tv5A3HX2kRNky7_ZcSd_vj60sBFNbS819NgaWCvQLG2Lfz8kp215F1HwLRh2iDm1dCQBPDm5LVYBf0UW0rvKtXupnjjcLzREBZIp5HSs9XEAYK2vbWU_rc2OKmSzC_tsttNrWRiW_msbbwPQRQt3XjhoMsfkVXtix06Nj1_dwQRYQXskd6TG3dorU4VzVtyc_YsxwGUIZFj_MWH6S2xmMB_b5xyuTaEiFFWaUrWAIo"
            />
          </div>
          <div className="flex justify-between items-end relative z-10">
            <div className="font-technical-value text-technical-value text-on-surface-variant">
              50ML / 1.7 FL.OZ <br />
              EXTRACT DE PARFUM
            </div>
            <Link 
              href="/cart"
              className="font-technical-label text-technical-label uppercase text-primary group-hover:underline"
            >
              ADD TO CART
            </Link>
          </div>

        </Link>

        {/* Product 2: Side Item */}
        <Link
          className="group block col-span-1 md:col-span-4 bg-background relative overflow-hidden border border-grid transition-all hover:border-outline p-6 flex flex-col justify-between min-h-[500px]"
          href="#"
        >
          <div className="flex justify-between items-start relative z-10">
            <div className="space-y-2">
              <span className="inline-block bg-surface-container-high px-2 py-1 font-technical-label text-technical-label text-on-surface-variant rounded-sm">
                02 / BOTANICAL
              </span>
              <h4 className="font-headline-sm text-headline-sm text-on-surface mt-2">
                SYNTHETIC FLORA
              </h4>
            </div>
          </div>
          <div className="relative w-full h-48 my-auto flex items-center justify-center">
            <img
              alt="Synthetic Flora Product"
              className="max-h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDigln6lKVsAXc7HvyrwFt0gZypFnVPGWv-5CWV-uHJbGYeDxioTwZRpm8sXHYKYKCjQetaMl9RKm-rOsiawSdO2KCvmsMpl_lmarDFdYJJOJC9vjXi_RVaDQh38QU13yudRmEyBR0ycMDS3evwSNrdRfYzvoexPDbpMRPYQq5ReJiZd4iBRCqWNKcRQ5DQzIEA4IPUBQq2uOagezhrZf7nibswG5mWK86C_3gLY_LLSFxavjkye4dCr4A-M5pOU1AavqspTPgIdtE"
            />
          </div>
          <div className="flex justify-between items-end relative z-10 mt-4">
            <div className="font-technical-value text-technical-value text-on-surface-variant">
              50ML / 1.7 FL.OZ <br />
              $160
            </div>
            <div className="font-technical-label text-technical-label uppercase text-on-surface group-hover:text-primary transition-colors">
              VIEW
            </div>
          </div>
        </Link>

        {/* Product 3: Bottom Left */}
        <Link
          className="group block col-span-1 md:col-span-6 bg-background relative overflow-hidden border border-grid transition-all hover:border-outline p-6 flex flex-col justify-between h-[400px]"
          href="#"
        >
          <div className="flex justify-between items-start relative z-10">
            <div className="space-y-2">
              <span className="inline-block bg-surface-container-high px-2 py-1 font-technical-label text-technical-label text-on-surface-variant rounded-sm">
                03 / ATMOSPHERE
              </span>
              <h4 className="font-headline-sm text-headline-sm text-on-surface mt-2">
                WHITE NOISE
              </h4>
            </div>
          </div>
          <div className="relative w-full h-32 my-auto flex items-center justify-center">
            <img
              alt="White Noise Product"
              className="max-h-full object-contain mix-blend-multiply group-hover:-translate-y-2 transition-transform duration-500"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaKIUHdtdiO9uvYUk5dOI1QdygA_dh0HJv8iHDd6dq6017YeXzID3qkFb_X5YpIZKPWixxXw4W663g9TqMYEk844716CcLjeaeFOPPvZebG65mOXkdX8yVmYx02ZG9-88hGy1XOZyBKJDny4eUjznqAo0HgZDn1eyHxuYPyXyufxxuR426vWNck-R0X8awV-9TWS3bV7YY2pVlPmS-tYatsCxrhZBXoAliTQswOomt7BKtnFXXPcK3O4R8D-vkp-JrXpuO9_3ibKE"
            />
          </div>
          <div className="flex justify-between items-end relative z-10">
            <div className="font-technical-value text-technical-value text-on-surface-variant">
              30ML / 1.0 FL.OZ <br />
              $120
            </div>
          </div>
        </Link>

        {/* Product 4: Bottom Right */}
        <Link
          className="group block col-span-1 md:col-span-6 bg-background relative overflow-hidden border border-grid transition-all hover:border-outline p-6 flex flex-col justify-between h-[400px]"
          href="#"
        >
          <div className="flex justify-between items-start relative z-10">
            <div className="space-y-2">
              <span className="inline-block bg-surface-container-high px-2 py-1 font-technical-label text-technical-label text-on-surface-variant rounded-sm">
                04 / ARCHIVE
              </span>
              <h4 className="font-headline-sm text-headline-sm text-on-surface mt-2">
                OZONE LAYER
              </h4>
            </div>
          </div>
          <div className="relative w-full h-32 my-auto flex items-center justify-center">
            <img
              alt="Ozone Layer Product"
              className="max-h-full object-contain mix-blend-multiply group-hover:-translate-y-2 transition-transform duration-500"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTjTeF2qSuZKg0FziXyXvjQLIJYaDMPZ53QF9ipS8T7-Pok0xe0A3Y4M7tcIq-y-0XW_I6I6XWn5t3T7Fe0NaDKJ1eiuhImVyHx6lkVS1XxzMM48M9jAgMd_DzC7kPGXMyeGmlp4iMcYA823JIvniXZ-GM2pyblvs5iTAh0W4WST6wIJz4pkcZmhQQSSbx_lHnZTV-a6N0XnmahZUtWc5kHompjf8OTwt1Rh66MWtThkCH9NQg7hOKqsjE7_seB0INRFZzmxNDs-I"
            />
          </div>
          <div className="flex justify-between items-end relative z-10">
            <div className="font-technical-value text-technical-value text-on-surface-variant">
              100ML / 3.4 FL.OZ <br />
              $210
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
