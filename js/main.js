// 🔥 Firebase imports
import { db } from "../config/firebase-config.js";
import {
  collection,
  addDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
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

// 🔹 Contact Form → Firestore
const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = contactForm.name.value.trim();
    const email = contactForm.email.value.trim();
    const message = contactForm.message.value.trim();

    if (!name || !email || !message) {
      alert("Please fill all fields");
      return;
    }

    try {
      await addDoc(collection(db, "contacts"), {
  name,
  email,
  message,
  createdAt: serverTimestamp(),
});

// 🔥 EmailJS trigger
if (typeof window.sendEmail === "function") {
  window.sendEmail({ name, email, message });
}

alert("Message sent successfully!");
contactForm.reset();
    } catch (error) {
      console.error("Firestore error:", error);
      alert("Failed to send message. Try again later.");
    }
  });
}