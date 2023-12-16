
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js'   
import { getAuth, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js'
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
const firebaseConfig = {
    apiKey: "AIzaSyD5RQnS8F1Ir20D8j88bfrLMCWpoMxPzd8",
    authDomain: "spacing-things.firebaseapp.com",
    databaseURL: "https://spacing-things-default-rtdb.firebaseio.com",
    projectId: "spacing-things",
    storageBucket: "spacing-things.appspot.com",
    messagingSenderId: "820697678367",
    appId: "1:820697678367:web:e0dd1dd09ca1f2390a0b2a",
    measurementId: "G-KW75Y6B12C"
  };
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const Register = async (auth, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword (auth, email, password);
        alert("Dang ki thanh cong");
        console.log(res);
    } catch (error) {
        alert("Dang ki that bai");
        console.log(error.code);
    }
};

export const Login = async (auth, email, password) => {
    try {
        const res = await signInWithEmailAndPassword (auth, email, password);
        alert("Dang Nhap thanh cong");
        console.log(res);
    } catch (error) {
        alert("Dang Nhap that bai");
        console.log(error.code);
    }
};




