import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-zinc-950 text-white flex flex-col justify-center px-8 md:px-24">
      <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-4">
        Privacy & Policy
      </h1>
      <div className="text-zinc-400 font-light text-sm max-w-2xl space-y-4">
        <p>
          <strong>Data Protection:</strong> We value your security. Any personal
          or inquiry data provided to our automotive custom build program
          remains entirely encrypted and confidential.
        </p>
        <p>
          <strong>Cookies & Dynamics:</strong> We use minimal local storage
          metrics solely to optimize UI rendering and interface preferences.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
