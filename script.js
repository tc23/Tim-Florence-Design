// JavaScript for Tim Florence Design

document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.querySelector("form");

    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.querySelector("#name").value;
        const email = document.querySelector("#email").value;
        const message = document.querySelector("#message").value;

        alert(`Thank you, ${name}! Your message has been received. We'll get back to you at ${email} shortly.`);

        contactForm.reset();
    });
});