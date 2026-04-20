import { createIcons, Ellipsis } from "lucide";
import { gsap } from "gsap";
import { CustomEase } from "gsap/all";
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
