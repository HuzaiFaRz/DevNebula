const ContactUs = () => {
  return (
    <div className="w-full min-h-screen bg-layout text-layoutText px-6 py-12 md:p-20 font-serif selection:bg-[#10b981]/30">
      <div className="max-w-5xl mx-auto">
        <div className="border-b border-zinc-900 pb-6 mb-10 text-left font-Bruney">
          <span className="font-mono text-xs text-[#10b981] tracking-widest block mb-2">
            [ DIRECT CHANNELS ]
          </span>
          <h1 className="text-2xl md:text-5xl tracking-widest font-bold uppercase">
            CONTACT THE MATRIX
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 font-mono text-left">
          <div className="space-y-4">
            <div className="p-5 bg-zinc-900/20 border border-zinc-800/60 rounded-sm">
              <span className="text-[10px] text-zinc-500 block mb-1">
                // ENCRYPTED EMAIL
              </span>
              <p className="text-sm md:text-base text-[#f5f5f0] tracking-wider">
                concierge@matrix-lux.com
              </p>
            </div>
            <div className="p-5 bg-zinc-900/20 border border-zinc-800/60 rounded-sm">
              <span className="text-[10px] text-zinc-500 block mb-1">
                // PHONE SYSTEM
              </span>
              <p className="text-sm md:text-base text-[#f5f5f0] tracking-wider">
                +1 (800) 555-LUXE
              </p>
            </div>
          </div>

          <div className="border border-zinc-900 p-6 bg-zinc-950 rounded-sm space-y-4 font-Florisha">
            <input
              type="text"
              placeholder="IDENTITY / NAME"
              className="w-full bg-zinc-900/50 border border-zinc-800 p-3 text-xs focus:outline-none focus:border-layoutText/50 text-layoutText"
            />
            <textarea
              rows="3"
              placeholder="YOUR TRANSMISSION..."
              className="w-full bg-zinc-900/50 border border-zinc-800 p-3 text-xs focus:outline-none focus:border-layoutText/50  text-layoutText resize-none"
            ></textarea>
            <button
              className="w-full bg-zinc-900 border border-layoutText py-3 font-mono text-xs text-layoutText uppercase hover:bg-[#10b981]/10 transition-all tracking-widest"
              onClick={() => {
                location.reload();
              }}
            >
              Transmit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
