let computerScore = 0;
let humanScore = 0;

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
let humanChoice = getHumanChoice();
console.log(humanChoice);

function playRound(computerSelection, humanSelection) {
  if (computerSelection === humanSelection) {
    computerScore = ++computerScore;
    humanScore = ++humanScore;
    console.log("Computer score: " + computerScore);
    console.log("Human score: " + humanScore);
  } else if (computerSelection === "Rock" && humanSelection === "Scissors") {
    computerScore = ++computerScore;
    console.log("Computer score: " + computerScore);
    console.log("Human score: " + humanScore);
  } else if (computerSelection === "Scissors" && humanSelection === "Rock") {
    humanScore = ++humanScore;
    console.log("Computer score: " + computerScore);
    console.log("Human score: " + humanScore);
  } else if (computerSelection === "Scissors" && humanSelection === "Paper") {
    computerScore = ++computerScore;
    console.log("Computer score: " + computerScore);
    console.log("Human score: " + humanScore);
  } else if (computerSelection === "Paper" && humanSelection === "Scissors") {
    humanScore = ++humanScore;
    console.log("Computer score: " + computerScore);
    console.log("Human score: " + humanScore);
  } else if (computerSelection === "Paper" && humanSelection === "Rock") {
    computerScore = ++computerScore;
    console.log("Computer score: " + computerScore);
    console.log("Human score: " + humanScore);
  } else if (computerSelection === "Rock" && humanSelection === "Paper") {
    humanScore = ++humanScore;
    console.log("Computer score: " + computerScore);
    console.log("Human score: " + humanScore);
  }
}

playRound(computerChoice, humanChoice);
