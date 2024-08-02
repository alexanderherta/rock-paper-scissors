//The computer selects either Rock, Paper, or Scissors.
function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 10);

  if (randomNumber <= 2) {
    return "Rock";
  } else if (randomNumber <= 5 && randomNumber > 2) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

let computerChoice = getComputerChoice();
console.log(computerChoice);

//The user selects either Rock, Paper, or Scissors.
function getHumanChoice() {
  let choice = prompt("Rock, Paper, or Scissors?");
  choice = choice.toLowerCase();
    
  if (choice === "rock") {
    return "Rock";
  } else if (choice === "paper") {
    return "Paper";
  } else if (choice === "scissors") {
    return "Scissors";
  } else {
    alert("Invalid choice entered, refresh to start again.")
  }
}

console.log(getHumanChoice());

