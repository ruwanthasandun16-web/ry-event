import {db}
from "./firebase.js";


import {

collection,
query,
where,
getDocs

}

from

"https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";





let ticketID =

localStorage.getItem(
"ticketID"
);





async function loadTicket(){



let q = query(

collection(
db,
"tickets"
),

where(
"ticketID",
"==",
ticketID
)

);





let data =

await getDocs(q);





data.forEach((item)=>{


let ticket =
item.data();



document
.getElementById("ticketID")
.innerHTML =
ticket.ticketID;



document
.getElementById("ticketEvent")
.innerHTML =
ticket.eventName;



document
.getElementById("ticketDate")
.innerHTML =
ticket.date;



document
.getElementById("ticketLocation")
.innerHTML =
ticket.location;






// QR Generate


new QRCode(

document.getElementById(
"qrcode"

),

{


text:
ticket.ticketID,


width:200,


height:200


}

);



});



}



loadTicket();