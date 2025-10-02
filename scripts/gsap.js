gsap.from(".box", {
  scrollTrigger: {
    trigger: ".box",
    start: "top 80%",
    toggleActions: "play none none none",
    // play عند النزول - والباقي none = مش هيعيد الانيميشن
  },
  y: 100,
  opacity: 0,
  scale: 0.5,
  duration: 0.5,
  ease: "back.out(.5)",
});
