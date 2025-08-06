console.log("hello world!");

// Rock paper scissors game

// Get the computer choice:
// The computer choice is a random selection between the 3 options
// get a random number between 1 and 3
// translate that to a string of rock paper or scissors
// We could us an enum for that or just a switch or if else statement
// print the output to the log
// Remember do all this inside a function

// Score variables
// keep track of computer's and human score
var computerScore = 0;
var humanScore = 0;
var rounds = 0;

playRound();

// Logic to play a round
// Create a function to play the round
// The round should process the human and computer choice
// Compare both and define who wins based on basic rock paper scissors rules
// Add the scores to whoever won
// output the outcome of the game and the current scores

function playRound() {
  var computerChoice = getComputerChoice().toLowerCase();
  var humanChoice = getHumanChoice().toLowerCase();
  
  console.log("Computer's choose: " + computerChoice);
  console.log("Human choose: " + humanChoice);
  
  // human is the master (who desides who wins)
  // these are the human win conditions if none meet, the computer wins
  // rock beats scissors
  // scissors beats paper
  // paper beats rock
  if ( (humanChoice == "rock" && computerChoice == "scissors") || 
    (humanChoice == "scissors" && computerChoice == "paper" ) ||
    (humanChoice == "paper" && computerChoice == "rock")) {
    // win logic
    console.log("You won!");
    humanScore++;
    logScores();
  } else if ( humanChoice === computerChoice) {
    // Tie condition
    console.log("It's a tie");
    logScores();
  } else {
    // loose logic
    console.log("You lost :(");
    computerScore++;
    logScores();
  }
  console.log("---------------------")
  rounds++;
  if (rounds === 5) {
    endGame();
  } else {
    playRound();
  }
}

function endGame() {
  if ( humanScore > computerScore) {
    console.log("You won the game!!!!");
  } else if ( humanScore < computerScore) {
    console.log("You lost the game X.X");
  } else {
    console.log("The game was tied -.-");
  }

  console.log("Final score");
  logScores();
}

function logScores() {
    console.log(`Your score: ${humanScore}`);
    console.log(`Computer score: ${computerScore}`);
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

  return output;
}

function getHumanChoice(message) {
  var choice = "";
  if (message) {
    choice = prompt(message, "Rock")
  } else {
    choice = prompt("Select between 'Rock' 'Paper' or 'Scissors'", "Rock");
  }

  choice = choice.toLowerCase();

  if (choice == "rock" || choice == "paper" || choice == "scissors") {
    return choice;
  } else {
    // if the selection is wrong it will prompt you again with updated message
    return getHumanChoice("Bad input - Select between 'Rock' 'Paper' or 'Scissors'");
  }
}