function adminLogout(){

localStorage.removeItem(
"adminLogin"
);

window.location.href=
"admin-login.html";

}