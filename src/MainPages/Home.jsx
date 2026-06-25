import React, { useEffect, useRef, useState } from "react";
import home_Video from "/videos/homeVideo.mp4";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
const Home = () => {
  const [currentIndexImage, setCurrentIndexImage] = useState(0);
  const [whatSize, setWhatSize] = useState(false);
  const homeRef = useRef(null);
  const { contextSafe } = useGSAP({ scope: homeRef });
  const home_Slider_Ref = useRef([]);
  const prevOffsets = useRef([]);

  useEffect(() => {
    const handleResize = () => {
      setWhatSize(window.matchMedia("(max-width: 800px)").matches);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const home_Slider_Data = [
    {
      url: "https://images.unsplash.com/photo-1592853625601-bb9d23da12fc?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      heading: "Porsche 911",
      paragraph:
        "A legendary sports car known for its timeless design and powerful performance. The Porsche 911 combines luxury, speed, and everyday driving comfort.",
    },
    {
      url: "https://images.unsplash.com/photo-1740098160485-d098fbf42814?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      heading: "Lamborghini Huracan",
      paragraph:
        "A high-performance Italian supercar with aggressive styling and a powerful V10 engine. Built for speed, excitement, and an unforgettable driving experience.",
    },
    {
      url: "https://images.unsplash.com/photo-1730639321595-3f50a88cf5fa?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      heading: "BMW M4",
      paragraph:
        "A premium performance coupe that balances luxury with racing-inspired engineering. The M4 offers sharp handling and impressive acceleration.",
    },
    {
      url: "https://images.unsplash.com/photo-1601362840608-942cdd122b52?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      heading: "Mercedes AMG GT",
      paragraph:
        "A luxury sports car featuring elegant design and strong AMG performance. It delivers a smooth ride with thrilling power and style.",
    },
    {
      url: "https://images.unsplash.com/photo-1612069811748-d3b2d1db1858?q=80&w=877&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      heading: "Ford Mustang",
      paragraph:
        "An iconic American muscle car famous for its bold appearance and powerful engines. The Mustang blends classic heritage with modern technology.",
    },
    {
      url: "https://images.unsplash.com/photo-1589148938909-4d241c91ee52?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      heading: "Audi R8",
      paragraph:
        "A futuristic supercar with a naturally aspirated engine and premium interior. The Audi R8 offers a perfect mix of comfort and extreme performance.",
    },
    {
      url: "https://images.unsplash.com/photo-1570280406792-bf58b7c59247?q=80&w=862&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      heading: "Nissan GT-R",
      paragraph:
        "A Japanese performance legend known for its incredible speed and advanced technology. The GT-R delivers supercar-level performance at a competitive price.",
    },
  ];

  const slider_Images_Handler = () => {
    const totalImages = home_Slider_Ref.current.length;
    if (!totalImages) return;
    const imagesBalancing = Math.floor(totalImages / 2);
    home_Slider_Ref.current.forEach((elem, index) => {
      if (!elem) return;
      let offset = index - currentIndexImage;
      if (offset < -imagesBalancing) {
        offset += totalImages;
      } else if (offset > imagesBalancing) {
        offset -= totalImages;
      }
      const prevOffset = prevOffsets.current[index] ?? offset;
      const distance = Math.abs(offset - prevOffset);
      const isWrapping = distance > imagesBalancing;
      gsap.to(elem, {
        xPercent: offset * 100,
        duration: isWrapping ? 0 : 0.6,
        ease: "power1.out",
        overwrite: "auto",
        opacity: isWrapping ? 0 : 1,
        display: isWrapping ? "none" : "block",
      });
      prevOffsets.current[index] = offset;
    });
  };

  useGSAP(
    () => {
      slider_Images_Handler();
      home_Slider_Ref.current.forEach((elem, index) => {
        if (!elem) return;
        const isCurrent = index === currentIndexImage;
        const heading = elem.querySelector(".slider-heading");
        const paragraph = elem.querySelector(".slider-paragraph");
        const image = elem.querySelector(".slider-img");
        const content = elem.querySelector(".slider-content");
        const home_TimeLine = gsap.timeline({
          defaults: { ease: "power1.inOut", duration: 0.6 },
        });
        if (prevOffsets.current[index] !== 0) {
          home_TimeLine
            .to(
              heading,
              {
                x: "-100%",
              },
              0,
            )
            .to(
              paragraph,
              {
                yPercent: 100,
              },
              0,
            )
            .to(
              elem,
              {
                width: whatSize ? "100%" : "45%",
                scale: 0.4,
                top: "30%",
                zIndex: 20,
              },
              0,
            )
            .to(
              image,
              {
                objectPosition: "center",
                objectFit: "cover",
                filter: "blur(5px)",
              },
              0,
            )
            .to(
              content,
              {
                opacity: 0,
              },
              0,
            );
        } else {
          home_TimeLine
            .to(
              elem,
              {
                width: "100%",
                scale: 1,
                top: "0%",
                zIndex: 10,
              },
              0,
            )
            .to(
              content,
              {
                opacity: 1,
              },
              0,
            )
            .to(
              heading,
              {
                x: "0%",
              },
              0,
            )
            .to(
              paragraph,
              {
                yPercent: 0,
              },
              0,
            )
            .to(
              image,
              {
                objectPosition: "center",
                objectFit: "cover",
                filter: "blur(0px)",
              },
              0,
            );
        }
      });
    },
    {
      dependencies: [currentIndexImage, whatSize],
      scope: homeRef,
    },
  );

  const image_Slider_Handler_Next = () => {
    setCurrentIndexImage((prev) => {
      return prev < home_Slider_Ref.current.length - 1 ? prev + 1 : 0;
    });
  };

  const image_Slider_Handler_Prev = () => {
    setCurrentIndexImage((prev) => {
      return prev > 0 ? prev - 1 : home_Slider_Ref.current.length - 1;
    });
  };

  const button_Hover_Animation = (event, start) => {
    let backButton = event.currentTarget.children[1];
    if (start) {
      const y = event.clientY - event.currentTarget.getBoundingClientRect().top;
      const x =
        event.clientX - event.currentTarget.getBoundingClientRect().left;
      gsap.set(backButton, {
        left: x,
        top: y,
        scale: 0,
        xPercent: -50,
        yPercent: -50,
      });
    }
    const config = {
      scale: start ? 5 : 0,
      duration: 0.4,
      ease: "power3.out",
      overwrite: "auto",
    };
    gsap.to(backButton, config);
    event.currentTarget.children[0].style.color = start ? "#011222" : "#fdfcdc";
  };

  return (
    <>
      <div className="w-full h-full" ref={homeRef}>
        <section className="w-full h-svh bg-layout relative overflow-hidden">
          <div className="w-full h-[90%] flex items-center justify-center gap-4 relative overflow-hidden">
            {home_Slider_Data.map((elem, index) => {
              return (
                <div
                  key={index}
                  className="slider-image absolute top-0 w-full h-full"
                  ref={(el) => {
                    home_Slider_Ref.current[index] = el;
                  }}
                >
                  <img
                    src={elem.url}
                    alt={`Home_Image_${index}`}
                    className={`w-full h-full absolute slider-img`}
                  />
                  <div
                    className={`absolute overflow-hidden top-1/2 left-1/2 -translate-1/2 text-layoutText p-5 mobile:p-10 bg-layout/50 w-full mobile:w-auto z-10 slider-content`}
                  >
                    <h1 className="text-4xl mobile:text-5xl tablet:text-6xl laptop:text-7xl desktop:text-8xl font-Bruney font-extrabold tracking-wider slider-heading">
                      {elem.heading}
                    </h1>
                    <p className="text-lg laptop:text-xl desktop:text-2xl font-Florisha capitalize max-w-full leading-12 mt-5 p-3 slider-paragraph">
                      {elem.paragraph}
                    </p>
                    <button
                      className="h-12 w-40 font-Glitten-Regular relative overflow-hidden bg-layout mt-3 mobile:mt-5"
                      onMouseEnter={(event) => {
                        button_Hover_Animation(event, true);
                      }}
                      onMouseLeave={(event) => {
                        button_Hover_Animation(event, false);
                      }}
                    >
                      <span className="w-full text-lg absolute top-1/2 left-1/2 -translate-1/2 z-10">
                        Explore More
                      </span>
                      <span className="absolute bg-layoutText w-1/2 h-1/2 -translate-1/2 scale-0"></span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="w-full h-[10%] bg-layout/60 backdrop-blur-lg text-layoutText font-Florisha flex flex-nowrap justify-center gap-5 mobile:justify-around items-center">
            {["Prev", "Next"].map((elem, index) => {
              return (
                <button
                  key={index}
                  className="h-12 w-30 border-dashed rounded-4xl font-extrabold relative overflow-hidden z-1 border"
                  onClick={
                    elem === "Prev"
                      ? image_Slider_Handler_Prev
                      : image_Slider_Handler_Next
                  }
                  onMouseEnter={(event) => {
                    button_Hover_Animation(event, true);
                  }}
                  onMouseLeave={(event) => {
                    button_Hover_Animation(event, false);
                  }}
                >
                  <span className="text-lg absolute top-1/2 left-1/2 -translate-1/2 z-10">
                    {elem}
                  </span>
                  <span className="absolute bg-layoutText w-1/2 h-1/2 rounded-4xl -translate-1/2 scale-0"></span>
                </button>
              );
            })}
          </div>
        </section>
        <section className="w-full h-svh overflow-hidden relative">
          <video
            src={home_Video}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          ></video>

          {/* <div className="w-full h-full absolute inset-0">
            <div className="w-[500px] h-[500px] bg-layout/40 cursor-grab"></div>
          </div> */}
        </section>
      </div>
    </>
  );
};

export default Home;
