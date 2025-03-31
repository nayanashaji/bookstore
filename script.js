function timer() {
    const targetDate = new Date("April 30, 2025 00:00:00").getTime(); 
    const timerElement = document.getElementById("clock");

    function update_timer() {
        const now = new Date().getTime();
        const timeLeft = targetDate - now;

        if (timeLeft <= 0) {
            timerElement.innerHTML = "The event has started!";
            clearInterval(interval); 
            return;
        }

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        timerElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }

    update_timer();
    const interval = setInterval(update_timer, 1000); 
}

timer();

function showForm() {
    window.location.href = "reg.html";
}

function validation()
{
    return email()&&username()&&password(); 
}
function email()
{
let email = document.getElementById("email").value;
if (email.trim() === "") 
    {
    alert("Email field cannot be empty!");
    return false;
    }
let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!regex.test(email)) {
alert("Invalid email format!");
return false;
}
return true;
}
function username()
    {
    let name = document.getElementById("name").value;
    if (name.trim() === "") 
        {
        alert("Userame field cannot be empty!");
        return false;
        }
    return true;
    }
function password() {
let password = document.getElementById("password").value;
if (password.trim() === "") 
    {
    alert("Password field cannot be empty!");
    return false;
    }
let regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
if (!regex.test(password)) {
alert("Password must be at least 8 characters, including a letter and a number.");
return false;
}
return true;
}