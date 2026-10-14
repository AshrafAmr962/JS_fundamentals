
let count = 0;

const display = document.getElementById("counter");

const incrementButton = document.getElementById("increment");
const decrementButton = document.getElementById("decrement");
const resetButton = document.getElementById("reset");

function updateCounter() {
    display.textContent = count;

    if (count > 0) {
        display.style.color = "green";
    } else if (count < 0) {
        display.style.color = "red";
    } else {
        display.style.color = "black";
    }
}

function increment() {
    count++;
    updateCounter();
}

function decrement() {
    count--;
    updateCounter();
}

function reset() {
    count = 0;
    updateCounter();
}

incrementButton.addEventListener("click", increment);
decrementButton.addEventListener("click", decrement);
resetButton.addEventListener("click", reset);

updateCounter();
