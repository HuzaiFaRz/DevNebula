import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { HiDotsHorizontal, HiOutlineMenuAlt4 } from "react-icons/hi";
import React, { useEffect, useRef, useState } from "react";
import navbar_ImagesGroup_IMG from "/images/nav-image-group.webp";
import {
  MdKeyboardDoubleArrowDown,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isNav_O_C, setIsnav_O_C] = useState(true);
  const [nav_Link_Circle_Text, setNav_Link_Circle_Text] = useState("Hey!");
  const navRef = useRef(null);
  const { contextSafe } = useGSAP({ scope: navRef });
  const navbarTimeline = useRef(
    gsap.timeline({
      paused: true,
      defaults: {
        ease: "power2.inOut",
      },
    }),
  ).current;

  const navbar_Images = [
    "https://images.unsplash.com/photo-1631295868223-63265b40d9e4?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1610099610040-ab19f3a5ec35?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1627008119017-f89d9704a799?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1651078944944-5d5507799a51?q=80&w=388&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    navbar_ImagesGroup_IMG,
  ];

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
    "Privacy & Policy",
  ];

  const nav_O_C_Handler = contextSafe(() => {
    setIsnav_O_C((prev) => {
      prev ? navbarTimeline.play() : navbarTimeline.reverse();
      document.body.style.overflow = prev ? "hidden" : "auto";
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
      })
      .from("#Nav_Link_Circle", {
        opacity: 0,
        duration: 0.3,
      });
  }, []);

  const nav_Link_Spans_Animation_Handler = contextSafe((event) => {
    const target = event.target;
    if (event.target.textContent === "-" || event.target.textContent === "'")
      return;
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

  const navbar_Center_Default_Ease = {
    duration: 0.3,
    ease: "power5.inOut",
  };

  useEffect(() => {
    gsap.fromTo(
      "#Nav_Link_Circle",
      {
        scale: 1.4,
      },
      {
        scale: 1,
        ...navbar_Center_Default_Ease,
      },
    );

    gsap.fromTo(
      "#Nav_Image",
      {
        transform: "rotate3d(1, 2, 3, 20deg)",
        skewY: "20deg",
        scale: 0.5,
        ...navbar_Center_Default_Ease,
      },
      {
        transform: "rotate3d(1, 2, 3, 0deg)",
        skewY: "0deg",
        scale: 1,
        ...navbar_Center_Default_Ease,
      },
    );

    gsap.to("#Nav_Image", {
      y: "+=10",
      repeat: -1,
      yoyo: true,
      duration: 1,
      ease: "sine.inOut",
    });
  }, [nav_Link_Circle_Text]);

  const navbar_Images_Default_Ease = {
    duration: 1,
    ease: "expo.out",
  };

  const nav_Images_Animation = contextSafe(() => {
    const circle = document.querySelector("#Nav_Link_Circle");
    const quickX = gsap.quickTo("#Nav_Image", "x", {
      ...navbar_Images_Default_Ease,
    });
    const quickY = gsap.quickTo("#Nav_Image", "y", {
      ...navbar_Images_Default_Ease,
    });
    quickX(circle.getBoundingClientRect().top / 10);
    quickY(circle.getBoundingClientRect().left / 10);
  });

  const Nav_Bottom_Links_Ref = useRef([]);

  const nav_Bottom_Links_Animation = contextSafe((ind, start) => {
    const elem = Nav_Bottom_Links_Ref.current[ind];
    if (!elem) return;
    const config = {
      yPercent: start ? -100 : 0,
      duration: 0.3,
      ease: "power3.out",
    };
    gsap.to(elem.querySelector(".Nav_Bottom_Link_1"), config);
    gsap.to(elem.querySelector(".Nav_Bottom_Link_2"), config);
  });

  const nav_Image_Class = `object-cover mobile:object-contain object-center absolute`;

  useEffect(() => {
    const header = document.querySelector("#Header");
    const headerArrow = document.querySelector("#Header_Arrow");
    const header_Default_Ease = {
      duration: 0.2,
      ease: "power2.inOut",
    };
    const headerHidden = contextSafe(() => {
      gsap.to(header, {
        left: "-50%",
        ...header_Default_Ease,
      });
      if (headerArrow) headerArrow.style.display = "block";
    });
    const headerAnimation = contextSafe((event) => {
      let x = event.touches ? event.touches[0].clientX : event.clientX;
      gsap.to(header, {
        left: x <= header.clientWidth ? "0%" : "-50%",
        ...header_Default_Ease,
      });
      headerArrow.style.display = x <= header.clientWidth ? "none" : "block";
    });

    const headerResponsiveAnimation = () => {
      if (window.matchMedia("(max-width: 700px)").matches) {
        headerHidden();
      }
    };

    document.body.addEventListener("mousemove", headerAnimation);
    document.body.addEventListener("touchmove", headerAnimation);
    window.addEventListener("resize", headerResponsiveAnimation);

    headerResponsiveAnimation();

    return () => {
      document.body.removeEventListener("mousemove", headerAnimation);
      document.body.removeEventListener("touchmove", headerAnimation);
      window.removeEventListener("resize", headerResponsiveAnimation);
    };
  }, [isNav_O_C]);

  return (
    <>
      <header
        className="w-20 mobile:w-28 h-svh fixed -left-1/2 flex flex-col justify-between items-center py-4 border-r border-dashed text-layoutText font-Bruney z-50 bg-layout/40 backdrop-blur-md cursor-pointer font-extrabold"
        id="Header"
      >
        <button
          className="flex flex-col items-center justify-center"
          onClick={nav_O_C_Handler}
        >
          <HiDotsHorizontal className="size-8 tablet:size-10" />
          <div className="text-sm tablet:text-lg relative inline-block overflow-hidden font-Glitten-Regular">
            <span className={`Header_Menu_Open block`}>Open</span>
            <span className={`Header_Menu_Close absolute left-0 top-full`}>
              Close
            </span>
          </div>
        </button>
        <h1 className="text-lg tablet:text-3xl">
          <Link to={"/"}>CAR X</Link>
        </h1>
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
        className={`w-full h-full fixed -top-full overflow-hidden flex flex-col justify-between items-center text-layoutText bg-layout/70 backdrop-blur-sm font-Bruney z-30`}
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
                src={navbar_ImagesGroup_IMG}
                alt={`Nav_Image_5`}
                className={nav_Image_Class}
                onMouseEnter={nav_Images_Animation}
                id="Nav_Image"
              />
            )}
            {navbar_Images.map((elem, index) => {
              if (index + 1 === nav_Link_Circle_Text) {
                return (
                  <img
                    key={index}
                    src={elem}
                    alt={`Nav_Image_${index}`}
                    className={nav_Image_Class}
                    onMouseEnter={nav_Images_Animation}
                    id="Nav_Image"
                  />
                );
              }
            })}
          </div>

          <div
            className="w-full mobile:w-[60%] h-full absolute right-0 flex flex-col justify-center items-start gap-4 laptop:gap-7 desktop:gap-10 extraLarge:gap-11 font-extrabold px-2 bg-layout/60 mobile:bg-transparent"
            id="Navbar_Center_Right"
          >
            {navLinkText.map((elem, index) => {
              return (
                <li
                  key={index}
                  className="flex justify-center items-center gap-5 cursor-pointer py-2 p-2 z-10"
                  onMouseEnter={() => {
                    nav_Link_Circle_Animation(index + 1);
                  }}
                  onTouchStart={() => {
                    nav_Link_Circle_Animation(index + 1);
                  }}
                >
                  <span
                    className="text-lg extraLarge:text-xl"
                    id="Nav_Link_Numbers"
                  >
                    {index + 1}.
                  </span>
                  <a
                    onClick={nav_O_C_Handler}
                    href={`cars/${elem.toLocaleLowerCase()}`}
                    className="text-[22px] smallMobile:text-[35px] tablet:text-[40px] laptop:text-[50px] desktop:text-6xl extraLarge:text-7xl"
                  >
                    {elem.split("").map((e, i) => {
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
              );
            })}
          </div>

          <span
            className={`w-25 h-25 absolute top-1/2 flex justify-center items-center rounded-full text-2xl bg-cover bg-center`}
            id="Nav_Link_Circle"
            style={{
              backgroundImage: `url(${navbar_Images[nav_Link_Circle_Text - 1]})`,
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
          className="w-full border-t border-dashed flex flex-wrap justify-center items-center gap-5 px-2 py-3 mobile:py-5 font-Bruney z-10 translate-y-full"
          id="Nav_Bottom"
        >
          {navBottomLinkText.map((elem, index) => {
            let link =
              index === 0
                ? "/"
                : elem.replace(/[^a-zA-Z0-9]/g, "").toLocaleLowerCase();

            return (
              <a
                key={index}
                href={link}
                className="font-extralight text-xs mobile:text-sm tablet:text-lg tracking-widest relative inline-block overflow-hidden px-3 mobile:px-5 border-r border-dashed text-white"
                onMouseEnter={() => {
                  nav_Bottom_Links_Animation(index, true);
                }}
                onMouseLeave={() => {
                  nav_Bottom_Links_Animation(index, false);
                }}
                onClick={nav_O_C_Handler}
                ref={(el) => {
                  Nav_Bottom_Links_Ref.current[index] = el;
                }}
              >
                <span className={`block Nav_Bottom_Link_1`}>{elem}</span>
                <span className={`absolute left-0 top-full Nav_Bottom_Link_2`}>
                  {elem}
                </span>
              </a>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
