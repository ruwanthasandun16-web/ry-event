// =====================================
// R&Y Event - Home Page
// home.js
// =====================================

// Welcome Message
window.addEventListener("load", () => {
    console.log("Welcome to R&Y Event!");

    setTimeout(() => {
        alert("🎉 Welcome to R&Y Event Booking!");
    }, 500);
});


// =====================================
// Live Search
// =====================================

const searchInput = document.querySelector(".hero input");

if (searchInput) {

    searchInput.addEventListener("keyup", () => {

        const value = searchInput.value.toLowerCase();

        const cards = document.querySelectorAll(".featured .card");

        cards.forEach(card => {

            const title = card.querySelector("h3").innerText.toLowerCase();

            if (title.includes(value)) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

}


// =====================================
// Book Button
// =====================================

document.querySelectorAll(".card button").forEach(button => {

    button.addEventListener("click", () => {

        alert("🎫 Booking page will open here.");

        // Future
        // window.location.href="booking.html";

    });

});


// =====================================
// Scroll Animation
// =====================================

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";

            entry.target.style.transform = "translateY(0)";

        }

    });

}, {

    threshold:0.2

});

sections.forEach(section => {

    section.style.opacity = "0";

    section.style.transform = "translateY(50px)";

    section.style.transition = ".8s";

    observer.observe(section);

});


// =====================================
// Header Shadow
// =====================================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.5)";

    }else{

        header.style.boxShadow = "none";

    }

});


// =====================================
// Back To Top Button
// =====================================

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.id = "topBtn";

document.body.appendChild(topButton);

topButton.style.position = "fixed";
topButton.style.right = "20px";
topButton.style.bottom = "20px";
topButton.style.width = "50px";
topButton.style.height = "50px";
topButton.style.border = "none";
topButton.style.borderRadius = "50%";
topButton.style.background = "#8A2BE2";
topButton.style.color = "#fff";
topButton.style.fontSize = "20px";
topButton.style.cursor = "pointer";
topButton.style.display = "none";

window.addEventListener("scroll",()=>{

    if(window.scrollY>300){

        topButton.style.display="block";

    }else{

        topButton.style.display="none";

    }

});

topButton.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


// =====================================
// Notification
// =====================================

setTimeout(()=>{

console.log("New Event Available");

},3000);


// =====================================
// Profile (Future)
// =====================================

const user = JSON.parse(localStorage.getItem("ryUser"));

if(user){

console.log("Logged User :",user.fullname);

}