import { db, auth } from "./firebase.js";


import {

addDoc,
collection,
doc,
updateDoc

}

from

"https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";





let bookingID =

localStorage.getItem(
"bookingID"
);



let bookingData =

JSON.parse(

localStorage.getItem(
"currentBooking"

)

);






document
.getElementById("paymentForm")
.addEventListener(
"submit",
async(e)=>{


e.preventDefault();




let method =

document
.getElementById("method")
.value;



let payment = {


bookingID:bookingID,


userID:
auth.currentUser.uid,


amount:
bookingData.total,


method:method,


status:"Paid",


date:
new Date()


};






await addDoc(

collection(
db,
"payments"

),

payment

);





// Update Booking


await updateDoc(

doc(
db,
"bookings",
bookingID

),

{

status:"Paid"

}

);






// Create Ticket


let ticketID =
"RY-" + Date.now();





let ticket = {


ticketID:ticketID,


bookingID:bookingID,


eventName:
bookingData.eventName,


userName:
bookingData.user,


date:
bookingData.date,


location:
bookingData.location,


status:"Valid"


};






await addDoc(

collection(
db,
"tickets"

),

ticket

);






localStorage.setItem(

"ticketID",

ticketID

);





alert(
"Payment Successful"
);



window.location.href=
"ticket.html";



});