// Get DOM elements
const gameArea = document.getElementById('gameArea');
const startButton = document.getElementById('startGame');
const scoreDisplay = document.getElementById('score');
const levelDisplay = document.getElementById('level');
const timerDisplay = document.getElementById('time');
const shootSound = document.getElementById('shootSound');
const levelUpSound = document.getElementById('levelUpSound');

// Initialize variables
let score = 0;
let level = 1;
let timeLeft = 30;
let targetSpeed = 3000; // Speed in milliseconds
let gameInterval;
let timerInterval;

// Function: Create a target
function createTarget() {
    const target = document.createElement('div');
    target.classList.add('target');

    // Set random position
    const xPos = Math.random() * (gameArea.offsetWidth - 50);
    target.style.left = `${xPos}px`;

    // Set animation duration based on target speed
    target.style.animationDuration = `${targetSpeed / 1000}s`;

    // Handle target click (score + sound)
    target.addEventListener('click', () => {
        shootSound.play();
        score++;
        updateScore();
        target.remove();

        // Check for level up
        if (score % 10 === 0) {
            levelUp();
        }
    });

    // Remove target after animation ends
    target.addEventListener('animationend', () => {
        target.remove();
    });

    // Add target to game area
    gameArea.appendChild(target);
}

// Function: Update score display
function updateScore() {
    scoreDisplay.textContent = score;
}

// Function: Start the timer
function startTimer() {
    timeLeft = 30; // Reset timer
    timerDisplay.textContent = timeLeft;
    clearInterval(timerInterval);

    timerInterval = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = timeLeft;

        // End game if timer reaches zero
        if (timeLeft <= 0) {
            endGame();
        }
    }, 1000);
}

// Function: Level up
function levelUp() {
    level++;
    levelDisplay.textContent = level;
    levelUpSound.play();

    // Increase difficulty by reducing target speed
    targetSpeed = Math.max(1000, targetSpeed - 500); // Minimum speed: 1s
    clearInterval(gameInterval);
    gameInterval = setInterval(createTarget, targetSpeed);
}

// Function: Start the game
function startGame() {
    // Reset variables
    score = 0;
    level = 1;
    targetSpeed = 3000;

    // Update UI
    updateScore();
    levelDisplay.textContent = level;

    // Clear existing intervals
    clearInterval(gameInterval);
    clearInterval(timerInterval);

    // Start game logic
    gameInterval = setInterval(createTarget, targetSpeed);
    startTimer();
}

// Function: End the game
function endGame() {
    clearInterval(gameInterval);
    clearInterval(timerInterval);
    alert(`Game Over! Your score is: ${score}`);
}

// Event listener: Start game
startButton.addEventListener('click', startGame);
