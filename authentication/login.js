// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js'
// Your web app's Firebase configuration
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
// Get authentication instance
const auth = getAuth();

// Event listener for login button click
document.getElementById('login_button').addEventListener('click', function(e) {
    e.preventDefault();
    const email = document.getElementById('login_email').value;
    const password = document.getElementById('login_password').value;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        const currentUser = auth.currentUser;
        localStorage.setItem('user_id', currentUser.uid)
        // ...
        window.location.replace("../body/index.html");
      })
       // Handle sign-in errors
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);// Log error message

      });

})

// Event listener for register button click
document.getElementById('register_button').addEventListener('click', function() {
  window.location.replace("./register.html");
})