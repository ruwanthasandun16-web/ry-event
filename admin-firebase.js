import {

db,
auth

}

from "./firebase.js";



import {

collection,
addDoc,
getDocs,
deleteDoc,
doc

}

from

"https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";



import {

signOut

}

from

"https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";





const form =
document.getElementById("eventForm");

const eventList =
document.getElementById("eventList");





// Add Event


form.addEventListener(
"submit",
async(e)=>{


e.preventDefault();



await addDoc(

collection(db,"events"),

{


name:
document.getElementById("name").value,


date:
document.getElementById("date").value,


location:
document.getElementById("location").value,


price:
Number(
document.getElementById("price").value
)


}


);



alert(
"Event Added"
);



form.reset();


loadEvents();


});






// Load Events


async function loadEvents(){


eventList.innerHTML="";



let data =

await getDocs(

collection(
db,
"events"

)

);




data.forEach((item)=>{


let event =
item.data();



eventList.innerHTML += `



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



<button onclick="deleteEvent('${item.id}')">

Delete

</button>


</div>


`;



});


}






// Delete Event


window.deleteEvent = async(id)=>{


await deleteDoc(

doc(
db,
"events",
id

)

);



alert(
"Event Deleted"
);



loadEvents();


}






// Admin Logout


document
.getElementById("logout")
.onclick=()=>{


signOut(auth);


window.location.href=
"admin-login.html";


}





loadEvents();