// admin.js


let defaultEvents = [

{
id:1,
name:"Underground Party 2026",
date:"2026-08-15",
location:"Colombo",
price:1500
}

];



let events =
JSON.parse(
localStorage.getItem("events")
) || defaultEvents;




function saveEvents(){

localStorage.setItem(

"events",

JSON.stringify(events)

);

}





function displayEvents(){


let box =
document.getElementById(
"adminEvents"
);



box.innerHTML="";



events.forEach((event,index)=>{


box.innerHTML += `


<div class="event-card">


<h3>
${event.name}
</h3>


<p>
Date:
${event.date}
</p>


<p>
Location:
${event.location}
</p>


<p>
Price:
Rs.${event.price}
</p>



<button 
class="delete-btn"
onclick="deleteEvent(${index})">

Delete

</button>


</div>


`;



});


}




document
.getElementById("eventForm")
.addEventListener(
"submit",
function(e){


e.preventDefault();



let newEvent={


id:Date.now(),


name:
document.getElementById("eventName").value,


date:
document.getElementById("eventDate").value,


location:
document.getElementById("eventLocation").value,


price:
document.getElementById("eventPrice").value


};




events.push(newEvent);



saveEvents();



displayEvents();



this.reset();


});







function deleteEvent(index){


events.splice(index,1);


saveEvents();


displayEvents();


}





displayEvents();