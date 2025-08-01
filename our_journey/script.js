document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("section").forEach(section => {
    section.style.opacity = 0;
    setTimeout(() => {
      section.style.transition = "opacity 1.5s ease-in";
      section.style.opacity = 1;
    }, 500);
  });
});

// - Place all your images: `us1.jpg`, `date.jpg`, `memory1.jpg`, `memory2.jpg`, etc.