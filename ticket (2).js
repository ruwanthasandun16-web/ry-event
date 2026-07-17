// ticket.js


document.addEventListener(
"DOMContentLoaded",
()=>{


let booking =
JSON.parse(
localStorage.getItem("currentBooking")
);



let payment =
JSON.parse(
localStorage.getItem("payment")
);



if(!booking || !payment){

window.location.href="events.html";

return;

}




document.getElementById("ticketID").innerHTML =
booking.bookingId;



document.getElementById("ticketEvent").innerHTML =
booking.eventName;



document.getElementById("ticketDate").innerHTML =
booking.date;



document.getElementById("ticketLocation").innerHTML =
booking.location;



document.getElementById("ticketUser").innerHTML =
booking.user;



document.getElementById("ticketStatus").innerHTML =
payment.status;



// Download ticket


let download =
document.getElementById("downloadTicket");



if(download){


download.onclick=()=>{


window.print();


};


}



});