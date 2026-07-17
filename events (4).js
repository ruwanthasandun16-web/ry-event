import {db}
from "./firebase.js";


import {

collection,

getDocs

}

from

"https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";




async function loadEvents(){


let eventBox =
document.getElementById("eventList");



let snapshot =

await getDocs(

collection(
db,
"events"

)

);



snapshot.forEach((doc)=>{


let event =
doc.data();



eventBox.innerHTML += `


<div class="event-card">


<h3>
${event.name}
</h3>


<p>
${event.date}
</p>


<p>
${event.location}
</p>


<p>
Rs.${event.price}
</p>


<button>
Book Now
</button>


</div>


`;



});


}



loadEvents();