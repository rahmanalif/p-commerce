export default function ScentsHeader() {
  return (
    <header className="px-margin-mobile md:px-margin-desktop py-12 md:py-24 max-w-container-max-width mx-auto w-full border-b border-outline-variant grid-bg">
      <div className="max-w-2xl bg-background/80 backdrop-blur-sm p-4 inline-block">
        <h1 className="font-display-lg text-display-lg uppercase tracking-tight mb-4">
          SCENT INDEX.
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant">
          Engineered olfactory structures. A systematic exploration of sensory
          inputs, categorized by molecular weight and intensity. Explore the
          active roster.
        </p>
      </div>
      {/* Filters / Controls */}
      <div className="mt-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 bg-background/90 backdrop-blur-md p-4 border border-outline-variant">
        <div className="flex flex-wrap gap-2">
          <button className="bg-surface-variant text-on-surface font-technical-label text-technical-label uppercase px-3 py-1.5 rounded-DEFAULT hover:bg-surface-dim transition-colors">
            ALL
          </button>
          <button className="bg-transparent border border-outline text-on-surface font-technical-label text-technical-label uppercase px-3 py-1.5 rounded-DEFAULT hover:border-on-surface transition-colors">
            WOODY
          </button>
          <button className="bg-transparent border border-outline text-on-surface font-technical-label text-technical-label uppercase px-3 py-1.5 rounded-DEFAULT hover:border-on-surface transition-colors">
            CITRUS
          </button>
          <button className="bg-transparent border border-outline text-on-surface font-technical-label text-technical-label uppercase px-3 py-1.5 rounded-DEFAULT hover:border-on-surface transition-colors">
            SYNTHETIC
          </button>
          <button className="bg-transparent border border-outline text-on-surface font-technical-label text-technical-label uppercase px-3 py-1.5 rounded-DEFAULT hover:border-on-surface transition-colors">
            FLORAL
          </button>
        </div>
        <div className="flex items-center gap-4 font-technical-label text-technical-label text-on-surface-variant uppercase">
          <span className="">SORT:</span>
          <select className="bg-transparent border-b border-outline-variant focus:border-primary text-on-surface p-0 pr-4 focus:ring-0 uppercase cursor-pointer">
            <option>INTENSITY [LOW-HIGH]</option>
            <option>INTENSITY [HIGH-LOW]</option>
            <option>NEWEST</option>
            <option>ALPHABETICAL</option>
          </select>
        </div>
      </div>
    </header>
  );
}
