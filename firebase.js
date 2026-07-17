// firebase.js


import { initializeApp } from 
"https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";


import { getFirestore }
from
"https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";



import { getAuth }
from
"https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";





const firebaseConfig = {


apiKey:"YOUR_API_KEY",

authDomain:"YOUR_PROJECT.firebaseapp.com",

projectId:"YOUR_PROJECT_ID",

storageBucket:"YOUR_PROJECT.appspot.com",

messagingSenderId:"YOUR_ID",

appId:"YOUR_APP_ID"


};





const app =
initializeApp(firebaseConfig);



const db =
getFirestore(app);



const auth =
getAuth(app);



export {
db,
auth
};