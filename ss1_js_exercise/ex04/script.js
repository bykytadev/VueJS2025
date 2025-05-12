let attempts = 3;
const randomNumber = Math.floor(Math.random() * 10) + 1;

function guessNumber() {
    const resultElement = document.getElementById("guessResult");

    if (attempts <= 0) {
        resultElement.innerText = `Hết lượt đoán, số đúng là: ${randomNumber}`;
        return;
    }

    const userGuess = parseInt(prompt("Hãy đoán một số từ 1 đến 10"));

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
        resultElement.innerText = "Số đoán phải từ 1 đến 10.";
        return;
    }

    attempts--;

    if (userGuess === randomNumber) {
        resultElement.innerText = "Chúc mừng, bạn đã đoán đúng!";
        attempts = 0; // Kết thúc trò chơi
    } else if (attempts > 0) {
        resultElement.innerText = `Sai! Bạn còn ${attempts} lượt đoán.`;
    } else {
        resultElement.innerText = `Hết lượt đoán, số đúng là: ${randomNumber}`;
    }
}
