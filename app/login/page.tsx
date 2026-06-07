import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import styles from "./Auth.module.css";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center py-24 px-margin-mobile md:px-margin-desktop relative overflow-hidden">
        {/* Subtle grid background effect */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-[0.03]" 
          style={{ 
            backgroundImage: "linear-gradient(var(--tw-colors-on-surface) 1px, transparent 1px), linear-gradient(90deg, var(--tw-colors-on-surface) 1px, transparent 1px)", 
            backgroundSize: "40px 40px" 
          }}
        ></div>
        
        <div className="w-full max-w-md relative z-10 border border-surface-dim bg-surface-container-lowest p-8 md:p-12 shadow-sm rounded-DEFAULT">
          <div className="mb-12 text-center">
            <span className="material-symbols-outlined text-4xl mb-4 text-on-surface">fingerprint</span>
            <h1 className="font-headline-md text-headline-md font-bold text-on-surface tracking-tight uppercase mb-2">ENGINEERED ACCESS</h1>
            <p className="font-technical-value text-technical-value text-on-surface-variant">SECURE AUTHENTICATION PROTOCOL // PF-SYS</p>
          </div>
          
          <form className="space-y-8">
            {/* Input Group: Email */}
            <div className="relative">
              <label className="block font-technical-label text-technical-label uppercase text-on-surface mb-2 tracking-widest" htmlFor="email">
                [EMAIL_ADDRESS]
              </label>
              <input 
                className="w-full bg-transparent border-0 border-b border-on-surface text-on-surface font-body-md text-body-md py-2 px-0 focus:ring-0 focus:border-primary transition-colors placeholder-surface-dim rounded-none" 
                id="email" 
                name="email" 
                placeholder="INPUT DATA..." 
                required 
                type="email"
              />
            </div>
            
            {/* Input Group: Password */}
            <div className="relative">
              <label className="block font-technical-label text-technical-label uppercase text-on-surface mb-2 tracking-widest flex justify-between" htmlFor="password">
                <span>[AUTH_TOKEN / PASSWORD]</span>
                <Link className="text-on-surface-variant hover:text-primary underline decoration-1 underline-offset-2" href="#">RESET</Link>
              </label>
              <input 
                className="w-full bg-transparent border-0 border-b border-on-surface text-on-surface font-body-md text-body-md py-2 px-0 focus:ring-0 focus:border-primary transition-colors placeholder-surface-dim rounded-none" 
                id="password" 
                name="password" 
                placeholder="••••••••••••" 
                required 
                type="password"
              />
            </div>
            
            {/* Actions */}
            <div className="pt-6 space-y-4">
              <div className={styles.btn_wrapper}>
                <button className={`${styles.auth_button} font-technical-label text-technical-label uppercase tracking-widest group`} type="submit">
                  <span>ACCESS SYSTEM</span>
                  <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </button>
              </div>
              
              <Link 
                className="block text-center w-full bg-transparent border border-on-surface text-on-surface font-technical-label text-technical-label uppercase tracking-widest py-4 px-6 hover:bg-surface-container-low transition-colors duration-150" 
                href="/signup"
              >
                REQUEST ACCOUNT
              </Link>
            </div>
          </form>
          
          <div className="mt-12 pt-8 border-t border-surface-dim text-center">
            <p className="font-technical-label text-technical-label text-surface-dim">SYS.REQ.001 // ENCRYPTED CONNECTION</p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
