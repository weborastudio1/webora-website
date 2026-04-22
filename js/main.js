/* =========================
   MAIN SITE JS
   Safe for all pages
========================= */

document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     SCROLL ANIMATIONS
  ========================= */

  const animatedElements = document.querySelectorAll(".animate");

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade");
        }
      });
    },
    { threshold: 0.15 }
  );

  animatedElements.forEach(el => observer.observe(el));

  /* =========================
     NAV ACTIVE LINK (OPTIONAL)
  ========================= */

  const links = document.querySelectorAll(".nav-links a");
  const currentPath = window.location.pathname.split("/").pop();

  links.forEach(link => {
    if (link.getAttribute("href") === currentPath) {
      link.style.color = "#6c63ff";
    }
  });

  /* =========================
     SAFE CONSOLE LOG
  ========================= */

  console.log("✅ Webora main.js loaded");
});