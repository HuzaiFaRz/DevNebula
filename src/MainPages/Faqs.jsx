const Faqs = () => {
  const faqsList = [
    {
      q: "How are mask positions calibrated?",
      a: "Every viewport container corresponds directly to real-time coordinate math (vw/vh parameters).",
    },
    {
      q: "Can the interactive grid be customized?",
      a: "Yes, the user console permits variable scaling across active desktop terminals using drag hooks.",
    },
    {
      q: "Are the vehicles source-verified?",
      a: "Every profile cataloged targets tier-one luxury benchmarks and custom heritage builds.",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-layout text-layoutText px-6 py-12 md:p-20 font-serif selection:bg-[#10b981]/30">
      <div className="max-w-5xl mx-auto">
        <div className="border-b border-zinc-900 pb-6 mb-10 text-left">
          <span className="font-mono text-xs text-amber-300 tracking-widest block mb-2">
            [ SYSTEM QUERIES ]
          </span>
          <h1 className="text-2xl md:text-5xl tracking-widest font-bold  font-Bruney uppercase">
            FAQ INDEX
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 text-left font-mono">
          {faqsList.map((item, idx) => (
            <div
              key={idx}
              className="p-5 bg-zinc-900/10 border border-layoutText/30 rounded-sm hover:border-layoutText/60 transition-colors"
            >
              <h3 className="text-xs md:text-sm text-layoutText mb-2 font-medium uppercase">
                Q: {item.q}
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

export default Faqs;
