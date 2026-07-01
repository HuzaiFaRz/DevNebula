import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import home_Video from "/videos/homeVideo.mp4";

const CarDetails = () => {
  const { carID } = useParams();

  const [whichCar, setWhichCar] = useState(null);

  const carsData = [
    {
      id: "rolls-royce",
      name: "ROLLS-ROYCE",
      tagline: "Architecture of Luxury",
      desc: "Crafted for those who shape the world. Experience absolute silence, starlight headliners, and an unmatched magic carpet ride that effortlessly floats above the tarmac.",
      specs: {
        engine: "6.75L V12",
        power: "563 BHP",
        speed: "250 KM/H",
        type: "Ultra-Luxury",
      },
      images: [
        "https://images.unsplash.com/photo-1625028762956-296eb7f69d66?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1632548260498-b7246fa466ea?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1770140329021-951d770b85d4?q=80&w=360&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
    },
    {
      id: "mercedes's-class",
      name: "MERCEDES'S-CLASS",
      tagline: "The Intelligence of Luxury",
      desc: "Where cutting-edge technology meets ultimate executive comfort. The S-Class doesn't just predict the future—it drives it with automated assistance.",
      specs: {
        engine: "Biturbo I6",
        power: "429 BHP",
        speed: "250 KM/H",
        type: "Executive",
      },
      images: [
        "https://images.unsplash.com/photo-1612368812851-5f7baf8c0d1d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1664626692098-2e35eb4aa7ca?q=80&w=417&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1710343491609-0cbc6c14b92d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
    },
    {
      id: "toyota-supra",
      name: "TOYOTA-SUPRA",
      tagline: "Born on the Track",
      desc: "Pure sports engineering tuned to absolute perfection. High-performance aerodynamics, a perfectly balanced chassis, and a raw exhaust note.",
      specs: {
        engine: "3.0L Turbo",
        power: "382 BHP",
        speed: "260 KM/H",
        type: "Hyper-Sport",
      },
      images: [
        "https://images.unsplash.com/photo-1627008119193-58dc96b6c1a6?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1693461107969-1bc35c6a0325?q=80&w=1034&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1730668746126-dac4862f8d7e?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
    },
    {
      id: "bmw-series-i7",
      name: "BMW-SERIES-I7",
      tagline: "Forwardism is Electric",
      desc: 'A monumental shift in electric luxury. Features an immersive 31.3" theater screen for the rear seats, crystal headlights, and an emission-free drive.',
      specs: {
        engine: "Dual-Motor AWD",
        power: "536 BHP",
        speed: "240 KM/H",
        type: "Electric Luxury",
      },
      images: [
        "https://images.unsplash.com/photo-1622642468182-edd7db43f86e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1680844540129-48dacc7d5d88?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1714434087840-c176041f0291?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
    },
  ];

  useEffect(() => {
    const searchingCar = carsData.find(
      (e) =>
        e.id.includes(carID.toLocaleLowerCase()) ||
        e.id === carID.toLocaleLowerCase(),
    );
    setWhichCar(searchingCar);
    window.scrollTo(0, 0);
  }, [carID]);

  if (!whichCar) return;

  const { name, tagline, desc, specs, images } = whichCar;

  const { engine, power, speed, type } = specs;

  return (
    <div className="w-full min-h-screen bg-[#0a0a0a] select-none selection:bg-[#10b981]/30">
      <div className="relative w-full h-screen overflow-hidden bg-layout font-serif">
        <video
          src={home_Video}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-60 pointer-events-none"
        />

        <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0a] via-transparent to-black/50 z-10" />

        <div className="absolute inset-0 z-20 flex flex-col justify-end p-8 md:p-20 max-w-4xl">
          <h1 className="text-4xl md:text-7xl font-Bruney font-light text-[#f5f5f0] tracking-widest leading-none mb-4 uppercase drop-shadow-md">
            {name}
          </h1>

          <p className="font-mono text-xs md:text-sm text-[#10b981] tracking-[0.2em] uppercase mb-6 animate-pulse"></p>

          <p className="text-sm md:text-lg text-[#f5f5f0]/80 font-sans font-light leading-relaxed max-w-2xl border-l-2 border-[#10b981]/40 pl-4">
            {desc}
          </p>
          <div className="mt-8 font-mono text-[10px] text-zinc-500 tracking-widest uppercase"></div>
        </div>
      </div>

      <div className="w-full bg-layout text-layoutText p-6 md:p-20 font-serif">
        <div className="border-b border-zinc-800 pb-6 mb-12">
          <span className="font-mono text-xs text-amber-300 tracking-widest">
            [ SPECIFICATIONS MATRIX ]
          </span>
          <h2 className="text-2xl md:text-4xl tracking-widest mt-2 uppercase">
            {name}
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16 font-mono text-left">
          {Object.entries(specs).map(([key, value]) => (
            <div
              key={key}
              className="p-6 bg-zinc-900/30 border border-zinc-800/80 rounded-sm backdrop-blur-sm transition-all duration-300 hover:border-[#10b981]/30 shadow-[inset_0_0_12px_rgba(16,185,129,0.01)]"
            >
              <span className="text-xs text-zinc-500 uppercase block mb-1">
                {key}
              </span>
              <span className="text-sm md:text-base text-[#f5f5f0] font-medium tracking-wide">
                {value}
              </span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {images.map((imgUrl, idx) => (
            <div
              key={idx}
              className={`relative overflow-hidden group border border-zinc-900 rounded-sm bg-zinc-950
                ${idx === 0 ? "md:col-span-2 md:h-120" : "h-65 md:h-120"}
              `}
            >
              <div className="absolute inset-0 bg-[#10b981]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />

              <img
                src={imgUrl}
                alt={`${name} blueprint frame ${idx + 1}`}
                className="w-full h-full object-cover filter grayscale contrast-[1.1] hover:grayscale-0 scale-100 group-hover:scale-[1.03] transition-all duration-700 ease-out"
              />

              <span className="absolute bottom-4 right-4 font-mono text-[10px] text-zinc-500 bg-black/80 px-2 py-1 tracking-wider border border-zinc-800/50">
                0{idx + 1} // SECURE_VIEW
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
