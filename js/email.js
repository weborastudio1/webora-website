/* =========================
   CONTACT FORM HANDLER
   EmailJS ready (safe fallback)
========================= */

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#contact-form");

  if (!form) {
    console.log("ℹ️ No contact form on this page");
    return;
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const status = document.querySelector("#form-status");
    if (status) status.textContent = "Sending...";

    // 🛑 SAFE CHECK — EmailJS loaded or not
    if (typeof emailjs === "undefined") {
      console.warn("⚠️ EmailJS not configured yet");
      if (status) {
        status.textContent = "Form ready. Email service not connected yet.";
      }
      return;
    }

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        this,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        () => {
          if (status) status.textContent = "Message sent successfully!";
          form.reset();
        },
        (error) => {
          console.error("EmailJS Error:", error);
          if (status) status.textContent = "Failed to send message.";
        }
      );
  });

  console.log("✅ email.js loaded");
});