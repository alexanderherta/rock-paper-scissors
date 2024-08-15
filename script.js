let computerScore = 0;
let humanScore = 0;
let isThereAWinner = false;

//Plays the game for 5 rounds and tracks the scores.
function playGame() {
  while(!isThereAWinner) {
    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice();
    playRound(computerChoice, humanChoice);
      
    if (computerScore > humanScore) {
      alert(`Computer is currently winning ${computerScore} - ${humanScore}`);
    } else if (humanScore > computerScore) {
      alert(`Human is currently winning ${humanScore} - ${computerScore}`);
    } else {
      alert(`Computer and Human are currently tied ${humanScore} - ${computerScore}`);
    }

    if(computerScore == 5 || humanScore == 5) {
      isThereAWinner = true;
    }
  }


  if (computerScore > humanScore) {
    alert(`Computer wins the game ${computerScore} - ${humanScore} !`);
  } else if (humanScore > computerScore) {
    alert(`Human wins the game ${humanScore} - ${computerScore} !`);
  } else {
    alert(`Computer and Human have tied ${computerScore} - ${humanScore} !`);
  }
}
playGame();

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

//Plays a round of the game and checks who wins
function playRound(computerSelection, humanSelection) {
  if (computerSelection === humanSelection) {
    computerScore = ++computerScore;
    humanScore = ++humanScore;
    alert(`Both Computer and Human chose ${computerSelection}. Tie!`);
    console.log("Computer score: " + computerScore);
    console.log("Human score: " + humanScore);
  } else if (computerSelection === "Rock" && humanSelection === "Scissors") {
    computerScore = ++computerScore;
    alert("Computer won this round with Rock against Scissors!");
    console.log("Computer score: " + computerScore);
    console.log("Human score: " + humanScore);
  } else if (computerSelection === "Scissors" && humanSelection === "Rock") {
    humanScore = ++humanScore;
    alert("Human won this round with Rock against Scissors!");
    console.log("Computer score: " + computerScore);
    console.log("Human score: " + humanScore);
  } else if (computerSelection === "Scissors" && humanSelection === "Paper") {
    computerScore = ++computerScore;
    alert("Computer won this round with Scissors against Paper!");
    console.log("Computer score: " + computerScore);
    console.log("Human score: " + humanScore);
  } else if (computerSelection === "Paper" && humanSelection === "Scissors") {
    humanScore = ++humanScore;
    alert("Human won this round with Scissors against Paper!");
    console.log("Computer score: " + computerScore);
    console.log("Human score: " + humanScore);
  } else if (computerSelection === "Paper" && humanSelection === "Rock") {
    computerScore = ++computerScore;
    alert("Computer won this round with Paper against Rock!");
    console.log("Computer score: " + computerScore);
    console.log("Human score: " + humanScore);
  } else if (computerSelection === "Rock" && humanSelection === "Paper") {
    humanScore = ++humanScore;
    alert("Human won this round with Paper against Rock!");
    console.log("Computer score: " + computerScore);
    console.log("Human score: " + humanScore);
  }
}



