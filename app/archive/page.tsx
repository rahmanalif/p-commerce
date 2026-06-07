"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import styles from "./Archive.module.css";

const archiveItems = [
  {
    serial: "PF-X-099",
    name: "Void Resonance",
    profile: "SYNTHETIC OUD / BURNT RUBBER / GEOSMIN",
    release: "2021.04",
    status: "DECOMMISSIONED",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCOJDwMrUvYndmPM_JL_uTF8qKs4Hh34FCscIYzK2Brh58FEmY3hERGtTHDyGMJtFlLplTtcqJyjan6HmrKg6d_Pvq67XFOOwhY83n3d9PjNEyOl-BJfeyGUadxqL4cQceJlpV3di6QASMzGVeRUBxkOwYZlnQZJDuQxXbqSf_8UiMjwLdzGu4GfEZZNOH1_WJShWJhsNhU-p9xeounRgNT3ikdR8NvphEc4d35IpTs4uwXuqAnuzfwY1mF_5JrhhSjCtMcE6QqeYc"
  },
  {
    serial: "PF-B-042",
    name: "White Noise",
    profile: "ALDEHYDES / WET CONCRETE / LILY",
    release: "2020.11",
    status: "DECOMMISSIONED",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDeAg18o7qi9X_LzEn3h1BcbyQikw4_uxRQgwNL0WjEnUgXHio3HePEMRAsz7bcjKYmPrT9Pa7P9AwUqIzlNO9TvSMFC0RGqXZnXmE-XjmS2NVrC04ke5B7c_JfNNJ6rjgf7ZUSD6dCz_MoLil_TBC3if0exJLlubHFY9G9D3B41UoPDv4r-BhpBrXGf22th9bEJgFq4MpvAUyeoU1eFu7EaSZ1tcXxTeMFs6ymLGMNLespCyaHFd86GfOC_ZfMlziaYdDKKAsldHg"
  },
  {
    serial: "PF-C-001",
    name: "Null Hypothesis",
    profile: "ISO E SUPER / VETIVER / COLD METAL",
    release: "2019.08",
    status: "DECOMMISSIONED",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDHh0vavCGkF0nGzavS-ErS5CqyfO08UGkVMz66HOyvPzOLS5P15DczdPoslscYweCol8EkoZVkGaCIaCFMzEOEyBvtSuZdOg5CJvlqcZ8_6876WB1LSEsSAcdXRoJwOHiW3MN5ED1LmlUVJONj34AS-fImwbgVwUtSU9isZWMcJ9xpujF4hJAqLt7dhRa6WLKPmqJMnBOM9YMDIzDM26fT6HPGe-Fr8geIK-V8Z5FDK51QsTmcNjPspr1LMPtpDqlC94CDv6ErW-w"
  },
  {
    serial: "PF-EXP-07",
    name: "Decay Stage [Beta]",
    profile: "DAMP EARTH / PATCHOULI / SYNTHETIC MUSK",
    release: "2018.02",
    status: "ARCHIVED",
    isExperimental: true
  }
];

export default function ArchivePage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredItems = archiveItems.filter(item => 
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.serial.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.profile.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-grow w-full max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-24">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <h1 className="font-display-lg text-display-lg uppercase mb-4 text-on-surface">Past Extractions</h1>
            <p className="font-body-md text-on-surface-variant max-w-md">
              A comprehensive catalog of decommissioned formulas, limited production runs, and experimental batches from the Perfume Field laboratory. These scents are no longer in active synthesis.
            </p>
          </div>
          
          {/* Search & Filter Controls */}
          <div className="flex flex-col gap-4 w-full md:w-auto">
            <div className="relative group">
              <span className="material-symbols-outlined absolute left-0 bottom-2 text-on-surface-variant text-[16px]">search</span>
              <input 
                className="w-full md:w-64 bg-transparent border-0 border-b border-on-surface-variant focus:border-primary focus:ring-0 px-6 pb-2 font-technical-label text-technical-label uppercase text-on-surface placeholder-on-surface-variant transition-colors" 
                id="archive-search" 
                placeholder="SEARCH ARCHIVE..." 
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex gap-2 flex-wrap font-technical-label text-technical-label">
              <button className="bg-surface-container-highest px-3 py-1.5 rounded-DEFAULT text-on-surface hover:bg-surface-dim transition-colors">ALL</button>
              <button className="border border-surface-dim px-3 py-1.5 rounded-DEFAULT text-on-surface-variant hover:border-on-surface hover:text-on-surface transition-colors">PROTOTYPES</button>
              <button className="border border-surface-dim px-3 py-1.5 rounded-DEFAULT text-on-surface-variant hover:border-on-surface hover:text-on-surface transition-colors">COLLABORATIONS</button>
            </div>
          </div>
        </div>

        {/* Archive List */}
        <div className="w-full border-t border-surface-dim">
          {/* Grid Header */}
          <div className="hidden md:grid grid-cols-[80px_120px_3fr_1fr_150px] gap-6 py-4 border-b border-surface-dim font-technical-label text-technical-label text-on-surface-variant uppercase tracking-widest">
            <div className="">THUMB</div>
            <div className="">SERIAL NO.</div>
            <div className="">DESIGNATION / PROFILE</div>
            <div className="">RELEASE</div>
            <div className="text-right">STATUS</div>
          </div>
          
          {/* Archive Items */}
          <div className="flex flex-col">
            {filteredItems.map((item, index) => (
              <article 
                key={index}
                className="grid grid-cols-1 md:grid-cols-[80px_120px_3fr_1fr_150px] gap-4 md:gap-6 py-6 border-b border-surface-dim items-center hover:bg-surface-container-low transition-colors duration-150 group"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 bg-surface-dim overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-300">
                  {item.image ? (
                    <img 
                      alt={item.name} 
                      className="w-full h-full object-cover mix-blend-multiply opacity-80" 
                      src={item.image} 
                    />
                  ) : (
                    <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-surface-dim to-on-surface opacity-50 flex items-center justify-center">
                      <span className="material-symbols-outlined text-surface-container-highest opacity-50 text-[32px]">science</span>
                    </div>
                  )}
                </div>
                <div className="font-technical-value text-technical-value text-on-surface">
                  {item.serial}
                </div>
                <div className="flex flex-col gap-1">
                  <h2 className="font-headline-sm text-headline-sm text-on-surface uppercase tracking-tight">{item.name}</h2>
                  <span className="font-technical-label text-technical-label text-on-surface-variant">{item.profile}</span>
                </div>
                <div className="font-technical-value text-technical-value text-on-surface-variant">
                  {item.release}
                </div>
                <div className="md:text-right">
                  <span className={`inline-block border px-2 py-1 font-technical-label text-technical-label rounded-DEFAULT tracking-widest ${
                    item.status === 'ARCHIVED' 
                      ? 'border-primary text-primary bg-primary/5' 
                      : 'border-surface-dim text-on-surface-variant bg-surface'
                  }`}>
                    {item.status}
                  </span>
                </div>
              </article>
            ))}
          </div>
          
          {/* Load More */}
          <div className="mt-12 flex justify-center">
            <div className={styles.btn_wrapper}>
              <button className={`${styles.load_more_button} font-technical-label text-technical-label uppercase`}>
                <span>LOAD PREVIOUS CYCLES</span>
              </button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
