// ======================================
// R&Y Event - Events Page
// events.js
// ======================================

// Search Events

const searchInput = document.getElementById("search");
const eventCards = document.querySelectorAll(".event-card");

if(searchInput){

    searchInput.addEventListener("keyup",()=>{

        const value = searchInput.value.toLowerCase();

        eventCards.forEach(card=>{

            const title = card.querySelector("h3").textContent.toLowerCase();
            const location = card.querySelectorAll("p")[0].textContent.toLowerCase();

            if(title.includes(value) || location.includes(value)){

                card.style.display="block";

            }else{

                card.style.display="none";

            }

        });

    });

}

// ======================================
// Category Filter
// ======================================

const categoryButtons = document.querySelectorAll(".category");

categoryButtons.forEach(button=>{

    button.addEventListener("click",()=>{

        categoryButtons.forEach(btn=>btn.classList.remove("active"));

        button.classList.add("active");

        const category = button.textContent.toLowerCase();

        eventCards.forEach(card=>{

            if(category==="all"){

                card.style.display="block";

                return;

            }

            const cardCategory = card.dataset.category;

            if(cardCategory===category){

                card.style.display="block";

            }else{

                card.style.display="none";

            }

        });

    });

});

// ======================================
// Book Button
// ======================================

document.querySelectorAll(".book-btn").forEach(button=>{

    button.addEventListener("click",()=>{

        alert("Redirecting to Booking Page...");

        window.location.href="booking.html";

    });

});

// ======================================
// Card Hover Animation
// ======================================

eventCards.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-10px) scale(1.02)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0) scale(1)";

    });

});

// ======================================
// Newsletter
// ======================================

const newsletterForm = document.querySelector(".newsletter form");

if(newsletterForm){

newsletterForm.addEventListener("submit",(e)=>{

e.preventDefault();

const email = newsletterForm.querySelector("input").value.trim();

if(email===""){

alert("Please enter your email.");

return;

}

alert("🎉 Thank you for subscribing!");

newsletterForm.reset();

});

}

// ======================================
// Page Animation
// ======================================

window.addEventListener("load",()=>{

eventCards.forEach((card,index)=>{

card.style.opacity="0";

card.style.transform="translateY(40px)";

setTimeout(()=>{

card.style.transition=".6s";

card.style.opacity="1";

card.style.transform="translateY(0)";

},index*150);

});

});

// ======================================
// Scroll To Top
// ======================================

const topBtn = document.createElement("button");

topBtn.innerHTML="↑";

topBtn.id="topBtn";

document.body.appendChild(topBtn);

topBtn.style.position="fixed";
topBtn.style.right="20px";
topBtn.style.bottom="20px";
topBtn.style.width="50px";
topBtn.style.height="50px";
topBtn.style.border="none";
topBtn.style.borderRadius="50%";
topBtn.style.background="#8A2BE2";
topBtn.style.color="#fff";
topBtn.style.fontSize="20px";
topBtn.style.cursor="pointer";
topBtn.style.display="none";
topBtn.style.zIndex="999";

window.addEventListener("scroll",()=>{

if(window.scrollY>300){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

// ======================================
// Welcome Message
// ======================================

console.log("R&Y Event - Events Loaded Successfully");