import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-firestore.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-auth.js";

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
const auth = getAuth(app);

document.getElementById("registerForm").addEventListener('submit', async function(e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const phone = document.getElementById("phone").value;

    try {
        // Crear usuario en Firebase Authentication
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        
        // Agregar datos adicionales a Firestore
        const docRef = await addDoc(collection(db, "users"), {
            uid: user.uid,
            username: username,
            email: email,
            phoneNumber: phone
        });
        
        console.log("Usuario registrado con ID: ", docRef.id);
        alert("Registro exitoso!");
        // Redireccionar al usuario a la página de inicio de sesión
        window.location.href = "login.html";
    } catch (error) {
        console.error("Error al registrar usuario: ", error);
        alert("Ocurrió un error durante el registro. Por favor, intenta nuevamente más tarde.");
    }
});
