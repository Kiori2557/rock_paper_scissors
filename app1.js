let playerScore = 0;
let computerScore = 0;
let playerChoice = "";
let winner = "";

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const btns = document.querySelectorAll("button");
const result = document.querySelector("#result");
const roundStatus = document.querySelector("#roundStatus");
const playerPick = document.querySelector("#playerPick");
const computerPick = document.querySelector("#computerPick");
const score = document.querySelector("#score");

//function to randomly output rock,paper,scissors array
function computerChoice() {
  let availableMoves = ["rock", "paper", "scissors"];
  return availableMoves[Math.floor(Math.random() * 3)];
}

rock.addEventListener("click", (e) => {
  playerChoice = "rock";
});
paper.addEventListener("click", (e) => {
  playerChoice = "paper";
});
scissors.addEventListener("click", (e) => {
  playerChoice = "scissors";
});

//function to play a round
function playARound(player, computer) {
  playerPick.textContent = `You chose - ${player}`;
  computerPick.textContent = `Computer chose - ${computer}`;

  //Comparison and result of the round
  if (player == computer) {
    roundStatus.textContent = "Draw";
  } else if (
    (player == "rock" && computer == "scissors") ||
    (player == "paper" && computer == "rock") ||
    (player == "scissors" && computer == "paper")
  ) {
    playerScore++;
    roundStatus.textContent = "Congrats!, U won!🎉";
  } else {
    computerScore++;
    roundStatus.textContent = "Opps, u lost!😬";
  }
}

function playTheGame() {
  if (
    playerChoice == "rock" ||
    playerChoice == "paper" ||
    playerChoice == "scissors"
  ) {
    playARound(playerChoice, computerChoice());
    score.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;
  }
}

btns.forEach((btn) =>
  btn.addEventListener("click", () => {
    if (playerScore < 5 && computerScore < 5) {
      playTheGame(playerChoice, computerChoice);
      if (playerScore == 5) {
        result.textContent = "u won";
        btns.forEach((btn) => btn.setAttribute("hidden", ""));
      } else if (computerScore == 5) {
        result.textContent = "u lose";
        btns.forEach((btn) => btn.setAttribute("hidden", ""));
      }
    }
  })
);
