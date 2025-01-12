// Countdown zur Bundestagswahl am 23. Februar 2025
const electionDate = new Date("February 23, 2025 00:00:00").getTime();

const countdownElement = document.getElementById("countdown");

function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = electionDate - now;

    if (timeLeft <= 0) {
        countdownElement.innerHTML = "Die Wahl hat begonnen!";
        clearInterval(countdownInterval);
    } else {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        countdownElement.innerHTML = `${days} Tage ${hours} Stunden ${minutes} Minuten ${seconds} Sekunden`;
    }
}

// Alle Sekunde das Countdown aktualisieren
const countdownInterval = setInterval(updateCountdown, 1000);