// register.js


document
.getElementById("registerForm")
.addEventListener(
"submit",
function(e){


e.preventDefault();



let name =
document.getElementById("name").value;



let email =
document.getElementById("email").value;



let phone =
document.getElementById("phone").value;



let password =
document.getElementById("password").value;



let confirmPassword =
document.getElementById("confirmPassword").value;



if(password !== confirmPassword){


alert(
"Passwords do not match!"
);


return;

}




// Get existing users

let users =
JSON.parse(
localStorage.getItem("users")
) || [];




// Check email already exists

let existingUser =
users.find(
u=>u.email===email
);



if(existingUser){


alert(
"Email already registered!"
);


return;


}




// Create new user


let newUser = {


id: Date.now(),

name:name,

email:email,

phone:phone,

password:password,

image:"images/profile.png"


};




// Save user list


users.push(newUser);



localStorage.setItem(

"users",

JSON.stringify(users)

);





alert(
"Registration Successful!"
);



window.location.href =
"login.html";



});