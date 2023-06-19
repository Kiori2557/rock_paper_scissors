//function to randomly output rock,paper,scissors array
function computerChoice() {
  let moves = ["rock", "paper", "scissors"];
  return moves[Math.floor(Math.random() * 3)];
}

let score = 0;
let roundScore = 0;
let playerChoice = "";
function startTheRound(playerChoice, computerMoves) {
  console.log(`Computer chose ${computerMoves}`);
  console.log(`You chose ${playerChoice}`);
  roundScore = 0;
  let gameStatus = "";
  //Comparison and result of the round
  if (
    playerChoice == "rock" ||
    playerChoice == "paper" ||
    playerChoice == "scissors" ||
    playerChoice == null
  ) {
    if (playerChoice == "rock") {
      switch (computerMoves) {
        case "rock":
          gameStatus = "Draw";
          break;
        case "paper":
          gameStatus = "Opps, u lose";
          roundScore -= 1;
          break;
        case "scissors":
          gameStatus = "Congrats!!, U won!";
          roundScore += 1;
          break;
      }
    } else if (playerChoice == "paper") {
      switch (computerMoves) {
        case "rock":
          gameStatus = "Congrats!!, U won!";
          roundScore += 1;
          break;
        case "paper":
          gameStatus = "Draw";
          break;
        case "scissors":
          gameStatus = "Opps, u lose";
          roundScore -= 1;
          break;
      }
    } else if (playerChoice == "scissors") {
      switch (computerMoves) {
        case "rock":
          gameStatus = "Opps, u lose";
          roundScore -= 1;
          break;
        case "paper":
          gameStatus = "Congrats!!, U won!";
          score += 1;
          break;
        case "scissors":
          roundScore = "Draw";
          break;
      }
    }
    roundScore = roundScore;
  } else {
    console.log("Choose only from [rock,paper,scissors]");
  }
}

function startTheGame() {
  for (i = 0; i < 5; i++) {
    playerChoice = prompt("what is ur move? ").toLowerCase();
    let computerMoves = computerChoice();
    startTheRound(playerChoice, computerMoves);
    score += roundScore;
    console.log(score);
  }
}
startTheGame();
