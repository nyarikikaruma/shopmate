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
import { getAuth, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js'
import { getFirestore } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js'
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