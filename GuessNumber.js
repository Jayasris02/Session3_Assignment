const targetNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    const userGuess = document.getElementById('guess-input').value;
    const message = document.getElementById('message');
    attempts++;

    if (!userGuess) {
        message.innerText = 'Please enter a number!';
        return;
    }

    if (userGuess < targetNumber) {
        message.innerText = `Your guess is too low. Try again! Attempts: ${attempts}`;
    } else if (userGuess > targetNumber) {
        message.innerText = `Your guess is too high. Try again! Attempts: ${attempts}`;
    } else {
        message.innerText = `Congratulations! You guessed the correct number ${targetNumber} in ${attempts} attempts.`;
    }
}
