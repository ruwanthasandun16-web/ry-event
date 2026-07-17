// booking.js


document.addEventListener("DOMContentLoaded",()=>{


let user = JSON.parse(
localStorage.getItem("user")
);


if(!user){

alert("Please Login First");

window.location.href="login.html";

return;

}




const bookingForm =
document.getElementById("bookingForm");



if(bookingForm){


bookingForm.addEventListener(
"submit",
function(e){


e.preventDefault();



let eventName =
document.getElementById("eventName").value;


let date =
document.getElementById("eventDate").value;


let location =
document.getElementById("location").value;


let tickets =
document.getElementById("tickets").value;



let booking = {


bookingId:
"RY"+Date.now(),


user:user.name,


email:user.email,


eventName:eventName,


date:date,


location:location,


tickets:tickets,


status:"Pending"


};




// Save booking

localStorage.setItem(
"currentBooking",
JSON.stringify(booking)
);



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


}



});