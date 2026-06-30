import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import gsap from "gsap";

const LoadingPage = () => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    // document.title = location.pathname;

    // console.log(
    //   location.pathname
    //     .replace(/[^a-zA-Z0-9 ]/g, " ")
    //     .split("")[1]
    //     .toLocaleUpperCase() +
    //     location.pathname.slice(2, location.pathname.lenght),
    // );

    // .replace(/[^a-zA-Z0-9 ]/g, " ").to

    setIsLoading(true);
    gsap.to(".loading-pillar", {
      y: "100%",
      duration: 0.3,
      ease: "power1.inOut",
      stagger: 0.1,
      onComplete: () => {
        setIsLoading(false);
        gsap.to(".main-loading", {
          opacity: 0,
          // zIndex: -1000,
          duration: 0.3,
          ease: "power1.inOut",
        });
      },
    });
  }, [location.pathname, location]);
  return (
    <div
      className={`w-screen h-screen bg-black flex flex-row justify-center items-center overflow-hidden fixed inset-0 main-loading ${isLoading ? "z-1000" : "-z-50"}`}
    >
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((elem, index) => {
        return (
          <div
            key={index}
            className={`w-[10vw] loading-pillar h-full relative bg-layout border-l-2 border-dashed border-layoutText `}
          ></div>
        );
      })}
    </div>
  );
};

export default LoadingPage;
