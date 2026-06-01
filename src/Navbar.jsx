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

  const [nav_Link_Circle_Text, setNav_Link_Circle_Text] = useState("Hey!");

  const navRef = useRef();
  const { contextSafe } = useGSAP({ scope: navRef });
  const navLinkRef = useRef([]);
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
        "#Nav_Images",
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
    const quickX = gsap.quickTo("#Nav_Images", "x", {
      duration: 1.2,
      ease: "expo.out",
    });
    const quickY = gsap.quickTo("#Nav_Images", "y", {
      duration: 1.2,
      ease: "expo.out",
    });
    const top = circle.getBoundingClientRect().top;
    const left = circle.getBoundingClientRect().left;
    quickX(top / 10);
    quickY(left / 10);
    gsap.to("#Nav_Images", {
      y: "+=10",
      repeat: -1,
      yoyo: true,
      duration: 2,
      ease: "sine.inOut",
    });
  });

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

  return (
    <>
      <nav
        className="w-full h-svh bg-[#0D1717] relative flex flex-col justify-center items-center"
        id="Navbar"
        ref={navRef}
      >
        <div
          className="w-full flex justify-between items-center py-3 mobile:py-5 px-4 z-100 fixed top-0 border-b font-Glitten-Regular tracking-widest text-[#FDFCDC] bg-[#0D1717] border-dashed backdrop-blur-sm"
          id="Navbar_Top"
        >
          <h1 className="text-lg tablet:text-3xl">CAR X</h1>
          <button
            className="flex flex-col items-center justify-center cursor-pointer"
            onClick={nav_O_C_Handler}
          >
            <HiDotsHorizontal className="size-8 tablet:size-10" />
            <div className="text-sm tablet:text-lg relative inline-block overflow-hidden">
              <span className={`block Nav_Menu_Open`}>Open</span>
              <span className={`absolute left-0 top-full Nav_Menu_Close`}>
                Close
              </span>
            </div>
          </button>
        </div>

        <div
          className="w-full h-full absolute overflow-hidden font-Bruney"
          id="Navbar_Center"
          onMouseMove={nav_Center_Circle_Handler}
        >
          <div
            className={`absolute left-0 w-full mobile:w-[40%] h-full flex items-center justify-center`}
          >
            {Array.from({ length: 5 }, (_, i) => i + 1).map((elem, index) => {
              return (
                <React.Fragment key={index}>
                  <img
                    src={`/images/nav-image-${elem}.webp`}
                    alt={`Nav_Image_${elem}`}
                    className={`object-cover mobile:object-contain object-center absolute ${nav_Link_Circle_Text === "Hey!" ? `${index < 4 && "opacity-0"}` : elem === nav_Link_Circle_Text ? "w-full h-full mobile:w-87.5 mobile:h-87.5 tablet:w-112.5 tablet:h-112.5 desktop:w-137.5 desktop:h-162.5 opacity-100" : "w-50 h-50 opacity-0 animate-bounce"}`}
                    id="Nav_Images"
                    onMouseMove={nav_Images_Animation}
                  />
                </React.Fragment>
              );
            })}
          </div>

          <div
            className="absolute right-0 w-full mobile:w-[60%] h-full text-[#fdfcdc] flex flex-col justify-center items-start gap-4 laptop:gap-7 desktop:gap-10 extraLarge:gap-11 font-extrabold px-2 z-20
          bg-black/60 mobile:bg-transparent
          "
          >
            {Array.from({ length: 4 }, (_, i) => i + 1).map((elem, index) => {
              return (
                <React.Fragment key={index}>
                  <li
                    className="flex justify-center items-center gap-5 cursor-pointer py-2  p-2"
                    onMouseEnter={() => {
                      nav_Link_Circle_Animation(elem);
                    }}
                    onTouchStart={() => {
                      nav_Link_Circle_Animation(elem);
                    }}
                  >
                    <span className="text-lg extraLarge:text-xl">{elem}.</span>
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
            className={`absolute top-1/2 w-25 h-25 rounded-full flex justify-center items-center text-2xl bg-cover bg-center overflow-hidden z-10`}
            id="Nav_Link_Circle"
            style={{
              backgroundImage: `url(/images/nav-image-${nav_Link_Circle_Text}.webp)`,
            }}
          >
            <span className="absolute inset-0 bg-black/50 backdrop-blur-[1px]" />
            <span className="relative drop-shadow-lg  text-[#fdfcdc]">
              {nav_Link_Circle_Text}
            </span>
          </span>
        </div>

        <div
          className="w-full absolute bottom-0 text-[#fdfcdc] border-t border-dashed flex flex-wrap justify-center gap-5 items-center px-2 py-3 mobile:py-5 backdrop-blur-sm font-Bruney bg-[#0D1717] z-20"
          id="Nav_Bottom"
        >
          {navBottomLinkText.map((elem, ind) => {
            return (
              <React.Fragment key={ind}>
                <a
                  // href={elem.toLocaleLowerCase().replace(/[^a-zA-Z0-9]/g, "")}
                  className="font-extralight text-xs mobile:text-sm tablet:text-lg tracking-widest relative inline-block overflow-hidden px-3 mobile:px-5 border-r border-dashed"
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

          {/* <p className="self-center text-xs tablet:text-sm copyright font-mono">
            {" "}
            © {new Date().getFullYear()} Car X. All rights reserved.
          </p> */}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
