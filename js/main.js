// 🔥 Firebase imports
import { db } from "../config/firebase-config.js";
import {
  collection,
  addDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

/* =========================
   MAIN SITE JS (FINAL)
   Safe for all pages
========================= */

document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     SCROLL ANIMATIONS
  ========================= */
  const animatedElements = document.querySelectorAll(".animate");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade");
        }
      });
    },
    { threshold: 0.15 }
  );

  animatedElements.forEach((el) => observer.observe(el));

  /* =========================
     NAV ACTIVE LINK
  ========================= */
  const links = document.querySelectorAll(".nav-links a");
  const currentPath = window.location.pathname.split("/").pop();

  links.forEach((link) => {
    if (link.getAttribute("href") === currentPath) {
      link.style.color = "#6c63ff";
    }
  });

  /* =========================
     CONTACT FORM HANDLER
  ========================= */
  const contactForm = document.getElementById("contactForm");

  if (!contactForm) {
    console.log("ℹ️ No contact form on this page");
    return;
  }

  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = contactForm.name.value.trim();
    const email = contactForm.email.value.trim();
    const message = contactForm.message.value.trim();

    if (!name || !email || !message) {
      alert("Please fill all fields");
      return;
    }

    contactForm.querySelector("button").disabled = true;

    try {
      // ✅ 1️⃣ Save to Firestore
      await addDoc(collection(db, "contacts"), {
        name,
        email,
        message,
        createdAt: serverTimestamp(),
      });

      console.log("✅ Saved to Firestore");

      // ✅ 2️⃣ Trigger EmailJS (optional but safe)
      if (typeof window.sendEmail === "function") {
        window.sendEmail({ name, email, message });
      } else {
        console.warn("⚠️ EmailJS not loaded");
      }

      alert("Message sent successfully!");
      contactForm.reset();

    } catch (error) {
      console.error("❌ Firestore error:", error);
      alert("Failed to send message. Try again later.");
    } finally {
      contactForm.querySelector("button").disabled = false;
    }
  });

  console.log("✅ Webora main.js loaded");
});