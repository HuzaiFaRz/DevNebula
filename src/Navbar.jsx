import { createIcons, Ellipsis } from "lucide";
import { gsap } from "gsap";
import { CustomEase } from "gsap/all";

const Navbar = () => {
  const navbarImage = document.querySelectorAll("#Navbar_Image");
  const navbarLink = document.querySelectorAll("#Navbar_Link");
  const navbarMenu = document.getElementById("Navbar_Menu");
  const navbar = document.getElementById("Navbar");
  const navbarLinkText = document.querySelectorAll("#Navbar_Link_Text");
  const navbarLinkSmoke = document.getElementById("Navbar_Link_Smoke");
  const navbarImages = document.querySelector("#Navbar_Images");
  const navbarLinks = document.querySelector("#Navbar_Links");

  console.log(navbarImages);

  gsap.registerPlugin(CustomEase);
  CustomEase.create("hop", "0.85, 0, 0.15, 1");

  createIcons({
    icons: {
      Ellipsis,
    },
  });

  const navbarTimeline = gsap.timeline({ paused: true });

  navbarTimeline.to(navbar, {
    height: "100%",
    // rotate: "0deg",
    // left: "0%",
    duration: 0.6,
    ease: "hop",
  });

  navbarTimeline.from(navbarImages, {
    transformOrigin: "left center",
    transformStyle: "preserve-3d",
    backfaceVisibility: "hidden",
    left: 0,
    rotateY: "-90deg",
    opacity: 0.6,
    duration: 0.3,
    stagger: 0.1,
    ease: "power2.out",
  });

  navbarTimeline.from(navbarLinks, {
    transformOrigin: "left center",
    transformStyle: "preserve-3d",
    backfaceVisibility: "hidden",
    right: 0,
    rotateY: "-90deg",
    opacity: 0.6,
    duration: 0.3,
    stagger: 0.1,
    ease: "power2.out",
  });

  navbarTimeline.from(navbarLinkSmoke, {
    display: "none",
  });

  navbarMenu.addEventListener("click", function () {
    this.classList.toggle("NavOpen");
    const isNavOpen = this.classList.contains("NavOpen") ? true : false;

    gsap.to(this.children[1].children[0], {
      yPercent: isNavOpen ? -100 : 0,
      duration: 0.3,
      ease: "power2.out",
    });
    gsap.to(this.children[1].children[1], {
      yPercent: isNavOpen ? -100 : 0,
      duration: 0.3,
      ease: "power2.out",
    });

    if (isNavOpen) {
      navbarTimeline.play();
      navbar.addEventListener("mousemove", function (event) {
        gsap.to(navbarLinkSmoke, {
          left: `${event.clientX}px`,
          top: `${event.clientY}px`,
          visibility: "visible",
          duration: 0.1,
          stagger: "3",
          ease: "sine.inOut",
        });
      });
    } else {
      navbarTimeline.reverse();
    }
  });

  const navbarLinkTextArray = [
    "BMW Series i7",
    "Toyota Supra",
    "Rolls Royce",
    "Mercedes S",
  ];

  for (let i = 0; i < navbarLinkTextArray.length; i++) {
    for (let ind = 0; ind < navbarLinkTextArray[i].split("").length; ind++) {
      const span = document.createElement("span");
      navbarLinkText[i].appendChild(span);
      span.innerHTML = navbarLinkTextArray[i][ind].replace(" ", "&nbsp;");
      span.classList.add("Navbar_Link_Text_Span");
      span.style.display = "inline-flex";
      span.style.whiteSpace = "pre";
    }
  }

  const span = document.querySelectorAll(".Navbar_Link_Text_Span");

  Array.from(span).forEach((elem, index) => {
    elem.addEventListener("mousemove", function () {
      gsap.to(elem, {
        yPercent: -10,
        textDecoration: "underline",
        stagger: 0.03,
        scale: 1.3,
        duration: 0.1,
        ease: "sine.inOut",
      });
    });

    elem.addEventListener("mouseleave", function () {
      gsap.to(elem, {
        yPercent: 0,
        scale: 1,
        duration: 0.1,
        ease: "sine.inOut",
      });
      gsap.to(elem, {
        textDecoration: "none",
        duration: 0.1,
        delay: 0.1,
        ease: "sine.inOut",
      });
    });
  });

  let lastIndexOFImage = 0;

  Array.from(navbarLink).forEach((elem, index) => {
    elem.addEventListener("mousemove", function () {
      lastIndexOFImage = index;
      gsap.to(elem, {
        scale: 1.1,
        duration: 0.1,
        ease: "power1.inOut",
      });

      navbarImage.forEach((elem, ind) => {
        if (ind === lastIndexOFImage) {
          gsap.to(elem, {
            display: "flex",
            // scale: 0,
            duration: 0,
            ease: "power1.inOut",
          });
        } else {
          gsap.to(elem, {
            display: "none",
            // scale: 0,
            duration: 0,
            ease: "power1.inOut",
          });
        }
      });
    });

    elem.addEventListener("mouseleave", function () {
      lastIndexOFImage = index;
      navbarImage.forEach((elem, ind) => {
        if (ind === lastIndexOFImage) {
          gsap.to(elem, {
            display: "flex",
            duration: 0,
            ease: "power1.inOut",
          });
        } else {
          gsap.to(elem, {
            display: "none",
            duration: 0,
            ease: "power1.inOut",
          });
        }
      });

      gsap.to(elem, {
        yPercent: 0,
        x: -0,
        scale: 1,
        duration: 0.1,
        ease: "power1.inOut",
      });
    });
  });

  return (
    <>
      <div class="w-full h-screen flex flex-col justify-between items-center text-gray-600">
        <nav
          class="w-full h-[13%] fixed font-Florisha bg-black perspective-[1000px] transform-3d"
          id="Navbar"
        >
          <div class="w-full flex justify-between items-center px-4 py-2 z-20">
            <div class="text-3xl">CAR X</div>
            <button
              class="flex flex-col items-center justify-center cursor-pointer z-100"
              id="Navbar_Menu"
            >
              <i data-lucide="Ellipsis" class="size-10"></i>
              <div class="text-xl relative inline-block overflow-hidden">
                <span class="block">Open</span>
                <span class="absolute left-0 top-full">Close</span>
              </div>
            </button>
          </div>

          <div
            class="absolute left-0 w-1/2 h-[87%] flex flex-row justify-center items-center"
            id="Navbar_Images"
          >
            <img
              src="https://images.unsplash.com/photo-1631295868223-63265b40d9e4?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Image-1"
              class="w-96 h-96 object-cover object-center absolute"
              id="Navbar_Image"
            />
            <img
              src="https://images.unsplash.com/photo-1629019879059-2a0345f93aea?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Image-2"
              class="w-96 h-96 object-cover object-center hidden absolute"
              id="Navbar_Image"
            />
            <img
              src="https://images.unsplash.com/photo-1627008119017-f89d9704a799?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Image-3"
              class="w-96 h-96 object-cover object-center hidden absolute"
              id="Navbar_Image"
            />
            <img
              src="https://images.unsplash.com/photo-1651078944944-5d5507799a51?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJtdyUyMGk3fGVufDB8fDB8fHww"
              alt="Image-4"
              class="w-96 h-96 object-cover object-center hidden absolute"
              id="Navbar_Image"
            />
          </div>

          <span class="absolute w-45 h-30 invisible" id="Navbar_Link_Smoke">
            <span class="absolute w-22.5 h-22.5 left-0 top-2 rounded-full bg-[radial-gradient(circle,rgba(255,0,150,0.9),transparent_70%)] blur-[20px]"></span>

            <span class="absolute w-20 h-20 left-6 top-0 rounded-full bg-[radial-gradient(circle,rgba(0,200,255,0.8),transparent_70%)] blur-[22px]"></span>

            <span class="absolute w-25 h-25 left-4 top-4 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.25),transparent_70%)] blur-[28px]"></span>
          </span>

          <div
            class="absolute right-0 w-1/2 h-[87%] flex flex-col justify-center gap-10 items-start font-extrabold px-3 cursor-pointer text-7xl leading-24"
            id="Navbar_Links"
          >
            <li class="flex justify-center items-center gap-5" id="Navbar_Link">
              <span class="text-2xl">1.</span>
              <a target="_blank" id="Navbar_Link_Text"></a>
            </li>

            <li class="flex justify-center items-center gap-5" id="Navbar_Link">
              <span class="text-2xl">2.</span>
              <a target="_blank" id="Navbar_Link_Text"></a>
            </li>

            <li class="flex justify-center items-center gap-5" id="Navbar_Link">
              <span class="text-2xl">3.</span>
              <a target="_blank" id="Navbar_Link_Text"></a>
            </li>

            <li class="flex justify-center items-center gap-5" id="Navbar_Link">
              <span class="text-2xl">4.</span>
              <a target="_blank" id="Navbar_Link_Text"></a>
            </li>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
