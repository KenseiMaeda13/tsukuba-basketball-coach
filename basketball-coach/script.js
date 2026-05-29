const targets = document.querySelectorAll(
  ".section, .card, .cta, .location-card, .location-box"
);

targets.forEach((target) => {
  target.classList.add("fade-in");
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.15,
  }
);

targets.forEach((target) => observer.observe(target));