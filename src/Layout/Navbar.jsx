import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { CustomEase } from "gsap/all";
import { HiDotsHorizontal, HiOutlineMenuAlt4 } from "react-icons/hi";
import React, { useEffect, useRef, useState } from "react";
import {
  MdKeyboardDoubleArrowDown,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";

const Navbar = () => {
  const [isNav_O_C, setIsnav_O_C] = useState(true);
  const [nav_Link_Circle_Text, setNav_Link_Circle_Text] = useState("Hey!");
  const navRef = useRef();
  const { contextSafe } = useGSAP({ scope: navRef });
  const navLinkRef = useRef([]);
  const navbarTimeline = useRef(
    gsap.timeline({
      paused: true,
      defaults: {
        ease: "power2.inOut",
      },
    }),
  ).current;

  const navLinkText = [
    "Rolls-Royce",
    "Mercedes'S-Class",
    "Toyota-Supra",
    "BMW-Series-i7",
  ];

  const navBottomLinkText = [
    "Home",
    "Contact Us",
    "About Us",
    "FAQs",
    "Terms & Condition",
    "Privacy & Policy",
  ];

  useGSAP(() => {
    navbarTimeline
      .to("#Navbar", {
        top: "0%",
        duration: 0.3,
      })
      .to("#Nav_Bottom", {
        y: "0%",
        duration: 0.3,
      })
      .from("#Nav_Link_Numbers", {
        x: -50,
        opacity: 0,
        duration: 0.1,
      })
      .from("#Nav_Link_Spans", {
        y: -50,
        opacity: 0,
        duration: 0.1,
        stagger: 0.03,
      })
      .from("#Navbar_Center_Left", {
        opacity: 0,
        left: -100,
        duration: 0.3,
      });
  }, []);

  const nav_O_C_Handler = contextSafe(() => {
    setIsnav_O_C((prev) => {
      if (prev) {
        navbarTimeline.play();
        document.body.style.overflow = "hidden";
      } else {
        navbarTimeline.reverse();
        document.body.style.overflow = "auto";
      }
      return !prev;
    });

    gsap
      .timeline({
        defaults: {
          duration: 0.4,
          ease: "power2.out",
          yPercent: isNav_O_C ? -100 : 0,
        },
      })
      .to(document.querySelector(".Header_Menu_Open"), {})
      .to(document.querySelector(".Header_Menu_Close"), {}, "<");
  });

  const nav_Link_Spans_Animation_Handler = contextSafe((event) => {
    const target = event.target;
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
      .to(target, {
        y: -10,
        scale: 1.3,
        onStart: () => {
          target.style.textDecoration = "underline";
        },
      })
      .to(target, {
        y: 0,
        scale: 1,
        onComplete: () => {
          target.style.textDecoration = "none";
        },
      });
  });

  const nav_Center_Circle_Handler = contextSafe((event) => {
    if (isNav_O_C) return;
    const clientX = event.touches ? event.touches[0].clientX : event.clientX;
    const clientY = event.touches ? event.touches[0].clientY : event.clientY;
    gsap.to("#Nav_Link_Circle", {
      x: `${clientX}px`,
      y: `${clientY}px`,
      duration: 0.1,
      ease: "sine.inOut",
    });
  });

  const nav_Link_Circle_Animation = (linkNumber) => {
    setNav_Link_Circle_Text(linkNumber);
  };

  useEffect(() => {
    const animate1 = contextSafe(() => {
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
    animate1();

    const animate2 = contextSafe(() => {
      gsap.fromTo(
        "#Nav_Image",
        {
          transform: "rotate3d(1, 2, 3, 20deg)",
          skewY: "20deg",
          duration: 0.3,
          ease: "power5.inOut",
          scale: 0.5,
        },
        {
          transform: "rotate3d(1, 2, 3, 0deg)",
          skewY: "0deg",
          scale: 1,
          duration: 0.3,
          ease: "power5.inOut",
        },
      );
    });
    animate2();
  }, [nav_Link_Circle_Text]);

  const nav_Images_Animation = contextSafe(() => {
    const circle = document.querySelector("#Nav_Link_Circle");
    const quickX = gsap.quickTo("#Nav_Image", "x", {
      duration: 1.2,
      ease: "expo.out",
    });
    const quickY = gsap.quickTo("#Nav_Image", "y", {
      duration: 1.2,
      ease: "expo.out",
    });
    quickX(circle.getBoundingClientRect().top / 10);
    quickY(circle.getBoundingClientRect().left / 10);
  });

  useGSAP(() => {
    gsap.to("#Nav_Image", {
      y: "+=10",
      repeat: -1,
      yoyo: true,
      duration: 2,
      ease: "sine.inOut",
    });
    gsap.fromTo(
      "#Nav_Link_Circle",
      { scale: 1.4 },
      { scale: 1, duration: 0.5, ease: "power3.inOut" },
    );
  }, [nav_Link_Circle_Text]);

  const Nav_Bottom_Links_Ref = useRef([]);

  const nav_Bottom_Links_Animation_Start = contextSafe((ind) => {
    const elem = Nav_Bottom_Links_Ref.current[ind];
    gsap.to(elem.querySelector(".Nav_Bottom_Link_1"), {
      duration: 0.4,
      ease: "power3.out",
      yPercent: -100,
    });
    gsap.to(elem.querySelector(".Nav_Bottom_Link_2"), {
      duration: 0.4,
      ease: "power3.out",
      yPercent: -100,
    });
  });
  const nav_Bottom_Links_Animation_Reset = contextSafe((ind) => {
    const elem = Nav_Bottom_Links_Ref.current[ind];
    gsap.to(elem.querySelector(".Nav_Bottom_Link_1"), {
      duration: 0.4,
      ease: "power3.out",
      yPercent: 0,
    });
    gsap.to(elem.querySelector(".Nav_Bottom_Link_2"), {
      duration: 0.4,
      ease: "power3.out",
      yPercent: 0,
    });
  });

  const nav_Image_Class = `nav-Image-Active object-cover mobile:object-contain object-center absolute mobile:w-87.5 mobile:h-87.5 tablet:w-112.5 tablet:h-112.5 desktop:w-137.5 desktop:h-162.5 opacity-100`;

  useEffect(() => {
    const header = document.querySelector("#Header");
    const headerArrow = document.querySelector("#Header_Arrow");
    const a = (event) => {
      if (event.clientX <= header.clientWidth) {
        gsap.to(header, {
          left: 0,
          duration: 0.4,
          ease: "power2.inOut",
        });
        headerArrow.style.display = "none";
      } else {
        gsap.to(header, {
          left: "-50%",
          duration: 0.4,
          ease: "power2.inOut",
        });
        headerArrow.style.display = "block";
      }
    };
    document.body.addEventListener("mousemove", a);
    document.body.addEventListener("touchmove", a);
    const headerAnimationHandler = () => {
      if (window.matchMedia("(max-width: 700px)").matches) {
        gsap.to(header, {
          left: "-50%",
          duration: 0.4,
          ease: "power2.inOut",
        });
        headerArrow.style.display = "block";
      }
    };
    headerAnimationHandler();
    window.addEventListener("resize", () => {
      (headerAnimationHandler(), a());
    });
  }, [isNav_O_C]);

  return (
    <>
      <header
        className="w-20 mobile:w-28 h-svh fixed -left-1/2 flex flex-col justify-between items-center py-4 border-r border-dashed text-layoutText font-Bruney z-200 bg-layout/40 backdrop-blur-md cursor-pointer font-extrabold"
        id="Header"
      >
        {" "}
        <button
          className="flex flex-col items-center justify-center"
          onClick={nav_O_C_Handler}
        >
          <HiDotsHorizontal className="size-8 tablet:size-10" />
          <div className="text-sm tablet:text-lg relative inline-block overflow-hidden">
            <span className={`Header_Menu_Open block`}>Open</span>
            <span className={`Header_Menu_Close absolute left-0 top-full`}>
              Close
            </span>
          </div>
        </button>
        <h1 className="text-lg tablet:text-3xl">CAR X</h1>
      </header>

      <span
        className={
          "fixed top-1/2 -translate-y-1/2 -left-2 animate-pulse z-1000 text-layoutText"
        }
        id="Header_Arrow"
      >
        <MdKeyboardDoubleArrowRight className="size-7 mobile:size-16" />
      </span>

      <nav
        className={`w-full h-full fixed -top-full overflow-hidden flex flex-col justify-between items-center text-layoutText bg-layout/70 backdrop-blur-sm font-Bruney z-100`}
        id="Navbar"
        ref={navRef}
      >
        <div
          className={`w-full h-full relative overflow-hidden`}
          id="Navbar_Center"
          onMouseMove={nav_Center_Circle_Handler}
          onTouchMove={nav_Center_Circle_Handler}
        >
          <div
            className={`w-full mobile:w-[40%] h-full absolute left-0 flex items-center justify-center`}
            id="Navbar_Center_Left"
          >
            {nav_Link_Circle_Text === "Hey!" && (
              <img
                src={`/images/nav-image-5.webp`}
                alt={`Nav_Image_5`}
                className={nav_Image_Class}
                onMouseEnter={nav_Images_Animation}
                id="Nav_Image"
              />
            )}
            {Array.from({ length: 4 }, (_, i) => i + 1).map((elem, index) => {
              if (elem === nav_Link_Circle_Text) {
                return (
                  <React.Fragment key={index}>
                    <img
                      src={`/images/nav-image-${elem}.webp`}
                      alt={`Nav_Image_${elem}`}
                      className={nav_Image_Class}
                      onMouseEnter={nav_Images_Animation}
                      id="Nav_Image"
                    />
                  </React.Fragment>
                );
              }
            })}
          </div>

          <div
            className="w-full mobile:w-[60%] h-full absolute right-0 flex flex-col justify-center items-start gap-4 laptop:gap-7 desktop:gap-10 extraLarge:gap-11 font-extrabold px-2 bg-layout/60 mobile:bg-transparent"
            id="Navbar_Center_Right"
          >
            {Array.from({ length: 4 }, (_, i) => i + 1).map((elem, index) => {
              return (
                <React.Fragment key={index}>
                  <li
                    className="flex justify-center items-center gap-5 cursor-pointer py-2 p-2 z-1"
                    onMouseEnter={() => {
                      nav_Link_Circle_Animation(elem);
                    }}
                    onTouchStart={() => {
                      nav_Link_Circle_Animation(elem);
                    }}
                  >
                    <span
                      className="text-lg extraLarge:text-xl"
                      id="Nav_Link_Numbers"
                    >
                      {elem}.
                    </span>
                    <a
                      target="_blank"
                      href="https://www.github.com/huzaifarz"
                      className="text-[22px] smallMobile:text-[35px] tablet:text-[40px] laptop:text-[50px] desktop:text-6xl extraLarge:text-7xl"
                    >
                      {navLinkText[index].split("").map((e, i) => {
                        return (
                          <span
                            key={i}
                            onMouseOver={nav_Link_Spans_Animation_Handler}
                            onTouchStart={nav_Link_Spans_Animation_Handler}
                            className="inline-block ml-2"
                            id="Nav_Link_Spans"
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
            className={`w-25 h-25 absolute top-1/2 flex justify-center items-center rounded-full text-2xl bg-cover bg-center`}
            id="Nav_Link_Circle"
            style={{
              backgroundImage: `url(/images/nav-image-${nav_Link_Circle_Text}.webp)`,
              left: "-100px",
              top: "-100px",
            }}
          >
            <span className="absolute inset-0 bg-black/50 backdrop-blur-[1px] rounded-full" />
            <span className="relative drop-shadow-lg">
              {nav_Link_Circle_Text}
            </span>
          </span>
        </div>

        <div
          className="w-full border-t border-dashed flex flex-wrap justify-center items-center gap-5 px-2 py-3 mobile:py-5 font-Bruney z-1 translate-y-full"
          id="Nav_Bottom"
        >
          {navBottomLinkText.map((elem, ind) => {
            return (
              <React.Fragment key={ind}>
                <a
                  href="sdsadsa.com"
                  target="_blank"
                  className="font-extralight text-xs mobile:text-sm tablet:text-lg tracking-widest relative inline-block overflow-hidden px-3 mobile:px-5 border-r border-dashed text-white"
                  onMouseEnter={() => {
                    nav_Bottom_Links_Animation_Start(ind);
                  }}
                  onMouseLeave={() => {
                    nav_Bottom_Links_Animation_Reset(ind);
                  }}
                  ref={(el) => {
                    Nav_Bottom_Links_Ref.current[ind] = el;
                  }}
                >
                  <span className={`block Nav_Bottom_Link_1`}>{elem}</span>
                  <span
                    className={`absolute left-0 top-full Nav_Bottom_Link_2`}
                  >
                    {elem}
                  </span>
                </a>
              </React.Fragment>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
