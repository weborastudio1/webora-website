/* =========================
   EMAILJS SETUP (FINAL)
   Uses Firebase + EmailJS
========================= */

// 1️⃣ Initialize EmailJS
(function () {
  emailjs.init("ocBATP0mkBJ-D77lJ"); // ✅ Public Key
  console.log("✅ EmailJS initialized");
})();

// 2️⃣ Send Email Function (called from main.js)
function sendEmail(data) {
  emailjs
    .send("service_yqm5y8c", "template_qv7ljuf", {
      name: data.name,
      email: data.email,
      message: data.message,
      date: new Date().toLocaleString()
    })
    .then(() => {
      console.log("📩 Email sent successfully");
    })
    .catch((error) => {
      console.error("❌ EmailJS error:", error);
    });
}

// 3️⃣ Make function global (important)
window.sendEmail = sendEmail;