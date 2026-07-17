import {
auth,
db
}
from "./firebase.js";



import {
createUserWithEmailAndPassword
}
from
"https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";



import {

doc,

setDoc

}

from

"https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";





registerForm.addEventListener(
"submit",
async(e)=>{


e.preventDefault();



let email =
document.getElementById("email").value;


let password =
document.getElementById("password").value;


let name =
document.getElementById("name").value;



try{


let userCredential =

await createUserWithEmailAndPassword(

auth,

email,

password

);




await setDoc(

doc(
db,
"users",
userCredential.user.uid
),

{

name:name,

email:email,

role:"user"

}


);



alert(
"Account Created"
);



location.href="login.html";



}


catch(error){


alert(
error.message
);


}


});