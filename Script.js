// Simple JS to handle form submission
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("email").value;
      alert(`Thank you for reaching out! We'll contact you at ${email}`);
      form.reset();
    });
  }
});
