// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyClGGqy8prgzumRWYRm6VvjhtwVnJQUoiM",
    authDomain: "shoppinglist-56031.firebaseapp.com",
    projectId: "shoppinglist-56031",
    storageBucket: "shoppinglist-56031.appspot.com",
    messagingSenderId: "357876634666",
    appId: "1:357876634666:web:c8e60b370148a794d8df53",
    measurementId: "G-M01H44DM6G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// var ui = new firebaseui.auth.AuthUI(firebase.auth());
import { getAuth, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js'
import { getFirestore } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js'
const auth = getAuth();

document.getElementById('login_button').addEventListener('click', function(e) {
    e.preventDefault();
    const email = document.getElementById('login_email').value;
    const password = document.getElementById('login_password').value;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
        console.log(user);
        window.location.replace("../body/index.html");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });

})
document.getElementById('register_button').addEventListener('click', function() {
  window.location.replace("./register.html");
})