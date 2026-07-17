// home.js


function goEvents(){

window.location.href="events.html";

}



// Check Login Status

document.addEventListener(
"DOMContentLoaded",
()=>{


let user =
localStorage.getItem("user");



let loginLink =
document.querySelector(
'nav a[href="login.html"]'
);



if(user && loginLink){


loginLink.innerHTML="Logout";


loginLink.onclick=function(){


localStorage.removeItem("user");


alert(
"Logged Out"
);


window.location.href="home.html";


};


}



});