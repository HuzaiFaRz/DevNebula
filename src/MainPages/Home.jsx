import { useEffect, useRef, useState } from "react";
import home_Video from "/videos/homeVideo.mp4";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(Draggable);
const Home = () => {
  const [currentIndexImage, setCurrentIndexImage] = useState(0);
  const [whatSize, setWhatSize] = useState(
    typeof window !== "undefined"
      ? window.matchMedia("(max-width: 800px)").matches
      : false,
  );
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

  const video_Masks = [
    {
      width: "clamp(300px, 30vw, 500px)",
      height: "250px",
      top: "1vh",
      right: "60vw",
    },

    {
      width: "clamp(300px, 30vw, 500px)",
      height: "250px",
      top: "50vh",
      right: "60vw",
    },

    {
      width: "clamp(300px, 35vw, 400px)",
      height: "200px",
      top: "60vh",
      right: "5vw",
    },

    {
      width: "clamp(250px, 45vw, 600px)",
      height: "300px",
      top: "1vh",
      right: "5vw",
    },
  ];

  useEffect(() => {
    const videosContainer = document.querySelector(".videos-container");
    const dragBoxes = document.querySelectorAll(".drag-box");
    const allVideos = document.querySelectorAll("video");
    if (!videosContainer || dragBoxes.length === 0 || allVideos.length === 0)
      return;

    if (whatSize) {
      allVideos.forEach((video) => {
        video.pause();
      });
      return;
    } else {
      allVideos.forEach((video) => {
        video.playbackRate = 0.8;
        video.play().catch(() => {});
      });
    }

    dragBoxes.forEach((box, index) => {
      const innerVideo = box.querySelector(".inner-video");
      const dragBoxX = box.querySelector(".drag-box-X");
      const dragBoxY = box.querySelector(".drag-box-Y");
      const dragBoxW = box.querySelector(".drag-box-W");
      const dragBoxH = box.querySelector(".drag-box-H");
      const videoS = box.querySelector(".video-S");
      const videoT = box.querySelector(".video-T");
      const videoPrgressBar = box.querySelector(".video-Prgress-Bar");
      const videoV = box.querySelector(".video-V");

      if (!innerVideo) return;

      innerVideo.addEventListener("timeupdate", (event) => {
        const currentSeconds = innerVideo.currentTime;
        const totalSeconds = innerVideo.duration;
        videoT.innerHTML = `T: ${currentSeconds.toFixed(3)}(S)`;
        if (totalSeconds > 0) {
          const percentagePlayed = (currentSeconds / totalSeconds) * 100;
          gsap.to(videoPrgressBar, {
            width: `${percentagePlayed}%`,
            duration: 0.6,
            ease: "power2.out",
          });
        }
      });

      const update_Video_Position = () => {
        let videosContainerRect = videosContainer.getBoundingClientRect();
        let dragBoxRect = box.getBoundingClientRect();
        let { x, y, width, height } = dragBoxRect;

        dragBoxX.innerHTML = `X:${x.toFixed(2)}px`;
        dragBoxY.innerHTML = `Y:${y.toFixed(2)}px`;
        dragBoxW.innerHTML = `W:${width.toFixed(2)}px`;
        dragBoxH.innerHTML = `H:${height.toFixed(2)}px`;

        gsap.set(innerVideo, {
          x: `${videosContainerRect.left - dragBoxRect.left}px`,
          y: `${videosContainerRect.top - dragBoxRect.top}px`,
        });
      };

      update_Video_Position();

      let isDrag = false;
      let currentX = 0,
        currentY = 0,
        initialLeft = 0,
        initialTop = 0;

      const setting_Positions = (e) => {
        isDrag = true;
        videoS.innerHTML = "active";
        videoS.style.color = "green";
        currentX = e.clientX;
        currentY = e.clientY;
        initialLeft = box.offsetLeft;
        initialTop = box.offsetTop;
        box.style.zIndex = 50;
      };

      const givingPostions = (event) => {
        if (!isDrag) return;
        const dx = event.clientX - currentX;
        const dy = event.clientY - currentY;
        videoV.innerHTML = `V: ${Math.sqrt(dx * dx + dy * dy).toFixed(2)}`;
        const nextLeft = initialLeft + dx;
        const nextTop = initialTop + dy;
        gsap.to(box, {
          left: `${nextLeft}px`,
          top: `${nextTop}px`,
          duration: 0.3,
          ease: "power2.out",
          onUpdate: update_Video_Position,
        });
      };

      const removingPositions = (event) => {
        if (isDrag) {
          videoS.innerHTML = "unactive";
          videoS.style.color = "#fb2c36";
          isDrag = false;
          box.style.zIndex = 1;
        }
      };

      window.addEventListener("resize", update_Video_Position);
      box.addEventListener("mousedown", setting_Positions);
      document.addEventListener("mousemove", givingPostions);
      document.addEventListener("mouseup", removingPositions);

      box._cleanup = () => {
        box.removeEventListener("mousedown", setting_Positions);
        document.removeEventListener("mousemove", givingPostions);
        document.removeEventListener("mouseup", removingPositions);
        window.removeEventListener("resize", update_Video_Position);
      };
    });

    return () => {
      dragBoxes.forEach((box) => {
        if (box._cleanup) box._cleanup();
      });
    };
  }, [whatSize]);

  return (
    <>
      <div className="overflow-hidden" ref={homeRef}>
        <section className="w-screen h-screen overflow-hidden relative bg-black videos-container">
          <video
            src={home_Video}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-50 absolute inset-0 main-video"
          ></video>

          {!whatSize ? (
            video_Masks.map((elem, index) => {
              const { width, height, top, right } = elem;
              return (
                <div
                  key={index}
                  className={`absolute overflow-hidden will-change-transform w-full h-50 my-4 right-auto top-auto drag-box cursor-grab active:cursor-grabbing select-none backdrop-blur-sm border shadow-[inset_0_0_12px_rgba(16,185,129,0.05)] hover:border-layout hover:shadow-[0_0_20px_rgba(52,211,153,0.15),inset_0_0_15px_rgba(52,211,153,0.1)] active:border-layout active:shadow-[0_0_25px_rgba(34,211,238,0.25)] transition-all duration-300 ease-out`}
                  style={
                    typeof window !== undefined && window.innerWidth >= 768
                      ? {
                          width,
                          height,
                          top,
                          right,
                        }
                      : {}
                  }
                >
                  <div className="w-full h-full absolute inset-0 text-xs text-layoutText z-50 font-mono flex flex-col justify-between items-center">
                    <div className="w-full py-2 flex flex-wrap justify-evenly items-center bg-layout/60">
                      <span className="drag-box-X"></span>
                      <span className="drag-box-Y"></span>
                      <span className="drag-box-W"></span>
                      <span className="drag-box-H"></span>
                    </div>

                    <div className="w-full py-2 flex flex-wrap justify-evenly items-center bg-layout/60">
                      <span className="video-S text-red-500">unactive</span>
                      <span className="video-T"></span>
                      <span className="video-V">V: 0.00</span>
                      <div className="w-full bg-layoutText/50 h-1 mt-2">
                        <div className="bg-black h-1 video-Prgress-Bar w-0"></div>
                      </div>
                    </div>
                  </div>

                  <video
                    src={home_Video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="max-w-none object-cover absolute pointer-events-none opacity-100 inner-video"
                    style={{ width: "100vw", height: "100vh" }}
                  ></video>
                </div>
              );
            })
          ) : (
            <div>
              <div className="block md:hidden text-center px-6 py-8 font-mono border-b border-layout/20 bg-black/40 backdrop-blur-md">
                <h2 className="text-xl font-bold text-layoutText/80 tracking-widest uppercase mb-2 animate-pulse">
                  [SYSTEM_ACTIVE]
                </h2>
                <p className="text-sm text-layoutText/80 max-w-sm mx-auto leading-relaxed">
                  Monitoring real-time video stream matrices. Tap or drag
                  containers to explore hidden data masks and visual layers.
                </p>
              </div>
            </div>
          )}
        </section>

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
      </div>
    </>
  );
};

export default Home;
