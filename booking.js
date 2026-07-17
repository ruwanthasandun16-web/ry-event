// ======================================
// R&Y Event - Booking Page
// booking.js
// ======================================

// Ticket Price
const ticketPrice = 3500;

// Elements
const quantityInput = document.getElementById("quantity");
const summaryQty = document.getElementById("summaryQty");
const summaryPrice = document.getElementById("summaryPrice");
const totalPrice = document.getElementById("totalPrice");
const bookingForm = document.getElementById("bookingForm");

// ======================================
// Load Registered User
// ======================================

const user = JSON.parse(localStorage.getItem("ryUser"));

if(user){

    document.getElementById("fullname").value = user.fullname || "";
    document.getElementById("email").value = user.email || "";
    document.getElementById("phone").value = user.phone || "";

}

// ======================================
// Update Total Price
// ======================================

function updatePrice(){

    const qty = parseInt(quantityInput.value) || 1;

    const total = qty * ticketPrice;

    summaryQty.textContent = qty;
    summaryPrice.textContent = ticketPrice.toLocaleString();
    totalPrice.textContent = total.toLocaleString();

}

quantityInput.addEventListener("input", updatePrice);

updatePrice();

// ======================================
// Phone Validation
// ======================================

function validatePhone(phone){

    const pattern = /^(?:\+94|0)?7[0-9]{8}$/;

    return pattern.test(phone);

}

// ======================================
// Booking Form Submit
// ======================================

bookingForm.addEventListener("submit", function(e){

    e.preventDefault();

    const fullname = document.getElementById("fullname").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const quantity = parseInt(quantityInput.value);
    const message = document.getElementById("message").value.trim();

    if(fullname.length < 3){

        alert("Please enter your full name.");
        return;

    }

    if(email === ""){

        alert("Please enter your email.");
        return;

    }

    if(!validatePhone(phone)){

        alert("Please enter a valid Sri Lankan phone number.");
        return;

    }

    if(quantity < 1){

        alert("Please select at least one ticket.");
        return;

    }

    // Booking Object

    const booking = {

        event : document.getElementById("eventTitle").textContent,

        fullname : fullname,

        email : email,

        phone : phone,

        quantity : quantity,

        ticketPrice : ticketPrice,

        total : quantity * ticketPrice,

        specialRequest : message,

        bookingDate : new Date().toLocaleString()

    };

    // Save Booking

    localStorage.setItem("ryBooking", JSON.stringify(booking));

    alert("🎉 Booking Completed Successfully!");

    // Redirect

    window.location.href = "payment.html";

});

// ======================================
// Quantity Buttons (Keyboard)
// ======================================

quantityInput.addEventListener("keydown", function(e){

    if(e.key === "ArrowUp"){

        quantityInput.value = parseInt(quantityInput.value) + 1;

        updatePrice();

    }

    if(e.key === "ArrowDown"){

        if(quantityInput.value > 1){

            quantityInput.value = parseInt(quantityInput.value) - 1;

            updatePrice();

        }

    }

});

// ======================================
// Auto Fill Test
// Ctrl + Shift + B
// ======================================

document.addEventListener("keydown", function(e){

    if(e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "b"){

        document.getElementById("fullname").value = "Ruwantha Sandun";

        document.getElementById("email").value = "ruwantha@example.com";

        document.getElementById("phone").value = "0771234567";

        document.getElementById("quantity").value = 2;

        document.getElementById("message").value = "VIP Table Please";

        updatePrice();

    }

});

// ======================================
// Welcome Message
// ======================================

console.log("Booking Page Loaded Successfully");