let computerScore = 0;
let humanScore = 0;
let computerScoreCounter = document.querySelector("#computer-score-counter");
let humanScoreCounter = document.querySelector("#human-score-counter");
let scoreDiv1 = document.querySelector(".score-div1");
let scoreDiv2 = document.querySelector(".score-div2");
let gameInfo = document.querySelector("#game-info");
let chooseText = document.querySelector("#choose-text");
let rockButton = document.querySelector(".rock-button");
let paperButton = document.querySelector(".paper-button");
let scissorsButton = document.querySelector(".scissors-button");
let buttons = document.querySelector(".buttons");

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

//Plays through the game until a player gets a score of 5
function playGame(userChoice) {
  let computerChoice = getComputerChoice();
  let humanChoice = userChoice;
  playRound(computerChoice, humanChoice);
  if (humanScore == 5 || computerScore == 5) {
    gameEnd();
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

//Plays a round of the game and increments scores
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

//Ends the game and displays score of both players
function gameEnd() {
  if (computerScore > humanScore) {
    gameInfo.innerText = `Computer wins the game ${computerScore} - ${humanScore}!`;
  } else if (humanScore > computerScore) {
    gameInfo.innerText = `Human wins the game ${humanScore} - ${computerScore}!`;
  } else {
    gameInfo.innerText = `Computer and Human have tied ${computerScore} - ${humanScore}!`;
  }
  chooseText.innerText = "";
  buttons.remove();
  scoreDiv2.remove();
  scoreDiv1.innerText = "Refresh page to play again!";
}



