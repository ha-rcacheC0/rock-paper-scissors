const choices = ["👊🏻", "🫳🏻", "✌🏻"];

const playerDisplay = document.getElementById("player-display");
const computerDisplay = document.getElementById("computer-display");
const resultDisplay = document.getElementById("result-display");
const playerScoreDisplay = document.getElementById("player-score-display");
const computerScoreDisplay = document.getElementById("computer-score-display");

let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  let result = "";
  if (playerChoice === computerChoice) {
    result = "IT'S A TIE.";
  } else {
    switch (playerChoice) {
      case "👊🏻":
        result = computerChoice === "✌🏻" ? "YOU WIN!" : "COMPUTER WINS.";
        break;
      case "🫳🏻":
        result = computerChoice === "👊🏻" ? "YOU WIN!" : "COMPUTER WINS.";
        break;
      case "✌🏻":
        result = computerChoice === "🫳🏻" ? "YOU WIN!" : "COMPUTER WINS.";
        break;
    }
  }
  playerDisplay.textContent = `Player: ${playerChoice}`;
  computerDisplay.textContent = `Computer: ${computerChoice}`;
  resultDisplay.textContent = `${result}`;

  resultDisplay.classList.remove("green-text", "red-text", "radial-text");

  switch (result) {
    case "YOU WIN!":
      resultDisplay.classList.add("green-text");
      playerScore++;
      playerScoreDisplay.textContent = playerScore;
      break;
    case "COMPUTER WINS.":
      resultDisplay.classList.add("red-text");
      computerScore++;
      computerScoreDisplay.textContent = computerScore;
      break;
    case "IT'S A TIE.":
      resultDisplay.classList.add("radial-text");
      break;
  }
}
