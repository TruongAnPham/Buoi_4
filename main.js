const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

import { Register, auth } from "./firebase-config.js";
import { Login } from "./firebase-config.js";

const getEle = (id) => document.getElementById(id);

let btnSubmitRes = getEle("btnSubmitRes");
btnSubmitRes.addEventListener("click", () => {
    let txtRes = getEle("txtRes").value;
    let txtPass = getEle("txtPass").value;
    Register(auth, txtRes, txtPass);
    console.log(txtRes, txtPass);
}); 
let btnSubmitLogin = getEle("btnSubmitLogin");
btnSubmitLogin.addEventListener("click", () => {
    let txtEmail = getEle("txtEmail").value;
    let txtPassLogin = getEle("txtPassLogin").value;
    Login(auth, txtEmail, txtPassLogin);
    console.log(txtEmail, txtPassLogin);
});
