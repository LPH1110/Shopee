var modalBlock = document.querySelector(".modal");
var logIn = document.querySelector(".log-in-form");
var register = document.querySelector(".register-form");
var logInBtn = document.querySelector(".log-in-btn");
var registerBtn = document.querySelector(".register-btn");
var returnBtn = document.querySelector(".btn--return");
var overlay = document.querySelector(".modal__overlay");



registerBtn.onclick = function() {
    modalBlock.style.display = "flex";
    register.style.display = "block";
    logIn.style.display = "none";
}

logInBtn.onclick = function() {
    modalBlock.style.display = "flex";
    logIn.style.display = "block";
    register.style.display = "none";
} 

returnBtn.addEventListener('click', modalDisabled);
overlay.addEventListener('click', modalDisabled);

function modalDisabled() {
    modalBlock.style.display = "none";
}