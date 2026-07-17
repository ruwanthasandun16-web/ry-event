const scanner =

new Html5QrcodeScanner(

"reader",

{

fps:10,

qrbox:250

}

);





scanner.render(

(code)=>{


checkTicket(code);


}

);







function checkTicket(id){


let tickets =

JSON.parse(

localStorage.getItem(
"tickets"

)

) || [];




let ticket =

tickets.find(

t=>t.ticketID===id

);





if(ticket){


document
.getElementById("result")
.innerHTML=

"✅ Valid Ticket";


}

else{


document
.getElementById("result")
.innerHTML=

"❌ Invalid Ticket";


}



}