// Rock paper scissors game

// Getting elements
const rockBtn = document.querySelector("#rock-btn");
const paperBtn = document.querySelector("#paper-btn");
const scissorsBtn = document.querySelector("#scissors-btn");

const scoreContainer = document.querySelector(".score-container");
const humanScoreDisplay = document.querySelector("#human-score");
const computerScoreDisplay = document.querySelector("#computer-score");

// Win elements
const finalResultDisplay = document.createElement("h3");
const playAgainBtn = document.createElement("button");
playAgainBtn.textContent = "Play Again!";
playAgainBtn.addEventListener("click", () => {
  disableSelections(false);
  humanScore = 0;
  computerScore = 0;
  updateScores();
  scoreContainer.removeChild(playAgainBtn);
  scoreContainer.removeChild(finalResultDisplay);
  outcomeContainer.removeChild(outcomeText);
})

// outcome Elements
const outcomeContainer = document.querySelector(".outcome-container");
const outcomeText = document.createElement("p");

rockBtn.addEventListener("click",
  () => playRound("rock", getComputerChoice()));
paperBtn.addEventListener("click", 
  () => playRound("paper", getComputerChoice()));
scissorsBtn.addEventListener("click",
  () => playRound("scissors", getComputerChoice()));

// Score variables
// keep track of computer's and human score
var computerScore = 0;
var humanScore = 0;
var rounds = 0;

function playRound(humanChoice, computerChoice) {
  // human is the master (who desides who wins)
  // these are the human win conditions if none meet, the computer wins
  // rock beats scissors
  // scissors beats paper
  // paper beats rock
  if ( (humanChoice == "rock" && computerChoice == "scissors") || 
    (humanChoice == "scissors" && computerChoice == "paper" ) ||
    (humanChoice == "paper" && computerChoice == "rock")) {
    // win logic
    humanScore++;
  } else if ( humanChoice === computerChoice) {
    // Tie condition
  } else {
    // loose logic
    computerScore++;
  }
  rounds++;

  // if one gets to score 5, that's the winner and game ends
  updateScores();

  // outcome print
  outcomeText.textContent = `Player ${humanChoice} vs. Computer ${computerChoice}`;
  if (!outcomeContainer.hasChildNodes()) {
    outcomeContainer.appendChild(outcomeText);
  }
  if (humanScore === 5 || computerScore === 5) {
    endGame();
  }
}

function endGame() {
  let outcome = "";
  if ( humanScore > computerScore) {
    outcome = "You won the game!!!!";
  } else {
    outcome = "You lost the game X.X";
  }
  
  finalResultDisplay.textContent = outcome;
  scoreContainer.appendChild(finalResultDisplay);
  scoreContainer.appendChild(playAgainBtn);

  disableSelections(true);
}

function disableSelections(disabled) {
  rockBtn.disabled = disabled;
  paperBtn.disabled = disabled;
  scissorsBtn.disabled = disabled;
}


function getComputerChoice() {
  var randomNumber = Math.ceil(Math.random() * 3);

  let output = "";
  switch (randomNumber) {
    case 1:
      output = "Rock";
      break;
    case 2:
      output = "Scissors";
      break;
    case 3:
      output = "Paper";
      break;
    default:
      throw new Error("Invalid random number created");
  }

  return output.toLowerCase();
}

// Function to display stats of the current game
function updateScores() {
  humanScoreDisplay.textContent = `Human Score: ${humanScore}`;
  computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;
}