const AboutUs = () => {
  const stats = [
    { l: "EST.", v: "2026" },
    { l: "LAYER", v: "INTERACTIVE" },
    { l: "OBJECTS", v: "04 ICONIC" },
  ];
  return (
    <div className="w-full min-h-screen bg-layout text-layoutText px-6 py-12 md:p-20 font-serif selection:bg-[#10b981]/30">
      <div className="max-w-5xl mx-auto">
        <div className="border-b border-zinc-900 pb-6 mb-10 text-left">
          <span className="font-mono text-xs text-amber-300 tracking-widest block mb-2">
            [ ETHOS & PHILOSOPHY ]
          </span>
          <h1 className="text-2xl md:text-5xl tracking-widest font-bold uppercase font-Bruney">
            ABOUT THE FRAMEWORK
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <p className="md:col-span-2 text-sm md:text-base text-layoutText/80 leading-relaxed font-sans border-l border-layoutText/30 pl-4">
            Founded at the intersection of cinematic design and elite automotive
            intelligence. We do not catalog vehicles; we map masterpieces. Every
            layout serves as an immersive canvas for global tastemakers who
            operate on absolute precision.
          </p>

          <div className="grid grid-cols-3 md:grid-cols-1 gap-2 font-mono">
            {stats.map((s, i) => (
              <div
                key={i}
                className="p-3 bg-zinc-900/10 border border-layoutText/30 rounded-sm"
              >
                <span className="text-[9px] text-layoutText/70 block">
                  {s.l}
                </span>
                <span className="text-xs md:text-sm text-layoutText/90 font-medium">
                  {s.v}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
