let computerSelection;
let playerSelection;
let computerScore = 0;
let playerScore = 0;
let result = 0;

//Gets random choice for computer
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

//Plays a round of rock paper scissors, checking who wins and returning accordingly
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

//Main game function.
function game() {
  computerSelection = getComputerChoice();

  //Get's player selection from button press.
  playerSelection = this.id;
  result = playRound(playerSelection, computerSelection);
  if (result == 0) {
    div.textContent = `Draw! Player Score : ${playerScore} Computer Score: ${computerScore}`;
  } else if (result == 1) {
    playerScore++;
    div.textContent = `${playerSelection} beats ${computerSelection} Player Score : ${playerScore} Computer Score: ${computerScore}`;
  } else if (result == 2) {
    computerScore++;
    div.textContent = `${computerSelection} beats ${playerSelection} Player Score : ${playerScore} Computer Score: ${computerScore}`;
  }

  //Game ends when either player gets 5 points.
  if (playerScore == 5) {
    div.textContent = `You Win! Press any button to start again`;
    playerScore = 0;
    computerScore = 0;
  } else if (computerScore == 5) {
    div.textContent = `You Lose! Press any button to start again`;
    playerScore = 0;
    computerScore = 0;
  }
}

const button = document.querySelectorAll("button");
const div = document.querySelector(".result");
button.forEach((sbutton) => sbutton.addEventListener("click", game));
