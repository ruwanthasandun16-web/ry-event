// ==========================================
// R&Y Event - ticket.js
// ==========================================

// Load Booking
const booking = JSON.parse(localStorage.getItem("ryBooking"));

if (!booking) {

    alert("No Ticket Found!");

    window.location.href = "events.html";

}

// ================================
// Load Details
// ================================

document.getElementById("eventName").textContent =
booking.event;

document.getElementById("customerName").textContent =
booking.fullname;

document.getElementById("customerEmail").textContent =
booking.email;

document.getElementById("ticketQty").textContent =
booking.quantity;

document.getElementById("ticketTotal").textContent =
Number(booking.total).toLocaleString();


// ================================
// Generate Ticket Number
// ================================

let ticketNumber =
"RY-" +
Math.floor(Math.random()*900000+100000);

console.log(ticketNumber);


// ================================
// QR Code
// ================================

const qrImage =
document.getElementById("qrCode");

const qrData =

`
Ticket : ${ticketNumber}

Event : ${booking.event}

Customer : ${booking.fullname}

Tickets : ${booking.quantity}

Total : ${booking.total}

Status : PAID
`;

const qrContainer =
document.createElement("div");

qrContainer.id = "generatedQR";

qrImage.parentNode.replaceChild(qrContainer, qrImage);

new QRCode(qrContainer,{

text:qrData,

width:220,

height:220,

colorDark:"#000",

colorLight:"#fff",

correctLevel:QRCode.CorrectLevel.H

});


// ================================
// Print
// ================================

document
.getElementById("printBtn")

.addEventListener("click",()=>{

window.print();

});


// ================================
// Download PDF (Demo)
// ================================

document
.getElementById("downloadBtn")

.addEventListener("click",()=>{

alert(

"PDF Download will be integrated using jsPDF."

);

// Future

// jsPDF

});


// ================================
// Success
// ================================

setTimeout(()=>{

console.log(

"Ticket Ready"

);

},500);


// ================================
// Auto Greeting
// ================================

setTimeout(()=>{

alert(

"🎉 Your Ticket Is Ready!"

);

},600);


// ================================
// Clear Booking (Optional)
// Uncomment if needed
// ================================

// localStorage.removeItem("ryBooking");