//function to randomly output rock,paper,scissors array
function computerChoice() {
  let moves = ["rock", "paper", "scissors"];
  return moves[Math.floor(Math.random() * 3)];
}

let computerMoves = computerChoice();
let playerChoice = prompt("what is ur move? ").toLowerCase();

function startTheRound(playerChoice, computerMoves) {
  console.log(`Computer chose ${computerMoves}`);
  console.log(`You chose ${playerChoice}`);
  if (
    playerChoice == "rock" ||
    playerChoice == "paper" ||
    playerChoice == "scissors"
  ) {
    let gameStatus = "";
    let score = 0;
    //Comparison and result of the round
    if (playerChoice == "rock") {
      switch (computerMoves) {
        case "rock":
          gameStatus = "Draw";
          break;
        case "paper":
          gameStatus = "Opps, u lose";
          score -= 1;
          break;
        case "scissors":
          gameStatus = "Congrats!!, U won!";
          score += 1;
          break;
      }
    } else if (playerChoice == "paper") {
      switch (computerMoves) {
        case "rock":
          gameStatus = "Congrats!!, U won!";
          score += 1;
          break;
        case "paper":
          gameStatus = "Draw";
          break;
        case "scissors":
          gameStatus = "Opps, u lose";
          score -= 1;
          break;
      }
    } else if (playerChoice == "scissors") {
      switch (computerMoves) {
        case "rock":
          gameStatus = "Opps, u lose";
          score -= 1;
          break;
        case "paper":
          gameStatus = "Congrats!!, U won!";
          score += 1;
          break;
        case "scissors":
          gameStatus = "Draw";
          break;
      }
    }
    console.log(score);
  } else {
    console.log("Choose only from [rock,paper,scissors]");
  }
}
startTheRound(playerChoice, computerMoves);
