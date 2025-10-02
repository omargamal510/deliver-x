// Hero
document.addEventListener("DOMContentLoaded", () => {
  const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

  tl.from(".hero-content h3, .hero-content h2, .hero-content p", {
    y: 50,
    opacity: 0,
    stagger: 0.2,
    duration: 0.8,
  });

  tl.from(".hero-content img.img-fluid:not(.img-hero)", {
    scale: 0.8,
    opacity: 0,
    duration: 1,
  });

  tl.from(".img-hero", {
    scale: 0,
    opacity: 0,
    stagger: 0.2,
    transformOrigin: "center center",
    duration: 0.8,
  });
});

// Hero

gsap.from(".hero-stat", {
  scrollTrigger: {
    trigger: ".hero-stat",
    start: "top 80%",
    toggleActions: "play none none none",
  },
  y: 0,
  opacity: 0,
  scale: 0.5,
  duration: 0.5,
  ease: "back.out(.5)",
});
