import {db}
from "./firebase.js";


import {

collection,
getDocs,
doc,
updateDoc

}

from

"https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";





const box =

document.getElementById(
"bookingList"
);






async function loadBookings(){



box.innerHTML="";



let data =

await getDocs(

collection(
db,
"bookings"
)

);





data.forEach((item)=>{


let booking =
item.data();




box.innerHTML += `


<div class="event-card">


<h3>
${booking.eventName}
</h3>


<p>
Customer:
${booking.email}
</p>


<p>
Date:
${booking.date}
</p>


<p>
Tickets:
${booking.tickets}
</p>


<p>
Amount:
Rs.${booking.total}
</p>


<p>
Status:
${booking.status}
</p>



<button onclick="approveBooking('${item.id}')">

Approve

</button>



</div>


`;



});



}








window.approveBooking = async(id)=>{


await updateDoc(

doc(
db,
"bookings",
id

),

{

status:"Approved"

}

);



alert(
"Booking Approved"
);



loadBookings();


}






loadBookings();