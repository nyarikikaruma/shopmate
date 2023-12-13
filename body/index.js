// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
import { getFirestore, deleteDoc, doc, collection, addDoc, query, where, getDocs, getDoc } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js';
import { getAuth, onAuthStateChanged, signOut } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js'
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
const auth = getAuth();


onAuthStateChanged(auth, (user)=> {
    if(user) {
        localStorage.setItem('user_id', user.uid)
        console.log(user.uid);
    }
    else{
        alert('You are not Logged in!')
        window.location.replace("../authentication/login.html");
    }
})

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

document.getElementById('add_item').addEventListener('click', function() {
    const shoppinglist = {
        category: document.getElementById('category').value,
        name: document.getElementById('item_name').value,
        price: document.getElementById('item_price').value,
        uid: localStorage.getItem('user_id')
    };
    async function sendData() {
       return  await addDoc( collection(db, "shopping-list"), shoppinglist);
        // await add(shoppingData, );
    
    };
    sendData().then((response)=> {
        console.log(response);
    }).catch((error) => {
        console.log(error);
    });
    const listElement = document.getElementById('shoppinglist').firstChild;
    if(listElement) {
        listElement.remove()
    }
    fetchShoppingList()
    document.getElementById('item_name').value = ''
    document.getElementById('item_price').value = ''
})

async function fetchShoppingList() {
    const list = query(collection(db, 'shopping-list'), where('uid', '==', localStorage.getItem('user_id')));
    const querySnapshot = await getDocs(list);
    let drinks = []
    let shoes = []
    let veges = []
    let clothes = []
    let cereals = []
    let drinksId = ''
    let shoesId = ''
    let vegesId = ''
    let clothesId = ''
    let cerealsId = ''
    const itemDiv = document.createElement('div');
    if(querySnapshot.docs.length === 0) {
        const noItemDiv = document.createElement('div')
        noItemDiv.innerHTML = '<p>No Items in your list. Please add items above!</p>';
        document.getElementById('shoppinglist').appendChild(noItemDiv)
    }
    querySnapshot.forEach((element) => {
        const item =  element.data();
        if(item.category === 'Clothes') {
            clothes.push(item)
            clothesId = element.id
        }
        if(item.category === 'Drinks') {
            drinks.push(item)
            drinksId = element.id
        }
        if(item.category === 'Shoes') {
            shoes.push(item)
            shoesId = element.id
        }
        if(item.category === 'Vegetables') {
            veges.push(item)
            vegesId = element.id
        }
        if(item.category === 'Cereals') {
            cereals.push(item)
            cerealsId = element.id
        }
    });

        function shoppingList(list, listName, documentId) {
            itemDiv.insertAdjacentHTML('beforeend', `<h3>${listName}</h3>`)
            document.getElementById('shoppinglist').appendChild(itemDiv)
            list.forEach(element => {
                console.log('Item id is: ', element);
                itemDiv.insertAdjacentHTML('beforeend', 

                `<div style="display: flex; justify-content: space-between">
                <div style=" display: flex; align-items: center; border-radius: 5px; border: 1px solid #ddd; padding: 10px; margin: 3px">
                <input type="checkbox" style="margin-right: 10px;" />
                <p style="margin: 0; font-family: Arial, sans-serif; font-size: 16px;">${element.name} Price $: ${element.price}</p>
                </div>
                <button
                    value="${documentId}"
                    id="delete"
                    style="
                    background-color: #4CAF50;
                    color: white;
                    border-radius: 5px;
                    border: 1px solid #ddd;
                    font-weight: bold;
                    ">
                    Delete
                </button>
                </div>
                <hr style="background-color: #4CAF50">
              
                `
                )
                document.getElementById('shoppinglist').appendChild(itemDiv)
            });
        }
        if(drinks.length > 0) {
            shoppingList(drinks, 'Drinks', drinksId);
        }
        if(shoes.length > 0) {
            shoppingList(shoes, 'Shoes', shoesId)
        }
        if(veges.length > 0) {
            shoppingList(veges, 'Vegetables', vegesId)
        }
        if(clothes.length > 0) {
            shoppingList(clothes, 'Clothes', clothesId)
        }
        if(cereals.length > 0) {
            shoppingList(cereals, 'Cereals', cerealsId)
        }

        itemDiv.addEventListener('click', async function(e){
            if(e.target.matches('#delete')){
                const buttonValue = e.target.value; // Accessing the value attribute of the clicked button

                const docRef = doc(db, 'shopping-list', buttonValue)
                await deleteDoc(docRef).then((response) => {
                    console.log(response);
                    console.log('Document deleted, successfully!');
                    location.reload()
                }).catch(error => {
                    console.log('Document could not be deleted, ', error);
                })
            }
        })
}
fetchShoppingList()


document.getElementById('logout').addEventListener('click', function(){
    const auth = getAuth();
    signOut(auth).then(() => {
      alert('Sign-out successful.')
    }).catch((error) => {
        console.log(error);
    });
    localStorage.removeItem('user_id')
    window.location.replace("../authentication/login.html");
})
