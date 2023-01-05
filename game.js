let computerSelection;
let playerSelection;
let computerScore = 0;
let playerScore = 0;
let result = 0;

function getComputerChoice() {
  let selection = Math.floor(Math.random() * 3);
  if (selection == 0) {
    return "rock";
  } else if (selection == 1) {
    return "paper";
  } else if (selection >= 2) {
    return "scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  switch (playerSelection) {
    case "rock":
      switch (computerSelection) {
        case "rock":
          return 0;
          break;
        case "paper":
          return 2;
          break;
        case "scissors":
          return 1;
          break;
        default:
          break;
      }
      break;

    case "paper":
      switch (computerSelection) {
        case "rock":
          return 1;
          break;
        case "paper":
          return 0;
          break;
        case "scissors":
          return 2;
          break;
        default:
          break;
      }
      break;

    case "scissors":
      switch (computerSelection) {
        case "rock":
          return 2;
          break;
        case "paper":
          return 1;
          break;
        case "scissors":
          return 0;
          break;
        default:
          break;
      }
      break;
  }
}

function game() {
  computerSelection = getComputerChoice();
  playerSelection = this.id;
  result = playRound(playerSelection, computerSelection);
  if (result == 0) {
    console.log("Draw!");
  } else if (result == 1) {
    console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
    playerScore++;
  } else if (result == 2) {
    console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
    computerScore++;
  }

  if (playerScore == 5) {
    console.log("You Win Overall");
    playerScore = 0;
    computerScore = 0;
  } else if (computerScore == 5) {
    console.log("You Win Overall");
    playerScore = 0;
    computerScore = 0;
  }
}

const button = document.querySelectorAll("button");
button.forEach((sbutton) => sbutton.addEventListener("click", game));
