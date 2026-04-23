/* =========================
   EMAILJS SETUP (FINAL)
   Uses Firebase + EmailJS
========================= */

// ✅ 1️⃣ Initialize EmailJS (IIFE)
(function () {
  if (typeof emailjs === "undefined") {
    console.error("❌ EmailJS SDK not loaded");
    return;
  }

  emailjs.init("ocBATP0mkBJ-D77lJ"); // ✅ Public Key
  console.log("✅ EmailJS initialized");
})();

// ✅ 2️⃣ Global Send Email Function (called from main.js)
window.sendEmail = function (data) {
  if (typeof emailjs === "undefined") {
    console.error("❌ EmailJS not available");
    return;
  }

  emailjs
    .send(
      "service_yqm5y8c",      // ✅ Service ID
      "template_qv7ljuf",     // ✅ Template ID
      {
        name: data.name,
        email: data.email,
        message: data.message,
        date: new Date().toLocaleString(),
      }
    )
    .then(() => {
      console.log("📩 Email sent successfully");
    })
    .catch((error) => {
      console.error("❌ EmailJS error:", error);
    });
};