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