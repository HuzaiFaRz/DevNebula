const PrivacyPolicy = () => {
  const privacyNodes = [
    {
      q: "NODE 01 // SESSION PERSISTENCE",
      a: "We track screen resolution states exclusively to retain canvas layout integrity across transformations.",
    },
    {
      q: "NODE 02 // HARDWARE UTILIZATION",
      a: "Heavy graphic workflows including web loops are processed entirely client-side to minimize remote lag.",
    },
    {
      q: "NODE 03 // COORD SCRUBBING",
      a: "All real-time tracking scripts executing touch/mouse drag handlers instantly dissolve positions upon exit.",
    },
  ];
  return (
    <div className="w-full min-h-screen bg-layout text-layoutText px-6 py-12 md:p-20 font-serif selection:bg-[#10b981]/30">
      <div className="max-w-5xl mx-auto">
        <div className="border-b border-zinc-900 pb-6 mb-10 text-left">
          <span className="font-mono text-xs text-amber-300 tracking-widest block mb-2">
            [ DATA PROTECTION SCHEMA ]
          </span>
          <h1 className="text-2xl md:text-5xl tracking-widest font-bold font-Bruney uppercase">
            PRIVACY POLICY
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 text-left font-mono">
          {privacyNodes.map((item, idx) => (
            <div
              key={idx}
              className="p-5 bg-zinc-900/10 border border-layoutText/30 rounded-sm hover:border-layoutText/60 transition-colors"
            >
              <h3 className="text-xs md:text-sm text-layoutText/40 mb-2 font-medium uppercase">
                {item.q}
              </h3>
              <p className="text-[11px] md:text-xs text-layoutText/70 leading-relaxed font-sans border-t border-zinc-900 pt-2">
                {item.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
