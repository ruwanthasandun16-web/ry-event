import { db, auth } from "./firebase.js";


import {

addDoc,
collection,
getDoc,
doc

}

from

"https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";



import {

onAuthStateChanged

}

from

"https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";





let selectedEvent =

JSON.parse(
localStorage.getItem("selectedEvent")
);



let currentUser;




onAuthStateChanged(
auth,
(user)=>{


if(!user){

alert("Please Login");

window.location.href="login.html";

return;

}


currentUser=user;


});







document
.getElementById("bookingForm")
.addEventListener(
"submit",
async(e)=>{


e.preventDefault();



let tickets =

Number(
document.getElementById("tickets").value
);





let booking = {


userID:
currentUser.uid,


email:
currentUser.email,


eventName:
selectedEvent.name,


date:
selectedEvent.date,


location:
selectedEvent.location,


price:
selectedEvent.price,


tickets:tickets,


total:
selectedEvent.price * tickets,


status:
"Pending",


created:
new Date()


};






let result =

await addDoc(

collection(
db,
"bookings"
),

booking

);





localStorage.setItem(

"bookingID",

result.id

);



alert(
"Booking Successful"
);



window.location.href=
"payment.html";



});