// login.js


document
.getElementById("loginForm")
.addEventListener("submit",function(e){


    e.preventDefault();



    let email =
    document.getElementById("email").value;



    let password =
    document.getElementById("password").value;



    // Get registered users

    let users =
    JSON.parse(
        localStorage.getItem("users")
    ) || [];



    let user =
    users.find(
        u =>
        u.email === email &&
        u.password === password
    );




    if(user){


        // Save current login user

        localStorage.setItem(
            "user",
            JSON.stringify(user)
        );



        alert(
            "Login Successful!"
        );



        window.location.href =
        "profile.html";


    }


    else{


        alert(
            "Invalid Email or Password"
        );


    }



});