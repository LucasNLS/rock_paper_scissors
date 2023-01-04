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
  let computerSelection;
  let playerSelection;
  let computerScore = 0;
  let playerScore = 0;
  let result = 0;
  for (let i = 0; i < 5; i++) {
    computerSelection = getComputerChoice();
    playerSelection = prompt("Enter your choice...");
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
  }

  if (computerScore > playerScore) {
    console.log("You Lose!");
  } else if (computerScore < playerScore) {
    console.log("You Win!");
  } else {
    console.log("Draw");
  }
}

game();
