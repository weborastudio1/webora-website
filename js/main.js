/* =========================
   Webora Main JS
   ========================= */

document.addEventListener("DOMContentLoaded", () => {
  console.log("Webora website loaded successfully 🚀");

  // Sticky header shadow on scroll
  const header = document.querySelector(".header");

  if (header) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 20) {
        header.style.boxShadow = "0 4px 20px rgba(0,0,0,0.06)";
      } else {
        header.style.boxShadow = "none";
      }
    });
  }

  // Smooth scroll for internal links (future-proof)
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach(link => {
    link.addEventListener("click", e => {
      const targetId = link.getAttribute("href");

      if (targetId.length > 1) {
        const target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: "smooth" });
        }
      }
    });
  });
});