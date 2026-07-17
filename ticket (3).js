// ticket.js


document.addEventListener(
"DOMContentLoaded",
()=>{


let booking =
JSON.parse(
localStorage.getItem("currentBooking")
);



let payment =
JSON.parse(
localStorage.getItem("payment")
);



if(!booking || !payment){

alert("Ticket Not Found");

window.location.href="events.html";

return;

}




document.getElementById("ticketID")
.innerText =
booking.bookingId;



document.getElementById("ticketUser")
.innerText =
booking.user;



document.getElementById("ticketEvent")
.innerText =
booking.eventName;



document.getElementById("ticketDate")
.innerText =
booking.date;



document.getElementById("ticketLocation")
.innerText =
booking.location;



document.getElementById("ticketCount")
.innerText =
booking.tickets;



document.getElementById("ticketStatus")
.innerText =
payment.status;





// Generate QR Code


new QRCode(
document.getElementById("qrcode"),
{

text:

`
Ticket:${booking.bookingId}
Event:${booking.eventName}
Name:${booking.user}
Date:${booking.date}
`,

width:180,

height:180

}

);






// Print Ticket


document
.getElementById("printTicket")
.addEventListener(
"click",
()=>{


window.print();


});



});