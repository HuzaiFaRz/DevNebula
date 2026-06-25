import React from 'react'

const TermsCondition = () => {
return (
    <div className="min-h-screen bg-zinc-950 text-white flex flex-col justify-center px-8 md:px-24">
      <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-4">Terms & Condition</h1>
      <div className="text-zinc-400 font-light text-sm max-w-2xl space-y-4">
        <p><strong>1. Acceptance of Terms:</strong> By accessing and viewing this site, you agree to comply with our platform guidelines regarding vehicle specifications and asset display.</p>
        <p><strong>2. Accuracy of Data:</strong> While we aim for perfection, technical specifications, dynamic torque outputs, and performance figures are subject to regular updates.</p>
      </div>
    </div>
  );
}

export default TermsCondition