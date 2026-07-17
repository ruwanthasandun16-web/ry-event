// profile.js

document.addEventListener("DOMContentLoaded", () => {

    // Get user data from localStorage
    let user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
        // If user not logged in
        window.location.href = "login.html";
        return;
    }


    // Display user information
    document.getElementById("userName").innerText = user.name || "User Name";
    document.getElementById("userEmail").innerText = user.email || "Email not available";
    document.getElementById("userPhone").innerText = user.phone || "Phone not available";


    // Display profile image
    if(user.image){
        document.getElementById("profileImg").src = user.image;
    }


    // Load Booking History
    loadBookings();


});



// Load booked events

function loadBookings(){

    let bookings = JSON.parse(localStorage.getItem("bookings")) || [];

    let bookingContainer = document.getElementById("bookingList");


    if(bookings.length === 0){

        bookingContainer.innerHTML = `
            <p class="empty">
                No bookings available
            </p>
        `;

        return;
    }


    bookingContainer.innerHTML="";


    bookings.forEach((booking,index)=>{


        let bookingCard = document.createElement("div");

        bookingCard.className="booking-item";


        bookingCard.innerHTML = `

            <div>
                <h3>${booking.eventName}</h3>
                <p>Date : ${booking.date}</p>
                <p>Location : ${booking.location}</p>
            </div>

            <span>
                Ticket ID : ${booking.ticketId || index+1000}
            </span>

        `;


        bookingContainer.appendChild(bookingCard);


    });

}




// Edit Profile Button

const editBtn = document.getElementById("editProfile");


if(editBtn){

    editBtn.addEventListener("click",()=>{


        let user = JSON.parse(localStorage.getItem("user"));


        let newName = prompt(
            "Enter your new name",
            user.name
        );


        if(newName){

            user.name = newName;


            localStorage.setItem(
                "user",
                JSON.stringify(user)
            );


            location.reload();

        }


    });

}





// Logout Function

const logoutBtn = document.getElementById("logoutBtn");


if(logoutBtn){

    logoutBtn.addEventListener("click",()=>{


        let confirmLogout = confirm(
            "Are you sure you want to logout?"
        );


        if(confirmLogout){

            localStorage.removeItem("user");

            window.location.href="login.html";

        }


    });

}