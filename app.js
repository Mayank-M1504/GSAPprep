gsap.registerPlugin(DrawSVGPlugin);
gsap.registerPlugin(SplitText, ScrollTrigger);

let splithead = SplitText.create(".Heading", {
  type: "chars",
  mask: "chars",
});

let splitsub = SplitText.create(".subhead", {
  type: "chars",
  mask: "chars",
});

let heading = gsap.timeline({
  scrollTrigger: {
    trigger: "#maintext",
    start: "top 180%",
    end: "bottom 80%",
    scrub: false,
    markers: false,
  },
});

heading.from(splithead.chars, {
  duration: 0.5,
  y: 50,
  opacity: 0,
  stagger: { amount: 1 },
});

heading.from(
  splitsub.chars,
  {
    duration: 0.5,
    y: 50,
    opacity: 0,
    stagger: { amount: 1 },
  },
  ">"
);

heading.from(
  "#arrow path",
  {
    duration: 1,
    drawSVG: "0% 0%",
  },
  "<"
);
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);
document.fonts.ready.then(() => {
  let split1 = SplitText.create(".animated-text1", {
    type: "chars",
    autosplit: true,
    smartwrap: true,
    mask: "chars",
  });

  gsap.from(split1.chars, {
    duration: 0.25,
    y: 50,
    stagger: {
      amount: 1,
    },
    scrollTrigger: {
      trigger: ".animated-text2",
      start: "top 180%",
      end: "bottom 80%",
      scrub: false,
      toggleActions: "restart none none reset",
      markers: false,
    },
  });
});
document.fonts.ready.then(() => {
  let split = SplitText.create(".animated-text2", {
    type: "words, chars ,lines",
    autosplit: true,
    smartwrap: true,
  });

  gsap.to(split.words, {
    duration: 0.15,
    color: "red",
    stagger: {
      amount: 1.5,
    },
    scrollTrigger: {
      trigger: ".animated-text2",
      start: "top 80%",
      end: "bottom 65%",
      scrub: true,
      markers: false,
    },
  });
});
document.fonts.ready.then(() => {
  let split3 = SplitText.create(".animated-text3", {
    type: "words, chars ,lines",
    autosplit: true,
    smartwrap: true,
  });

  gsap.from(split3.lines, {
    duration: 0.15,
    opacity: 0.2,
    stagger: {
      amount: 1.5,
    },
    scrollTrigger: {
      trigger: ".animated-text3",
      start: "top 80%",
      end: "bottom 60%",
      scrub: true,
      markers: false,
    },
  });
});
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#lines",
    start: "top 60%",
    end: "bottom 60%",
    scrub: true,
    markers: false,
  },
});
tl.to(".vertical.blue-line.v1", {
  scaleY: 1,
  duration: 0.5,
});
tl.to(
  ".dot.d1",
  {
    opacity: 1,
    duration: 0,
  },
  ">"
);

tl.to(
  ".horizontal.blue-line.h1",
  {
    scaleX: 1,
    duration: 0.5,
  },
  ">"
);
tl.to(
  ".text1",
  {
    opacity: 1,
    duration: 0.5,
  },
  ">"
);
tl.from(
  "#arrow1 path",
  {
    duration: 1,
    drawSVG: "0% 0%",
  },
  ">"
);

tl.to(
  ".vertical.blue-line.v2",
  {
    scaleY: 1,
    duration: 0.5,
  },
  "<"
);
tl.to(
  ".dot.d2",
  {
    opacity: 1,
    duration: 0,
  },
  ">"
);
tl.to(
  ".horizontal.blue-line.h2",
  {
    scaleX: 1,
    duration: 0.5,
  },
  ">"
);
tl.to(
  ".text2",
  {
    opacity: 1,
    duration: 0.5,
  },
  ">"
);
tl.from(
  "#arrow2 path",
  {
    duration: 1,
    drawSVG: "0% 0%",
  },
  ">"
);
tl.to(
  ".vertical.blue-line.v3",
  {
    scaleY: 1,
    duration: 0.5,
  },
  "<"
);
tl.to(
  ".dot.d3",
  {
    opacity: 1,
    duration: 0,
  },
  ">"
);
tl.to(
  ".horizontal.blue-line.h3",
  {
    scaleX: 1,
    duration: 0.5,
  },
  ">"
);
tl.to(
  ".text3",
  {
    opacity: 1,
    duration: 0.5,
  },
  ">"
);
tl.from(
  "#arrow3 path",
  {
    duration: 1,
    drawSVG: "0% 0%",
  },
  ">"
);
tl.to(
  ".vertical.blue-line.v3",
  {
    scaleY: 1,
    duration: 0.5,
  },
  "<"
);
tl.to(
  ".vertical.blue-line.v4",
  {
    scaleY: 1,
    duration: 0.5,
  },
  "<"
);
gsap.registerPlugin(Flip,ScrollTrigger);
const box = document.querySelector(".sqare");
const Father = document.querySelector(".father");
const Childcontainer = document.querySelector(".childconainter");
// ScrollTrigger.create({
//       trigger: "#indicator",
//       start: "top 80%",     
//       end: "bottom 20%",
//       onEnter: flipBox,  
//       scrub:true      
    
//     });

  
// function flipBox() {
//   const state = Flip.getState(".sqare");
//   (box.parentNode === Father ? Childcontainer : Father).appendChild(box);
//   Flip.from(state, {
//     duration: 1,
//     ease: "power1.inOut",
//   });
// }
const state = Flip.getState(".sqare");
Childcontainer.appendChild(box);

const flip = Flip.from(state, {
  duration: 1,
  paused:true
});
ScrollTrigger.create({
      animation:flip,
      trigger: ".father",
      start: "top 40%",     
      end: "bottom 20%",
      scrub:true,
});

