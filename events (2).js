// events.js


const events = [


{
id:1,
name:"Underground Party 2026",
date:"2026-08-15",
location:"Colombo",
price:1500
},


{
id:2,
name:"Beach Music Night",
date:"2026-09-10",
location:"Galle",
price:2000
},


{
id:3,
name:"DJ Festival Sri Lanka",
date:"2026-10-05",
location:"Negombo",
price:2500
},


{
id:4,
name:"Night Vibe Party",
date:"2026-11-20",
location:"Kandy",
price:1800
}


];




const eventList =
document.getElementById("eventList");



function displayEvents(data){


eventList.innerHTML="";


data.forEach(event=>{


let card =
document.createElement("div");


card.className="event-card";



card.innerHTML=`

<h3>
${event.name}
</h3>


<p>
📅 Date:
${event.date}
</p>


<p>
📍 Location:
${event.location}
</p>


<p>
💵 Price:
Rs.${event.price}
</p>


<button onclick="bookEvent(${event.id})">

Book Now

</button>

`;



eventList.appendChild(card);


});


}




displayEvents(events);





// Search Function


document
.getElementById("searchEvent")
.addEventListener(
"keyup",
function(){


let value =
this.value.toLowerCase();



let filtered =
events.filter(event=>

event.name
.toLowerCase()
.includes(value)

);



displayEvents(filtered);


});






// Booking Button


function bookEvent(id){


let event =
events.find(
e=>e.id===id
);



localStorage.setItem(
"selectedEvent",
JSON.stringify(event)
);



window.location.href=
"booking.html";


}