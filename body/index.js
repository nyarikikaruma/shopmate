// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
import { getFirestore, doc, setDoc } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js'
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
// const auth = getAuth();

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

document.getElementById('add_item').addEventListener('click', function() {
    return console.log(document.getElementById('category').value);
    const shoppinglist = {
        category: document.getElementById('category').value,
        name: "Sprite",
        price: 500,
    };
    async function sendData() {
        await setDoc(doc(db, "shopping-list", "one"), shoppinglist);
    
    };
    sendData().then((response)=> {
        console.log(response);
    }).catch((error) => {
        console.log(error);
    })
})