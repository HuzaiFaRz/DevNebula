import React from "react";

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-zinc-950 text-white flex flex-col justify-center px-8 md:px-24">
      <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-4">
        Contact Us
      </h1>
      <p className="text-zinc-400 text-lg max-w-xl mb-8 font-light">
        Have questions about booking or custom commissions? Reach out to our
        global concierge.
      </p>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="space-y-4 max-w-md w-full"
      >
        <input
          type="text"
          placeholder="Name"
          className="w-full bg-zinc-900 border border-zinc-800 focus:border-zinc-600 outline-none p-3 text-sm font-light text-white"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full bg-zinc-900 border border-zinc-800 focus:border-zinc-600 outline-none p-3 text-sm font-light text-white"
        />
        <textarea
          placeholder="Message"
          rows="4"
          className="w-full bg-zinc-900 border border-zinc-800 focus:border-zinc-600 outline-none p-3 text-sm font-light text-white resize-none"
        />
        <button
          type="submit"
          className="bg-white text-black text-xs font-semibold uppercase tracking-widest px-6 py-3 w-full"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
