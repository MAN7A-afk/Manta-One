const username = document.getElementById("username");
const userMsg = document.getElementById("usermsg");


const pass = document.getElementById("password");
const passMsg = document.getElementById("passmsg");

const submitBtn = document.getElementById("loginbtn");

const MIN_USER = 5;
const MAX_USER = 20;

const MIN_PASS = 8;
const MAX_PASS = 15;

submitBtn.addEventListener("click", signIn);

function signIn(event) {
    event.preventDefault();
let valid = true;

//===================IS THE USER VALID?=======================//
if (username.value.length < MIN_USER) {
    userMsg.textContent = `username must be at least ${MIN_USER} characters long`;
    userMsg.style.color = "yellow";
    valid = false;

}
else if (username.value.length > MAX_USER) {
    userMsg.textContent = `Woah 😅 thats too long, your username can't be more than ${MAX_USER} characters long `;
    userMsg.style.color = "yellow";
    valid = false;

}
else {
    userMsg.textContent = "";
}

//===================PASSWORD=======================//

if (pass.value.includes(" ")){
    passMsg.textContent = "Password cannot contain spaces";
    passMsg.style.color = "yellow";
    valid = false;
}

else if (pass.value.length < MIN_PASS) {
    passMsg.textContent = `Password must be at least ${MIN_PASS} characters long`;
    passMsg.style.color = "yellow";
    valid = false;
}
else if (pass.value.length > MAX_PASS) {
    passMsg.textContent = `Woah 😅 thats a really long password are you sure you are going to remember all that ?`;
    passMsg.style.color = "yellow";
    valid = false;
}

else{
    passMsg.textContent = "";
}






//===============Button=====\\
if (valid){
    submitBtn.textContent = 'login Successful';
    submitBtn.style.transform = "scale(1.1)";
    submitBtn.style.backgroundColor = "green";

    setTimeout(() => {
        submitBtn.style.transform = "scale(1)";
    }, 2000);
}
}

