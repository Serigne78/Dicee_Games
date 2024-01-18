var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

document.querySelector(".img1").setAttribute("src", "./images/dice" + randomNumber1 + ".png");
document.querySelector(".img2").setAttribute("src", "./images/dice" + randomNumber2 + ".png");

var resultMessage = "";

if (randomNumber1 > randomNumber2) {
    resultMessage = "Player 1 Win";
} else if (randomNumber1 < randomNumber2) {
    resultMessage = "Player 2 Win";
} else {
    resultMessage = "Equal";
}

document.querySelector("h1").textContent = resultMessage;
