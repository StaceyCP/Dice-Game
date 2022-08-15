var randomNumber1 = Math.ceil(Math.random() * 6);
var randomNumber2 = Math.ceil(Math.random() * 6);
const player1dice = document.querySelector(".img1");
const player2dice = document.querySelector(".img2");
const winnerTitle = document.getElementsByTagName("h1")[0];

    if (randomNumber1 === 1) {
        player1dice.setAttribute("src", "images/dice1.png");
    } else if (randomNumber1 === 2) {
        player1dice.setAttribute("src", "images/dice2.png");
    } else if (randomNumber1 === 3) {
        player1dice.setAttribute("src", "images/dice3.png");
    } else if (randomNumber1 === 4) {
        player1dice.setAttribute("src", "images/dice4.png");
    } else if (randomNumber1 === 5) {
        player1dice.setAttribute("src", "images/dice5.png");
    } else {
        player1dice.setAttribute("src", "images/dice6.png");
    }

    if (randomNumber2 === 1) {
        player2dice.setAttribute("src", "images/dice1.png");
    } else if (randomNumber2 === 2) {
        player2dice.setAttribute("src", "images/dice2.png");
    } else if (randomNumber2 === 3) {
        player2dice.setAttribute("src", "images/dice3.png");
    } else if (randomNumber2 === 4) {
        player2dice.setAttribute("src", "images/dice4.png");
    } else if (randomNumber2 === 5) {
        player2dice.setAttribute("src", "images/dice5.png");
    } else {
        player2dice.setAttribute("src", "images/dice6.png");
    }

    if (randomNumber1 > randomNumber2) {
        winnerTitle.textContent = "🏆 Player 1 wins!";
    } else if (randomNumber1 < randomNumber2) {
        winnerTitle.textContent = "Player 2 wins! 🏆"
    } else {
        winnerTitle.textContent = "It's a Draw!"
    }