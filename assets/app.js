// Initialize scores
let playerScore = 0;
let computerScore = 0;

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

// Update the displayed scores
function updateScores() {
  document.getElementById("player-score").textContent = playerScore;
  document.getElementById("computer-score").textContent = computerScore;
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
}

setupGame();
