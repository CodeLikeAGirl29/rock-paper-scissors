// Initialize scores from localStorage or set defaults
let playerScore = parseInt(localStorage.getItem("playerScore")) || 0;
let computerScore = parseInt(localStorage.getItem("computerScore")) || 0;

// Update the displayed scores
function updateScores() {
  document.getElementById("player-score").textContent = playerScore;
  document.getElementById("computer-score").textContent = computerScore;

  // Save scores to localStorage
  localStorage.setItem("playerScore", playerScore);
  localStorage.setItem("computerScore", computerScore);
}

// Get the computer's random choice
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Play a single round and update the scores
function playRound(playerChoice, computerChoice) {
  const resultDisplay = document.getElementById("game-result");

  if (playerChoice === computerChoice) {
    resultDisplay.textContent = `It's a tie! Both chose ${playerChoice}.`;
    resultDisplay.className = "tie";
    return;
  }

  if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    playerScore++;
    resultDisplay.textContent = `You win! ${playerChoice} beats ${computerChoice}.`;
    resultDisplay.className = "win";
  } else {
    computerScore++;
    resultDisplay.textContent = `You lose! ${computerChoice} beats ${playerChoice}.`;
    resultDisplay.className = "lose";
  }

  updateScores();
}

// Set up the game with event listeners
function setupGame() {
  const choices = ["rock", "paper", "scissors"];

  choices.forEach((choice) => {
    document.getElementById(choice).addEventListener("click", () => {
      const computerChoice = getComputerChoice();
      playRound(choice, computerChoice);
    });
  });
  
  // Display the initial scores
  updateScores();
}

setupGame();
