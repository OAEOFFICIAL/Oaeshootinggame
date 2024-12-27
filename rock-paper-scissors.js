let computerMove = '';
let userScore = 0;
let computerScore = 0;
let ties = 0;

function randomComputerMove() {
    const RN = Math.random();
    if (RN > 0 && RN < 1 / 3) {
        computerMove = "Rock";
    } else if (RN >= 1 / 3 && RN < 2 / 3) {
        computerMove = "Paper";
    } else if (RN > 2 / 3) {
        computerMove = "Scissors";
    }
}

function updateScore() {
    document.getElementById('score').textContent = `Wins: ${userScore} | Losses: ${computerScore} | Ties: ${ties}`;
}

function Rock() {
    const whatIPicked = "Rock";
    if (computerMove === "Rock") {
        ties++;
        document.getElementById('result').textContent = 'Computer chose Rock and you chose Rock: It\'s a Tie! 😁';
    } else if (computerMove === "Paper") {
        computerScore++;
        document.getElementById('result').textContent = 'Computer chose Paper and you chose Rock: You Lose! 🥺';
    } else if (computerMove === "Scissors") {
        userScore++;
        document.getElementById('result').textContent = 'Computer chose Scissors and you chose Rock: You Win! ☺️';
    }
    updateScore();
    randomComputerMove();
}

function Paper() {
    const whatIPicked = "Paper";
    if (computerMove === "Rock") {
        userScore++;
        document.getElementById('result').textContent = 'Computer chose Rock and you chose Paper: You Win! 🤭';
    } else if (computerMove === "Paper") {
        ties++;
        document.getElementById('result').textContent = 'Computer chose Paper and you chose Paper: It\'s a Tie! 😁';
    } else if (computerMove === "Scissors") {
        computerScore++;
        document.getElementById('result').textContent = 'Computer chose Scissors and you chose Paper: You Lose! ☹️';
    }
    updateScore();
    randomComputerMove();
}

function Scissors() {
    const whatIPicked = "Scissors";
    if (computerMove === "Rock") {
        computerScore++;
        document.getElementById('result').textContent = 'Computer chose Rock and you chose Scissors: You Lose! 😭';
    } else if (computerMove === "Paper") {
        userScore++;
        document.getElementById('result').textContent = 'Computer chose Paper and you chose Scissors: You Win! ☺️';
    } else if (computerMove === "Scissors") {
        ties++;
        document.getElementById('result').textContent = 'Computer chose Scissors and you chose Scissors: It\'s a Tie! 😁';
    }
    updateScore();
    randomComputerMove();
}

function startGame() {
    const userName = document.getElementById('userName').value.trim();
    if (userName === '') {
        alert('Please enter your name to start the game!');
        return;
    }
    document.getElementById('greeting').textContent = `Welcome, ${userName}! Good luck!`;
    document.querySelector('.name-container').style.display = 'none';
    document.getElementById('gameButtons').style.display = 'block';
    randomComputerMove();
}
