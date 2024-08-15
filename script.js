let computerScore = 0;
let humanScore = 0;
let rockButton = document.querySelector(".rock-button");
let paperButton = document.querySelector(".paper-button");
let scissorsButton = document.querySelector(".scissors-button");

function detectUserChoice() {
  rockButton.addEventListener("click", (e) => {
    playGame("Rock");
  });
  paperButton.addEventListener("click", (e) => {
    playGame("Paper");
  });
  scissorsButton.addEventListener("click", (e) => {
    playGame("Scissors");
  });  
}
detectUserChoice();

function playGame(userChoice) {
  let computerChoice = getComputerChoice();
  let humanChoice = userChoice;
  playRound(computerChoice, humanChoice);
  console.log(computerChoice);    
  console.log(humanChoice);
  if (computerScore > humanScore) {
    alert(`Computer is currently winning ${computerScore} - ${humanScore}`);
  } else if (humanScore > computerScore) {
    alert(`Human is currently winning ${humanScore} - ${computerScore}`);
  } else {
    alert(`Computer and Human are currently tied ${humanScore} - ${computerScore}`);
  }
}

//The computer selects either Rock, Paper, or Scissors.
function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);

  if (randomNumber == 0) {
    return "Rock";
  } else if (randomNumber == 1) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

//Plays a round of the game and checks who wins
function playRound(computerSelection, humanSelection) {
  if (computerSelection === humanSelection) {
    ++computerScore;
    ++humanScore;
    alert(`Both Computer and Human chose ${computerSelection}. Tie!`);
    console.log("Computer score: " + computerScore);
    console.log("Human score: " + humanScore);
  } else if (computerSelection === "Rock" && humanSelection === "Scissors") {
    ++computerScore;
    alert("Computer won this round with Rock against Scissors!");
    console.log("Computer score: " + computerScore);
    console.log("Human score: " + humanScore);
  } else if (computerSelection === "Scissors" && humanSelection === "Paper") {
    ++computerScore;
    alert("Computer won this round with Scissors against Paper!");
    console.log("Computer score: " + computerScore);
    console.log("Human score: " + humanScore);
  } else if (computerSelection === "Scissors" && humanSelection === "Rock") {
    ++humanScore;
    alert("Human won this round with Rock against Scissors!");
    console.log("Computer score: " + computerScore);
    console.log("Human score: " + humanScore);
  } else if (computerSelection === "Paper" && humanSelection === "Scissors") {
    ++humanScore;
    alert("Human won this round with Scissors against Paper!");
    console.log("Computer score: " + computerScore);
    console.log("Human score: " + humanScore);
  } else if (computerSelection === "Paper" && humanSelection === "Rock") {
    ++computerScore;
    alert("Computer won this round with Paper against Rock!");
    console.log("Computer score: " + computerScore);
    console.log("Human score: " + humanScore);
  } else if (computerSelection === "Rock" && humanSelection === "Paper") {
    ++humanScore;
    alert("Human won this round with Paper against Rock!");
    console.log("Computer score: " + computerScore);
    console.log("Human score: " + humanScore);
  }
}

//Plays the game for 5 rounds and tracks the scores.
function gameEnd() {
  if (computerScore > humanScore) {
    alert(`Computer wins the game ${computerScore} - ${humanScore} !`);
  } else if (humanScore > computerScore) {
    alert(`Human wins the game ${humanScore} - ${computerScore} !`);
  } else {
    alert(`Computer and Human have tied ${computerScore} - ${humanScore} !`);
  }
}



//The user selects either Rock, Paper, or Scissors.
// function getHumanChoice() {
//   let choice = prompt("Rock, Paper, or Scissors?");
//   choice = choice.toLowerCase();
    
//   if (choice === "rock") {
//     return "Rock";
//   } else if (choice === "paper") {
//     return "Paper";
//   } else if (choice === "scissors") {
//     return "Scissors";
//   } else {
//     alert("Invalid choice entered, refresh to start again.");
//   }

//   new stuff
  
//   while(humanIsChoosing) {
//     rockButton.addEventListener("click", (e) => {
//       humanIsChoosing = false;
//       return "Rock";
//     });
//     paperButton.addEventListener("click", (e) => {
//       humanIsChoosing = false;
//       return "Paper";
//     });
//     scissorsButton.addEventListener("click", (e) => {
//       humanIsChoosing = false;
//       return "Scissors";
//     });
//   }
// }




