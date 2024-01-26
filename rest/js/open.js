const BTN = document.getElementById("open");
BTN.addEventListener("click", jsp); // Remove parentheses from jsp function call

const PTITTXT = document.getElementById("ptittexte");

function jsp() {
    PTITTXT.classList.toggle("invisible"); // Uncomment this line
}
