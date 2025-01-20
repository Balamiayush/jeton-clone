// Initialize Lenis
const lenis = new Lenis();

// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".page2",
    start: "top top",
    end: "80%",
    // markers: true,
    pin: true,
    scrub: true,
    transition: "transform 0.6s cubic-bezier(0.65, 0, 0.35, 1)",
  },
});
tl.to(
  ".text-page2",
  {
    scale: 0.2,
  },
  "a"
);
tl.to(
  ".img1",
  {
    left: "50%",
    scale: 1.8,
    ease: "power2.out",
 
    top: "10vh",
  },
  "a"
);
tl.to(
  ".img2",
  {
    left: "50%",
    scale: 1.8,
    ease: "power2.out",
   
    top: "10vh",
  },
  "a"
);
tl.to(
  ".img3",
  {
    left: "50%",
    scale: 1.8,
    ease: "power2.out",
   
    top: "10vh",
  },
  "a"
);
tl.to(
  ".img4",
  {
    left: "50%",
    scale: 1.8,
    ease: "power2.out",
   
    top: "10vh",
  },
  "a"
);
tl.to(
  ".img5",
  {
    left: "50%",
    scale: 1.8,
    ease: "power2.out",
   
    top: "10vh",
  },
  "a"
);
