import React, { useEffect, useRef, useState } from "react";
import home_Video from "/videos/homeVideo.mp4";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
const Home = () => {
  let [currentIndexImage, setCurrentIndexImage] = useState(0);
  const homeRef = useRef();
  const { contextSafe } = useGSAP({ scope: homeRef });
  const home_Images_Ref = useRef([]);
  const prevOffsets = useRef([]);

  const slider_Images_Handler = () => {
    const totalImages = home_Images_Ref.current.length;
    if (!totalImages) return;
    const imagesBalancing = Math.floor(totalImages / 2);
    home_Images_Ref.current.forEach((elem, ind) => {
      if (!elem) return;
      let offset = ind - currentIndexImage;
      if (offset < -imagesBalancing) {
        offset += totalImages;
      } else if (offset > imagesBalancing) {
        offset -= totalImages;
      }
      const prevOffset = prevOffsets.current[ind] ?? offset;
      const distance = Math.abs(offset - prevOffset);
      const isWrapping = distance > imagesBalancing;

      gsap.to(elem, {
        xPercent: offset * 100,
        duration: 0.5,
        ease: "power2.out",
        overwrite: "auto",
        zIndex: isWrapping ? 0 : 10,
        opacity: isWrapping ? 0 : 1,
        visibility: isWrapping ? "hidden" : "visible",
      });

      prevOffsets.current[ind] = offset;
    });
  };

  useGSAP(
    () => {
      slider_Images_Handler();
    },
    {
      dependencies: [currentIndexImage],
      scope: homeRef,
    },
  );

  const image_Slider_Handler_Next = () => {
    setCurrentIndexImage((prev) => {
      return prev < home_Images_Ref.current.length - 1 ? prev + 1 : 0;
    });
  };

  const image_Slider_Handler_Prev = () => {
    setCurrentIndexImage((prev) => {
      return prev > 0 ? prev - 1 : home_Images_Ref.current.length - 1;
    });
  };

  const nextPrevButtonBackRef = useRef([]);

  const next_Prev_Button_Hover_Animation_Start = (event, index) => {
    const y = event.clientY - event.currentTarget.getBoundingClientRect().top;
    const x = event.clientX - event.currentTarget.getBoundingClientRect().left;
    gsap.set(nextPrevButtonBackRef.current[index], {
      left: x,
      top: y,
      scale: 0,
      xPercent: -50,
      yPercent: -50,
    });
    gsap.to(nextPrevButtonBackRef.current[index], {
      scale: 5,
      duration: 0.6,
      ease: "power1.out",
    });
  };

  const next_Prev_Button_Hover_Animation_End = (index) => {
    gsap.to(nextPrevButtonBackRef.current[index], {
      scale: 0,
      duration: 0.6,
      ease: "power1.out",
    });
  };

  return (
    <>
      <div className="w-full h-full" ref={homeRef}>
        <section className="w-full h-svh bg-layout relative">
          <div className="w-full h-full flex items-center justify-center gap-4 relative overflow-hidden">
            {Array.from({ length: 7 }, (_, i) => i + 1).map((elem, index) => {
              return (
                <React.Fragment key={index}>
                  <div
                    className="slider-image absolute top-0 w-[80%] mobile:w-[70%] h-full"
                    ref={(el) => {
                      home_Images_Ref.current[index] = el;
                    }}
                  >
                    <img
                      src={`/images/home-image-${elem}.webp`}
                      alt={`Home_Image_${elem}`}
                      className={`w-full h-full object-contain mobile:object-cover`}
                      id="Home_Image"
                    />
                  </div>
                </React.Fragment>
              );
            })}
          </div>
          <div className="w-full p-5 bg-layout text-layoutText font-Florisha flex flex-nowrap justify-center gap-5 mobile:justify-around items-center">
            {["Prev", "Next"].map((elem, index) => {
              return (
                <React.Fragment key={index}>
                  <button
                    className="w-25 mobile:w-32.5 h-8.75 mobile:h-12.5 border border-dashed rounded-4xl font-extrabold relative overflow-hidden z-1 border-t-2"
                    id="Next_Prev_Button"
                    onClick={
                      elem === "Prev"
                        ? image_Slider_Handler_Prev
                        : image_Slider_Handler_Next
                    }
                    onMouseEnter={(event) => {
                      next_Prev_Button_Hover_Animation_Start(event, index);
                      event.currentTarget.children[0].style.color = "#011222";
                    }}
                    onMouseLeave={(event) => {
                      next_Prev_Button_Hover_Animation_End(index);
                      event.currentTarget.children[0].style.color = "#fdfcdc";
                    }}
                  >
                    <span className="w-full h-full text-sm mobile:text-2xl absolute top-1/4 inset-0 z-1">
                      {elem}
                    </span>
                    <span
                      className="absolute bg-layoutText w-1/2 h-1/2 rounded-4xl -translate-1/2 scale-0"
                      id="Next_Prev_Button_Back"
                      ref={(el) => {
                        nextPrevButtonBackRef.current[index] = el;
                      }}
                    ></span>
                  </button>
                </React.Fragment>
              );
            })}
          </div>
        </section>
        <section className="w-full h-full">
          <video
            src={home_Video}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-contain"
          ></video>
        </section>
      </div>
    </>
  );
};

export default Home;
