// ===============================
// R&Y Event App - app.js
// ===============================

document.addEventListener("DOMContentLoaded", () => {

    // ==========================
    // Loader
    // ==========================

    const loader = document.getElementById("loader");

    window.addEventListener("load", () => {
        setTimeout(() => {
            loader.style.opacity = "0";
            loader.style.visibility = "hidden";
            loader.style.transition = "0.5s";
        }, 1000);
    });

    // ==========================
    // Back To Top Button
    // ==========================

    const topBtn = document.getElementById("topBtn");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 300) {

            topBtn.style.display = "block";

        } else {

            topBtn.style.display = "none";

        }

    });

    topBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

    // ==========================
    // Sticky Header
    // ==========================

    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {

            header.style.background = "#090909";

            header.style.boxShadow = "0 0 20px rgba(0,0,0,.5)";

        } else {

            header.style.background = "rgba(0,0,0,.55)";

            header.style.boxShadow = "none";

        }

    });

    // ==========================
    // Mobile Menu
    // ==========================

    const menuBtn = document.getElementById("menuBtn");

    const nav = document.querySelector("nav");

    let menuOpen = false;

    menuBtn.addEventListener("click", () => {

        if (!menuOpen) {

            nav.style.display = "block";

            nav.style.position = "absolute";

            nav.style.top = "80px";

            nav.style.left = "0";

            nav.style.width = "100%";

            nav.style.background = "#111";

            nav.style.padding = "25px";

            nav.querySelector("ul").style.flexDirection = "column";

            nav.querySelector("ul").style.gap = "20px";

            menuBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';

            menuOpen = true;

        } else {

            nav.style.display = "";

            nav.style.position = "";

            nav.style.top = "";

            nav.style.left = "";

            nav.style.width = "";

            nav.style.background = "";

            nav.style.padding = "";

            nav.querySelector("ul").style.flexDirection = "";

            nav.querySelector("ul").style.gap = "";

            menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';

            menuOpen = false;

        }

    });

    // ==========================
    // Smooth Scroll
    // ==========================

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {

                target.scrollIntoView({

                    behavior: "smooth"

                });

            }

        });

    });

    // ==========================
    // Contact Form
    // ==========================

    const form = document.querySelector(".contact form");

    if (form) {

        form.addEventListener("submit", function (e) {

            e.preventDefault();

            const inputs = form.querySelectorAll("input, textarea");

            let valid = true;

            inputs.forEach(input => {

                if (input.value.trim() === "") {

                    input.style.border = "2px solid red";

                    valid = false;

                } else {

                    input.style.border = "2px solid #8a2be2";

                }

            });

            if (valid) {

                alert("Message Sent Successfully!");

                form.reset();

            }

        });

    }

    // ==========================
    // Fade In Animation
    // ==========================

    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";

                entry.target.style.transform = "translateY(0)";

            }

        });

    }, {

        threshold: 0.2

    });

    sections.forEach(section => {

        section.style.opacity = "0";

        section.style.transform = "translateY(60px)";

        section.style.transition = "all .8s ease";

        observer.observe(section);

    });

    // ==========================
    // Event Card Hover Effect
    // ==========================

    document.querySelectorAll(".event-card").forEach(card => {

        card.addEventListener("mouseenter", () => {

            card.style.boxShadow = "0 0 35px #8a2be2";

        });

        card.addEventListener("mouseleave", () => {

            card.style.boxShadow = "0 0 20px rgba(138,43,226,.15)";

        });

    });

    // ==========================
    // Gallery Animation
    // ==========================

    document.querySelectorAll(".gallery-grid img").forEach(image => {

        image.addEventListener("mouseenter", () => {

            image.style.filter = "brightness(110%)";

        });

        image.addEventListener("mouseleave", () => {

            image.style.filter = "brightness(100%)";

        });

    });

});