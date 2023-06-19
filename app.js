//function to randomly output rock,paper,scissors array
function computerChoice() {
  let moves = ["rock", "paper", "scissors"];
  return moves[Math.floor(Math.random() * 3)];
}
let computerMoves = computerChoice();
let playerChoice = prompt("what is ur move? ").toLowerCase();
function startTheRound(playerChoice, computerMoves) {
  console.log(playerChoice);
  if (
    playerChoice == "rock" ||
    playerChoice == "paper" ||
    playerChoice == "scissors"
  ) {
    console.log(computerMoves);
  } else {
    console.log("Choose only from [rock,paper,scissors]");
  }
}
startTheRound(playerChoice, computerMoves);
