let computerScore = 0;
let humanScore = 0;
let computerScoreCounter = document.querySelector("#computer-score-counter");
let humanScoreCounter = document.querySelector("#human-score-counter");
let gameInfo = document.querySelector("#game-info");
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
    gameInfo.innerText = `Both Computer and Human chose ${computerSelection}. Tie!`;
    computerScoreCounter.innerText = computerScore;
    humanScoreCounter.innerText = humanScore;
  } else if (computerSelection === "Rock" && humanSelection === "Scissors") {
    ++computerScore;
    gameInfo.innerText = `Computer won this round with Rock against Scissors!`;
    computerScoreCounter.innerText = computerScore;
    humanScoreCounter.innerText = humanScore;
  } else if (computerSelection === "Scissors" && humanSelection === "Paper") {
    ++computerScore;
    gameInfo.innerText = `Computer won this round with Scissors against Paper!`;
    computerScoreCounter.innerText = computerScore;
    humanScoreCounter.innerText = humanScore;
  } else if (computerSelection === "Scissors" && humanSelection === "Rock") {
    ++humanScore;
    gameInfo.innerText = `Human won this round with Rock against Scissors!`;
    computerScoreCounter.innerText = computerScore;
    humanScoreCounter.innerText = humanScore;
  } else if (computerSelection === "Paper" && humanSelection === "Scissors") {
    ++humanScore;
    gameInfo.innerText = `Human won this round with Scissors against Paper!`;
    computerScoreCounter.innerText = computerScore;
    humanScoreCounter.innerText = humanScore;
  } else if (computerSelection === "Paper" && humanSelection === "Rock") {
    ++computerScore;
    gameInfo.innerText = `Computer won this round with Paper against Rock!`;
    computerScoreCounter.innerText = computerScore;
    humanScoreCounter.innerText = humanScore;
  } else if (computerSelection === "Rock" && humanSelection === "Paper") {
    ++humanScore;
    gameInfo.innerText = `Human won this round with Paper against Rock!`;
    computerScoreCounter.innerText = computerScore;
    humanScoreCounter.innerText = humanScore;
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




