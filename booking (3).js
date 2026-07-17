// booking.js


document.addEventListener(
"DOMContentLoaded",
()=>{


let user =
JSON.parse(
localStorage.getItem("user")
);



if(!user){

alert("Please Login First");

window.location.href="login.html";

return;

}




// Load selected event


let event =
JSON.parse(
localStorage.getItem("selectedEvent")
);



if(!event){

alert("No Event Selected");

window.location.href="events.html";

return;

}




document
.getElementById("selectedEventName")
.innerText =
event.name;



document
.getElementById("selectedDate")
.innerText =
event.date;



document
.getElementById("selectedLocation")
.innerText =
event.location;



document
.getElementById("selectedPrice")
.innerText =
event.price;






// Booking Submit


document
.getElementById("bookingForm")
.addEventListener(
"submit",
(e)=>{


e.preventDefault();



let tickets =
document.getElementById("tickets").value;




let booking = {


bookingId:
"RY"+Date.now(),


user:
user.name,


email:
user.email,


eventName:
event.name,


date:
event.date,


location:
event.location,


price:
event.price,


tickets:
tickets,


total:
event.price * tickets,


status:
"Pending"


};





// Save current booking


localStorage.setItem(

"currentBooking",

JSON.stringify(booking)

);




// Save booking history


let bookings =
JSON.parse(
localStorage.getItem("bookings")
) || [];



bookings.push(booking);



localStorage.setItem(

"bookings",

JSON.stringify(bookings)

);





window.location.href=
"payment.html";



});



});