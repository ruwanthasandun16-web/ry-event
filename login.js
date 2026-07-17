// =============================
// R&Y Event Login
// =============================

const togglePassword = document.getElementById("togglePassword");
const password = document.getElementById("password");

togglePassword.addEventListener("click",()=>{

if(password.type==="password"){

password.type="text";

togglePassword.innerHTML='<i class="fa-solid fa-eye-slash"></i>';

}else{

password.type="password";

togglePassword.innerHTML='<i class="fa-solid fa-eye"></i>';

}

});

// =============================
// Login Form
// =============================

const loginForm=document.getElementById("loginForm");

loginForm.addEventListener("submit",(e)=>{

e.preventDefault();

const email=document.getElementById("email").value.trim();

const pass=document.getElementById("password").value.trim();

if(email==="" || pass===""){

alert("Please fill all fields.");

return;

}

if(!validateEmail(email)){

alert("Invalid Email Address");

return;

}

// Temporary Login

alert("Login Successful");

// Redirect Home

window.location.href="home.html";

});

// =============================

function validateEmail(email){

const pattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

return pattern.test(email);

}

// =============================
// Google Login Button
// =============================

document.querySelector(".google-btn").addEventListener("click",()=>{

alert("Google Login will be connected with Firebase later.");

});