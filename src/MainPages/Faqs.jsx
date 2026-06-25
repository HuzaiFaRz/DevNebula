import React from "react";

const Faqs = () => {
  const faqs = [
    {
      q: "How do I schedule a private viewing?",
      a: "Private viewings can be requested through our concierge portal via the Contact page.",
    },
    {
      q: "Do you offer international shipping?",
      a: "Yes, we facilitate fully enclosed, secure global transport for all custom fleets.",
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-white flex flex-col justify-center px-8 md:px-24">
      <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-8">
        FAQs
      </h1>
      <div className="space-y-6 max-w-2xl w-full">
        {faqs.map((item, index) => (
          <div key={index} className="border-b border-zinc-900 pb-4">
            <h3 className="text-lg font-normal mb-2 text-zinc-200">{item.q}</h3>
            <p className="text-sm font-light text-zinc-400">{item.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqs;
