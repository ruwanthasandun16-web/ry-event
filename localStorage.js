// localStorage.js

// ===============================
// USER DATA MANAGEMENT
// ===============================

// Save user
function saveUser(userData) {

    localStorage.setItem(
        "user",
        JSON.stringify(userData)
    );

}


// Get user
function getUser() {

    return JSON.parse(
        localStorage.getItem("user")
    );

}


// Remove user (Logout)
function removeUser(){

    localStorage.removeItem("user");

}



// ===============================
// BOOKING MANAGEMENT
// ===============================


// Save booking

function saveBooking(bookingData){

    let bookings = JSON.parse(
        localStorage.getItem("bookings")
    ) || [];


    bookings.push(bookingData);


    localStorage.setItem(
        "bookings",
        JSON.stringify(bookings)
    );

}



// Get all bookings

function getBookings(){

    return JSON.parse(
        localStorage.getItem("bookings")
    ) || [];

}



// Delete booking

function deleteBooking(index){

    let bookings = getBookings();


    bookings.splice(index,1);


    localStorage.setItem(
        "bookings",
        JSON.stringify(bookings)
    );

}



// Clear all bookings

function clearBookings(){

    localStorage.removeItem("bookings");

}




// ===============================
// PAYMENT DATA
// ===============================


// Save payment

function savePayment(paymentData){

    localStorage.setItem(
        "payment",
        JSON.stringify(paymentData)
    );

}



// Get payment

function getPayment(){

    return JSON.parse(
        localStorage.getItem("payment")
    );

}



// ===============================
// TICKET MANAGEMENT
// ===============================


// Save ticket

function saveTicket(ticketData){

    localStorage.setItem(
        "ticket",
        JSON.stringify(ticketData)
    );

}



// Get ticket

function getTicket(){

    return JSON.parse(
        localStorage.getItem("ticket")
    );

}



// ===============================
// CLEAR ALL APP DATA
// ===============================


function clearAllData(){

    localStorage.clear();

}