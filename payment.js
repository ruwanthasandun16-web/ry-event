// ==========================================
// R&Y Event - payment.js
// ==========================================

// Elements
const booking = JSON.parse(localStorage.getItem("ryBooking"));

const eventName = document.getElementById("eventName");
const customerName = document.getElementById("customerName");
const customerEmail = document.getElementById("customerEmail");
const ticketQty = document.getElementById("ticketQty");
const ticketPrice = document.getElementById("ticketPrice");
const totalPrice = document.getElementById("totalPrice");

const paymentForm = document.getElementById("paymentForm");

const cardNumber = document.getElementById("cardNumber");
const expiry = document.getElementById("expiry");
const cvv = document.getElementById("cvv");

// ==========================================
// Load Booking Details
// ==========================================

if (booking) {

    eventName.textContent = booking.event;
    customerName.textContent = booking.fullname;
    customerEmail.textContent = booking.email;
    ticketQty.textContent = booking.quantity;
    ticketPrice.textContent = Number(booking.ticketPrice).toLocaleString();
    totalPrice.textContent = Number(booking.total).toLocaleString();

} else {

    alert("No booking found.");

    window.location.href = "booking.html";

}

// ==========================================
// Card Number Formatting
// ==========================================

cardNumber.addEventListener("input", function () {

    let value = this.value.replace(/\D/g, "");

    value = value.substring(0, 16);

    value = value.replace(/(.{4})/g, "$1 ").trim();

    this.value = value;

});

// ==========================================
// Expiry Formatting
// ==========================================

expiry.addEventListener("input", function () {

    let value = this.value.replace(/\D/g, "");

    if (value.length >= 3) {

        value = value.substring(0, 4);

        value = value.replace(/(\d{2})(\d{1,2})/, "$1/$2");

    }

    this.value = value;

});

// ==========================================
// Validation Functions
// ==========================================

function validCard(number){

    return number.replace(/\s/g,"").length === 16;

}

function validExpiry(date){

    return /^(0[1-9]|1[0-2])\/\d{2}$/.test(date);

}

function validCVV(value){

    return /^[0-9]{3,4}$/.test(value);

}

// ==========================================
// Submit Payment
// ==========================================

paymentForm.addEventListener("submit", function(e){

    e.preventDefault();

    const holder = document.getElementById("cardName").value.trim();

    if(holder.length < 3){

        alert("Enter Card Holder Name");

        return;

    }

    if(!validCard(cardNumber.value)){

        alert("Invalid Card Number");

        return;

    }

    if(!validExpiry(expiry.value)){

        alert("Invalid Expiry Date");

        return;

    }

    if(!validCVV(cvv.value)){

        alert("Invalid CVV");

        return;

    }

    // Demo Success

    alert("✅ Payment Successful!");

    // Save payment status only
    booking.paymentStatus = "PAID";
    booking.paymentDate = new Date().toLocaleString();

    localStorage.setItem("ryBooking", JSON.stringify(booking));

    // Go Ticket Page
    window.location.href = "ticket.html";

});

// ==========================================
// Demo Auto Fill
// Ctrl + Shift + P
// ==========================================

document.addEventListener("keydown", function(e){

    if(e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "p"){

        document.getElementById("cardName").value = booking.fullname;

        cardNumber.value = "4111 1111 1111 1111";

        expiry.value = "12/30";

        cvv.value = "123";

    }

});

// ==========================================

console.log("Payment Page Loaded");