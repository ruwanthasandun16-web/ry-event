// ======================================
// R&Y Event - Register Page
// register.js
// ======================================

// Password Show / Hide

const toggleButtons = document.querySelectorAll(".toggle-password");

toggleButtons.forEach(button => {

    button.addEventListener("click", () => {

        const input = document.getElementById(button.dataset.target);

        const icon = button.querySelector("i");

        if (input.type === "password") {

            input.type = "text";

            icon.classList.remove("fa-eye");

            icon.classList.add("fa-eye-slash");

        } else {

            input.type = "password";

            icon.classList.remove("fa-eye-slash");

            icon.classList.add("fa-eye");

        }

    });

});


// ======================================
// Register Form
// ======================================

const registerForm = document.getElementById("registerForm");

registerForm.addEventListener("submit", function(e){

    e.preventDefault();

    const fullname = document.getElementById("fullname").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const terms = document.getElementById("terms");

    // Full Name

    if(fullname.length < 3){

        alert("Please enter your full name.");

        return;

    }

    // Email

    if(!validateEmail(email)){

        alert("Please enter a valid email address.");

        return;

    }

    // Phone

    if(!validatePhone(phone)){

        alert("Please enter a valid phone number.");

        return;

    }

    // Password

    if(password.length < 8){

        alert("Password must contain at least 8 characters.");

        return;

    }

    // Confirm Password

    if(password !== confirmPassword){

        alert("Passwords do not match.");

        return;

    }

    // Terms

    if(!terms.checked){

        alert("Please accept the Terms & Conditions.");

        return;

    }

    // Save User (Temporary Local Storage)

    const user = {

        fullname: fullname,
        email: email,
        phone: phone

    };

    localStorage.setItem("ryUser", JSON.stringify(user));

    alert("Registration Successful!");

    window.location.href = "login.html";

});


// ======================================
// Email Validation
// ======================================

function validateEmail(email){

    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return pattern.test(email);

}


// ======================================
// Phone Validation
// Supports:
/// 07XXXXXXXX
/// +947XXXXXXXX
// ======================================

function validatePhone(phone){

    const pattern = /^(?:\+94|0)?7[0-9]{8}$/;

    return pattern.test(phone);

}


// ======================================
// Password Strength Indicator
// ======================================

const passwordField = document.getElementById("password");

passwordField.addEventListener("keyup", ()=>{

    const value = passwordField.value;

    if(value.length < 6){

        passwordField.style.border = "2px solid red";

    }

    else if(value.length < 8){

        passwordField.style.border = "2px solid orange";

    }

    else{

        passwordField.style.border = "2px solid limegreen";

    }

});


// ======================================
// Google Register
// ======================================

document.querySelector(".google-btn").addEventListener("click", ()=>{

    alert("Google Sign Up will be connected with Firebase Authentication.");

});


// ======================================
// Auto Fill Test Data (Optional)
// Press Ctrl + Shift + T
// ======================================

document.addEventListener("keydown",(e)=>{

    if(e.ctrlKey && e.shiftKey && e.key.toLowerCase()=="t"){

        document.getElementById("fullname").value="Ruwantha Sandun";

        document.getElementById("email").value="ruwantha@example.com";

        document.getElementById("phone").value="0771234567";

        document.getElementById("password").value="Password123";

        document.getElementById("confirmPassword").value="Password123";

        document.getElementById("terms").checked=true;

    }

});