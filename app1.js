let playerScore = 0;
let computerScore = 0;
let roundStatus = "";
let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");
let btns = document.querySelectorAll("button");
let playerChoice = "";
let winner = "";

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
  console.log(`u chose ${player}`);
  console.log(`Computer chose ${computer}`);
  //Comparison and result of the round
  if (
    player == "rock" ||
    player == "paper" ||
    player == "scissors" ||
    player == null
  ) {
    if (player == computer) {
      roundStatus = "Draw";
    } else if (
      (player == "rock" && computer == "scissors") ||
      (player == "paper" && computer == "rock") ||
      (player == "scissors" && computer == "paper")
    ) {
      playerScore++;
      roundStatus = "Congrats!, U won!🎉";
    } else {
      computerScore++;
      roundStatus = "Opps, u lost!😬";
    }
  }
}

function playTheGame() {
  if (
    playerChoice == "rock" ||
    playerChoice == "paper" ||
    playerChoice == "scissors"
  ) {
    playARound(playerChoice, computerChoice());
    console.log(`Player score: ${playerScore}`);
    console.log(`Computer score: ${computerScore}`);
    console.log(`${roundStatus}`);
  }
}
btns.forEach((btn) =>
  btn.addEventListener("click", () => {
    if (playerScore < 5 && computerScore < 5) {
      playTheGame(playerChoice, computerChoice);
    } else if (playerScore === 5) {
      console.log("U Won!!");
    } else {
      console.log("U Lose");
    }
  })
);
