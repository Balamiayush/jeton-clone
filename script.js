// Initialize Lenis
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smooth: true,
});
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

requestAnimationFrame(raf);
function page2Function() {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".page2",
      start: "top top",
      end: "80%",
      pin: true,
      scrub: true,
        delay:0.5,
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
      top: "10vh",
    },
    "a"
  );
  tl.to(
    ".img2",
    {
      left: "50%",
      scale: 1.8,
      top: "10vh",
    },
    "a"
  );
  tl.to(
    ".img3",
    {
      left: "50%",
      scale: 1.8,
      top: "10vh",
    },
    "a"
  );
  tl.to(
    ".img4",
    {
      left: "50%",
      scale: 1.8,
      top: "10vh",
    },
    "a"
  );
  tl.to(
    ".img5",
    {
      left: "50%",
      scale: 1.8,
      top: "10vh",
    },
    "a"
  );
}
function page3Function(){
  let tl = gsap.timeline({
    scrollTrigger:{
      trigger:".page3",
      start:"top",
      end:"bottom",
      pin:true,
      scrub:1,
    }
  })
  tl.from('.bo2',{
    y:'80vw',
    opacity:0,
    ease:"power3.out",
  })
  tl.from('.bo3',{
    y:'80vw',
    opacity:0,
    ease:"power3.out",
  })
}


page2Function();
page3Function();
