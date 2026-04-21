// ===============================
// EmailJS Initialization
// ===============================
(function () {
  if (typeof emailjs !== "undefined") {
    emailjs.init("YOUR_PUBLIC_KEY"); // 🔁 replace later
  }
})();

// ===============================
// Contact / Quote / Careers Forms
// ===============================
document.addEventListener("DOMContentLoaded", function () {
  const forms = [
    { id: "contactForm", service: "YOUR_SERVICE_ID", template: "YOUR_TEMPLATE_ID" },
    { id: "quoteForm", service: "YOUR_SERVICE_ID", template: "YOUR_QUOTE_TEMPLATE_ID" },
    { id: "careerForm", service: "YOUR_SERVICE_ID", template: "YOUR_CAREER_TEMPLATE_ID" }
  ];

  forms.forEach((item) => {
    const form = document.getElementById(item.id);
    if (!form) return; // 🔒 SAFE: agar form nahi hai to skip

    const status = form.querySelector(".form-status") || document.getElementById("form-status");

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      if (status) status.innerText = "Sending...";

      emailjs
        .sendForm(item.service, item.template, form)
        .then(
          function () {
            if (status) status.innerText = "Message sent successfully!";
            form.reset();
          },
          function () {
            if (status) status.innerText = "Something went wrong. Please try again.";
          }
        );
    });
  });
});