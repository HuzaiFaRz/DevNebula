import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { CustomEase } from "gsap/all";
import { HiDotsHorizontal, HiOutlineMenuAlt4 } from "react-icons/hi";
import React, { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const [isNav_O_C, setIsnav_O_C] = useState(true);

  // const navbar = document.getElementById("Navbar");
  // const navbarImages = document.querySelector("#Navbar_Images");
  // const navbarTimeline = gsap.timeline({ paused: true });

  // navbarTimeline.to("#Navbar", {
  //   height: "100%",
  //   // rotate: "0deg",
  //   // left: "0%",
  //   duration: 0.6,
  //   ease: "hop",
  // });

  // navbarTimeline.from("#Navbar_Images", {
  //   transformOrigin: "left center",
  //   transformStyle: "preserve-3d",
  //   backfaceVisibility: "hidden",
  //   left: 0,
  //   rotateY: "-90deg",
  //   opacity: 0.6,
  //   duration: 0.3,
  //   stagger: 0.1,
  //   ease: "power2.out",
  // });

  // navbarTimeline.from("#Navbar_Links", {
  //   transformOrigin: "left center",
  //   transformStyle: "preserve-3d",
  //   backfaceVisibility: "hidden",
  //   right: 0,
  //   rotateY: "-90deg",
  //   opacity: 0.6,
  //   duration: 0.3,
  //   stagger: 0.1,
  //   ease: "power2.out",
  // });

  // navbarTimeline.from("Navbar_Link_Circle", {
  //   display: "none",
  // });

  // let lastIndexOFImage = 0;

  // Array.from(navbarLink).forEach((elem, index) => {
  //   elem.addEventListener("mousemove", function () {
  //     lastIndexOFImage = index;
  //     gsap.to(elem, {
  //       scale: 1.1,
  //       duration: 0.1,
  //       ease: "power1.inOut",
  //     });

  //     navbarImage.forEach((elem, ind) => {
  //       if (ind === lastIndexOFImage) {
  //         gsap.to(elem, {
  //           display: "flex",
  //           // scale: 0,
  //           duration: 0,
  //           ease: "power1.inOut",
  //         });
  //       } else {
  //         gsap.to(elem, {
  //           display: "none",
  //           // scale: 0,
  //           duration: 0,
  //           ease: "power1.inOut",
  //         });
  //       }
  //     });
  //   });

  //   elem.addEventListener("mouseleave", function () {
  //     lastIndexOFImage = index;
  //     navbarImage.forEach((elem, ind) => {
  //       if (ind === lastIndexOFImage) {
  //         gsap.to(elem, {
  //           display: "flex",
  //           duration: 0,
  //           ease: "power1.inOut",
  //         });
  //       } else {
  //         gsap.to(elem, {
  //           display: "none",
  //           duration: 0,
  //           ease: "power1.inOut",
  //         });
  //       }
  //     });

  //     gsap.to(elem, {
  //       yPercent: 0,
  //       x: -0,
  //       scale: 1,
  //       duration: 0.1,
  //       ease: "power1.inOut",
  //     });
  //   });
  // });

  const [nav_Link_Circle_Text, setNav_Link_Circle_Text] = useState("Hey!");

  const navRef = useRef();
  const { contextSafe } = useGSAP({ scope: navRef });
  const navLinkRef = useRef([]);
  const navLinkText = [
    "BMW-Series-i7",
    "Toyota-Supra",
    "Rolls-Royce",
    "Mercedes'S-Class",
  ];

  const nav_O_C_Handler = contextSafe(() => {
    setIsnav_O_C(!isNav_O_C);
    gsap
      .timeline({
        defaults: {
          duration: 0.4,
          ease: "power2.out",
          yPercent: isNav_O_C ? -100 : 0,
        },
      })
      .to(".Nav_Menu_Open", {})
      .to(".Nav_Menu_Close", {}, "<");
  });

  const nav_Link_Spans_Animation_Handler = contextSafe((event) => {
    if (event.target.textContent === "-" || event.target.textContent === "'") {
      return;
    }
    gsap
      .timeline({
        defaults: {
          duration: 0.2,
          ease: "power2.out",
        },
      })
      .to(event.target, {
        y: -10,
        scale: 1.3,
        onStart: () => {
          event.target.style.textDecoration = "underline";
        },
      })
      .to(event.target, {
        y: 1,
        scale: 1,
        onComplete: () => {
          event.target.style.textDecoration = "none";
        },
      });
  });

  const nav_Center_Circle_Handler = contextSafe((event) => {
    if (!isNav_O_C) {
      return;
    }

    gsap.to("#Nav_Link_Circle", {
      left: `${event.clientX}px`,
      top: `${event.clientY}px`,
      duration: 0.1,
      ease: "sine.inOut",
    });
  });

  const nav_Link_Circle_Animation = (linkNumber) => {
    setNav_Link_Circle_Text(linkNumber);
  };

  useEffect(() => {
    const animate = contextSafe(() => {
      gsap.fromTo(
        "#Nav_Link_Circle",
        {
          scale: 1.4,
        },
        {
          scale: 1,
          duration: 0.5,
          ease: "power3.inOut",
        },
      );
    });
    animate();
  }, [nav_Link_Circle_Text]);

  return (
    <>
      <nav
        className="w-full h-full font-Florisha bg-black relative flex flex-col justify-center items-center"
        id="Navbar"
        ref={navRef}
      >
        <div
          className="w-full flex justify-between items-center p-2 px-4 z-100 fixed top-0 bg-blue-950 text-mist-300"
          id="Navbar_Top"
        >
          <h1 className="text-lg sm:text-3xl">CAR X</h1>
          <button
            className="flex flex-col items-center justify-center cursor-pointer"
            onClick={nav_O_C_Handler}
          >
            <HiDotsHorizontal className="size-8 sm:size-10" />
            <div className="text-sm sm:text-lg relative inline-block overflow-hidden">
              <span className={`block Nav_Menu_Open`}>Open</span>
              <span className={`absolute left-0 top-full Nav_Menu_Close`}>
                Close
              </span>
            </div>
          </button>
        </div>

        <div
          className="bg-amber-300 w-full h-full absolute overflow-hidden"
          id="Navbar_Center"
          onMouseMove={nav_Center_Circle_Handler}
        >
          <div
            className="absolute left-0 w-[40%] h-full bg-red-300 flex items-center justify-center"
            onMouseEnter={() => {
              setNav_Link_Circle_Text("Hey!");
            }}
          >
            {Array.from({ length: 4 }, (_, i) => i + 1).map((elem, index) => {
              return (
                <React.Fragment key={index}>
                  <img
                    src={`/images/nav-image-${elem}.webp`}
                    alt={`Nav_Image_${elem}`}
                    className="w-75 object-cover object-center absolute"
                  />
                </React.Fragment>
              );
            })}
          </div>

          <div className="absolute right-0 w-[60%] h-full bg-red-400 flex flex-col justify-center items-start gap-15  font-extrabold px-10 text-6xl">
            {Array.from({ length: 4 }, (_, i) => i + 1).map((elem, index) => {
              return (
                <React.Fragment key={index}>
                  <li
                    className="flex justify-center items-center gap-5 cursor-pointer py-2"
                    onMouseEnter={() => {
                      nav_Link_Circle_Animation(elem);
                    }}
                  >
                    <span className="text-xl">{elem}.</span>
                    <a target="_blank">
                      {navLinkText[index].split("").map((e, i) => {
                        return (
                          <span
                            key={i}
                            onMouseOver={nav_Link_Spans_Animation_Handler}
                            className="inline-block ml-2"
                          >
                            {e}
                          </span>
                        );
                      })}
                    </a>
                  </li>
                </React.Fragment>
              );
            })}
          </div>

          <span
            className="absolute w-25 h-25 bg-white/30 backdrop-blur-sm rounded-full top-1/2 flex justify-center items-center text-2xl"
            id="Nav_Link_Circle"
          >
            {nav_Link_Circle_Text}
          </span>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
