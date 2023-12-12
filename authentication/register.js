// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js'
import { getFirestore } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVCKwANupjvKowJWH1wgh2FUUTvNLcwdE",
  authDomain: "shoppinglist1-69278.firebaseapp.com",
  projectId: "shoppinglist1-69278",
  storageBucket: "shoppinglist1-69278.appspot.com",
  messagingSenderId: "267397778410",
  appId: "1:267397778410:web:308432cfe2d8f2524b0093",
  measurementId: "G-X74WRY5CFN"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// var ui = new firebaseui.auth.AuthUI(firebase.auth());
const auth = getAuth();

document.getElementById('create').addEventListener('click', 
function createUser(e) {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value
    e.preventDefault()
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential)=> {
        const user = userCredential.user;
        console.log('Our user is: ', user);
        window.location.replace("../body/index.html");
    })
    
})

document.getElementById('login_link').addEventListener('click', function() {
  window.location.replace("./login.html");
})