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
  let playerSelect = playerSelection.toLowerCase();
  switch (playerSelect) {
    case "rock":
      switch (computerSelection) {
        case "rock":
          return "Draw!";
          break;
        case "paper":
          return "You Lose! Paper beats Rock";
          break;
        case "scissors":
          return "You Win! Rock beats Scissors";
          break;
        default:
          break;
      }
      break;

    case "paper":
      switch (computerSelection) {
        case "rock":
          return "You Win! Paper beats Rock";
          break;
        case "paper":
          return "Draw!";
          break;
        case "scissors":
          return "You Lose! Scissors beat Paper";
          break;
        default:
          break;
      }
      break;

    case "scissors":
      switch (computerSelection) {
        case "rock":
          return "You Lose! Rock beats Scissors";
          break;
        case "paper":
          return "You Win! Scissors beat Paper";
          break;
        case "scissors":
          return "Draw!";
          break;
        default:
          break;
      }
      break;
  }
}

const computerSelection = getComputerChoice();
console.log(computerSelection);
const playerSelection = "rock";
console.log(playerSelection);
console.log(playRound(playerSelection, computerSelection));
