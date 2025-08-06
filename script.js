console.log("hello world!");

// Rock paper scissors game

// Get the computer choice:
// The computer choice is a random selection between the 3 options
// get a random number between 1 and 3
// translate that to a string of rock paper or scissors
// We could us an enum for that or just a switch or if else statement
// print the output to the log
// Remember do all this inside a function

var computerChoice = getComputerChoice().toLowerCase();
var humanChoice = getHumanChoice().toLowerCase();

console.log("Computer's choose: " + computerChoice);
console.log("Human choose: " + humanChoice);

function getComputerChoice() {
  var randomNumber = Math.ceil(Math.random() * 3);
  console.log("Computer number: " + randomNumber);

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
    return getHumanChoice("Bad input - Select between 'Rock' 'Paper' or 'Scissors'");
  }
}