"use client";

import AuthNavbar from "@/components/AuthNavbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import styles from "../login/Auth.module.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { loginStart, loginSuccess } from "@/lib/features/authSlice";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { loading } = useSelector((state: RootState) => state.auth);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(loginStart());
    
    // Simulate API call
    setTimeout(() => {
      dispatch(loginSuccess({ name: "User", email: "user@example.com" }));
      router.push("/");
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <AuthNavbar />
      
      <main className="flex-grow flex items-center justify-center px-margin-mobile md:px-margin-desktop py-24 w-full max-w-container-max-width mx-auto">
        <div className="w-full max-w-md">
          <div className="mb-12 text-center md:text-left">
            <h1 className="font-display-lg text-display-lg text-on-background uppercase mb-2">ENROLLMENT</h1>
            <p className="font-technical-value text-technical-value text-on-surface-variant uppercase">INITIALIZE YOUR SENSORY PROFILE</p>
          </div>
          
          <form className="space-y-8" onSubmit={handleSubmit}>
            {/* Field: FULL_NAME */}
            <div className="space-y-2">
              <label className="block font-technical-label text-technical-label text-on-surface uppercase" htmlFor="fullName">FULL_NAME</label>
              <input 
                className="w-full bg-transparent border-0 border-b border-on-surface focus:ring-0 focus:border-primary p-0 pb-2 font-body-md text-body-md text-on-background placeholder-on-surface-variant/50 transition-colors" 
                id="fullName" 
                name="fullName" 
                placeholder="ENTER LEGAL NAME" 
                required 
                type="text"
              />
            </div>
            
            {/* Field: EMAIL_CORRESPONDENCE */}
            <div className="space-y-2">
              <label className="block font-technical-label text-technical-label text-on-surface uppercase" htmlFor="email">EMAIL_CORRESPONDENCE</label>
              <input 
                className="w-full bg-transparent border-0 border-b border-on-surface focus:ring-0 focus:border-primary p-0 pb-2 font-body-md text-body-md text-on-background placeholder-on-surface-variant/50 transition-colors" 
                id="email" 
                name="email" 
                placeholder="ENTER PRIMARY ALIAS" 
                required 
                type="email"
              />
            </div>
            
            {/* Field: PASSWORD_SET */}
            <div className="space-y-2">
              <label className="block font-technical-label text-technical-label text-on-surface uppercase" htmlFor="password">PASSWORD_SET</label>
              <div className="relative">
                <input 
                  className="w-full bg-transparent border-0 border-b border-on-surface focus:ring-0 focus:border-primary p-0 pb-2 font-body-md text-body-md text-on-background placeholder-on-surface-variant/50 transition-colors pr-8" 
                  id="password" 
                  name="password" 
                  placeholder="ESTABLISH SECURITY PHRASE" 
                  required 
                  type="password"
                />
                <button className="absolute right-0 bottom-2 text-on-surface hover:text-primary transition-colors focus:outline-none" type="button">
                  <span className="material-symbols-outlined text-[18px]">visibility</span>
                </button>
              </div>
            </div>
            
            {/* Actions */}
            <div className="pt-6 space-y-4">
              <div className={styles.btn_wrapper}>
                <button 
                  className={`${styles.auth_button} font-technical-label text-technical-label uppercase tracking-widest disabled:opacity-50`} 
                  type="submit"
                  disabled={loading}
                >
                  <span>{loading ? "INITIALIZING..." : "INITIALIZE ACCOUNT"}</span>
                </button>
              </div>
              
              <div className="text-center md:text-left mt-4">
                <p className="font-technical-value text-technical-value text-on-surface-variant">
                  EXISTING PROFILE? 
                  <Link className="text-on-background border-b border-on-background hover:text-primary hover:border-primary transition-colors pb-0.5 ml-2" href="/login">LOG_IN</Link>
                </p>
              </div>
            </div>
          </form>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
