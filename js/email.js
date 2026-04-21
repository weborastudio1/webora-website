(function () {
  emailjs.init("YOUR_PUBLIC_KEY");
})();

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const status = document.getElementById("form-status");
  status.innerText = "Sending...";

  emailjs
    .sendForm(
      "YOUR_SERVICE_ID",
      "YOUR_TEMPLATE_ID",
      this
    )
    .then(
      () => {
        status.innerText = "Message sent successfully!";
        this.reset();
      },
      () => {
        status.innerText = "Something went wrong. Try again.";
      }
    );
});