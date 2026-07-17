// admin-login.js


// Default Admin Account


let admin = {


username:"admin",

password:"12345"


};





document
.getElementById("adminLoginForm")
.addEventListener(
"submit",
function(e){


e.preventDefault();




let username =

document
.getElementById("adminUsername")
.value;



let password =

document
.getElementById("adminPassword")
.value;






if(

username === admin.username &&

password === admin.password

){



localStorage.setItem(

"adminLogin",

"true"

);



alert(
"Admin Login Successful"
);



window.location.href =
"admin.html";



}

else{


alert(
"Wrong Username or Password"
);


}



});