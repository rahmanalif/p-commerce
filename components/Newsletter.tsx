import Link from "next/link";
import styles from "./Newsletter.module.css";

export default function Newsletter() {
  return (
    <section className="w-full border-t border-grid mt-16">
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-container-max-width mx-auto">
        {/* Left: Interactive/Visual Element */}
        <div className="p-margin-desktop border-b md:border-b-0 md:border-r border-grid bg-surface-container-low flex flex-col justify-center items-center min-h-[400px]">
          <div className="text-center space-y-4">
            <span
              className="material-symbols-outlined text-[64px] text-on-surface-variant"
              style={{ fontVariationSettings: "'wght' 200" }}
            >
              tune
            </span>
            <h3 className="font-headline-sm text-headline-sm">
              CALIBRATE YOUR SENSES
            </h3>
            <p className="font-technical-value text-technical-value text-on-surface-variant max-w-xs mx-auto">
              Explore the raw data behind our extractions. Viscosity, volatility,
              and molecular weight logs available in the lab.
            </p>
            <button className="mt-4 border border-on-surface text-on-surface font-technical-label text-technical-label uppercase px-6 py-2 hover:bg-on-surface hover:text-background transition-colors">
              ACCESS LAB DATA
            </button>
          </div>
        </div>
        {/* Right: Newsletter form */}
        <div className="p-margin-desktop bg-background flex flex-col justify-center">
          <h3 className="font-technical-label text-technical-label uppercase tracking-widest text-on-surface mb-6">
            SIGNAL INTERCEPT (NEWSLETTER)
          </h3>
          <form className="space-y-6 max-w-md">
            <div className="relative">
              <input
                className="block w-full border-0 border-b border-on-surface bg-transparent py-2 px-0 text-on-surface font-body-md focus:ring-0 focus:border-primary peer placeholder-transparent"
                id="email"
                placeholder="EMAIL ADDRESS"
                required
                type="email"
              />
              <label
                className="absolute left-0 -top-3.5 text-on-surface-variant font-technical-label text-technical-label transition-all peer-placeholder-shown:text-body-md peer-placeholder-shown:font-body-md peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-technical-label peer-focus:font-technical-label peer-focus:text-primary"
                htmlFor="email"
              >
                EMAIL ADDRESS
              </label>
            </div>
            <div className={styles.btn_wrapper}>
              <button
                className={`${styles.subscribe_button} font-technical-label text-technical-label uppercase`}
                type="submit"
              >
                <span>SUBSCRIBE</span>
                <span className="material-symbols-outlined text-[16px]">
                  arrow_forward
                </span>
              </button>
            </div>
            <p className="font-technical-value text-technical-value text-on-surface-variant">
              By subscribing, you agree to our{" "}
              <Link className="underline hover:text-primary" href="#">
                Terms of Service
              </Link>
              . No spam, only signal.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
