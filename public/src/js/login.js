import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyAgqi1gteh8kuvXNRfW7VWm8CuNkCNthaw",
    authDomain: "website-dinamico.firebaseapp.com",
    projectId: "website-dinamico",
    storageBucket: "website-dinamico.appspot.com",
    messagingSenderId: "109157047585",
    appId: "1:109157047585:web:ddeb90598407488375b260",
    measurementId: "G-HHLMF4N6R5"
  };

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

document.getElementById("submit").addEventListener('click', async function(e) {
    e.preventDefault();

    try {
        const docRef = await addDoc(collection(db, "users"), {
            username: document.getElementById("username").value,
            email: document.getElementById("email").value,
            phoneNumber: document.getElementById("phone").value,
            password: document.getElementById("password").value
        });
        console.log("Document written with ID: ", docRef.id);
        alert("Inicio de sesión exitoso!");
    } catch (error) {
        console.error("Error adding document: ", error);
        alert("An error occurred while saving the data. Please try again later.");
    }
});