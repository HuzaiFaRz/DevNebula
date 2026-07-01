import { Link } from "react-router-dom";

const ErrorRoute = () => {
  return (
    <div className="w-full h-screen bg-[#0a0a0a] text-[#f5f5f0] flex flex-col items-center justify-center px-6 selection:bg-zinc-800 relative">
      <div className="text-center max-w-sm">
        <h1 className="text-8xl md:text-9xl font-serif font-extralight tracking-tight text-[#f5f5f0] mb-4">
          404
        </h1>
        <div className="w-8 h-px bg-zinc-700 mx-auto mb-6" />

        <h2 className="text-lg md:text-xl font-serif tracking-wide font-light uppercase mb-3">
          Page Not Found
        </h2>
        <p className="text-xs md:text-sm text-zinc-400 font-sans font-light leading-relaxed mb-8">
          The page you are looking for doesn't exist or has been moved. Please
          check the URL or return to safety.
        </p>

        <Link
          to="/"
          className="inline-block text-xs font-sans tracking-widest uppercase text-[#f5f5f0] border-b border-zinc-500 pb-1 hover:border-[#f5f5f0] transition-colors duration-300"
        >
          Go Back Home
        </Link>
      </div>

      <span className="absolute bottom-6 font-sans text-[10px] text-zinc-600 tracking-widest uppercase">
        © {new Date().getFullYear()} All Rights Reserved.
      </span>
    </div>
  );
};

export default ErrorRoute;
