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




document.getElementById("eventName").innerHTML =
booking.eventName;


document.getElementById("amount").innerHTML =
booking.tickets * 1500;




let paymentForm =
document.getElementById("paymentForm");



paymentForm.addEventListener(
"submit",
function(e){


e.preventDefault();



let payment = {


paymentId:
"PAY"+Date.now(),


bookingId:
booking.bookingId,


method:
document.getElementById("method").value,


amount:
booking.tickets * 1500,


status:
"Paid"


};



localStorage.setItem(
"payment",
JSON.stringify(payment)
);




// Update booking status


let bookings =
JSON.parse(
localStorage.getItem("bookings")
);



bookings =
bookings.map(b=>{


if(
b.bookingId === booking.bookingId
){

b.status="Paid";

}


return b;


});



localStorage.setItem(
"bookings",
JSON.stringify(bookings)
);





window.location.href=
"ticket.html";



});



});