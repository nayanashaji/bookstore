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
    document.getElementById("main").style.display = "none";
    document.getElementById("registrationform").style.display = "block";
}
