import React from 'react'

const AboutUs = () => {
return (
    <div className="min-h-screen bg-zinc-950 text-white flex flex-col justify-center px-8 md:px-24">
      <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-4">About Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-zinc-400 font-light max-w-4xl leading-relaxed">
        <p>
          We are a team of passionate designers, engineers, and automotive enthusiasts dedicated to curating and showcasing premium hypercars and performance vehicles.
        </p>
        <p>
          Our platform brings ultra-high-definition showcases and frictionless interactive vehicle exploration directly to collectors and fans worldwide.
        </p>
      </div>
    </div>
  );
}

export default AboutUs