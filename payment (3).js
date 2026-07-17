// payment.js


document.addEventListener(
"DOMContentLoaded",
()=>{


let booking =
JSON.parse(
localStorage.getItem("currentBooking")
);



if(!booking){

window.location.href="events.html";

return;

}




document
.getElementById("eventName")
.innerText =
booking.eventName;



document
.getElementById("ticketCount")
.innerText =
booking.tickets;



document
.getElementById("amount")
.innerText =
booking.total;






document
.getElementById("paymentForm")
.addEventListener(
"submit",
(e)=>{


e.preventDefault();




let payment={


paymentId:
"PAY"+Date.now(),


bookingId:
booking.bookingId,


method:
document.getElementById("method").value,


amount:
booking.total,


status:
"Paid",


date:
new Date()
.toLocaleDateString()


};





// Save payment

localStorage.setItem(

"payment",

JSON.stringify(payment)

);




// Update booking status


let bookings =
JSON.parse(
localStorage.getItem("bookings")
) || [];



bookings =
bookings.map(
(item)=>{


if(item.bookingId === booking.bookingId){

item.status="Paid";

}


return item;


});



localStorage.setItem(

"bookings",

JSON.stringify(bookings)

);





alert(
"Payment Successful!"
);



window.location.href=
"ticket.html";



});



});