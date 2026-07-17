// events.js


// Load events from Admin Panel

let events =
JSON.parse(
    localStorage.getItem("events")
) || [

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
}

];



// Save default events

localStorage.setItem(
    "events",
    JSON.stringify(events)
);




const eventList =
document.getElementById("eventList");





// Display Events

function displayEvents(data){


eventList.innerHTML="";



if(data.length===0){


eventList.innerHTML=`

<h3>
No Events Available
</h3>

`;


return;

}




data.forEach(event=>{


let card =
document.createElement("div");



card.className =
"event-card";



card.innerHTML = `


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
💵 Ticket:
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







// Search Events


document
.getElementById("searchEvent")
.addEventListener(
"keyup",
function(){



let search =
this.value.toLowerCase();




let result =
events.filter(event =>


event.name
.toLowerCase()
.includes(search)



);



displayEvents(result);



});








// Booking Function


function bookEvent(id){



let selectedEvent =

events.find(
event =>
event.id == id
);



localStorage.setItem(

"selectedEvent",

JSON.stringify(selectedEvent)

);




let user =

localStorage.getItem("user");



if(!user){


alert(
"Please Login Before Booking"
);


window.location.href =
"login.html";


return;


}




window.location.href =
"booking.html";



}