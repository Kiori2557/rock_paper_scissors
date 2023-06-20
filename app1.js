//function to randomly output rock,paper,scissors array
function computerMoves() {
  let availableMoves = ["rock", "paper", "scissors"];
  return availableMoves[Math.floor(Math.random() * 3)];
}

let score = 0;
let computerChoice = "";
let roundScore = 0;
let roundStatus = "";

//function to play a round
function playARound(playerChoice, computerChoice) {
  computerChoice = computerMoves();
  roundScore = 0;

  console.log(playerChoice);
  console.log(computerChoice);
  //Comparison and result of the round
  if (
    playerChoice == "rock" ||
    playerChoice == "paper" ||
    playerChoice == "scissors" ||
    playerChoice == null
  ) {
    if (playerChoice == "rock") {
      switch (computerChoice) {
        case "rock":
          roundStatus = "Draw";
          break;
        case "paper":
          roundStatus = "Opps, u lose";
          roundScore -= 1;
          break;
        case "scissors":
          roundStatus = "Congrats!!, U won!";
          roundScore += 1;
          break;
      }
    } else if (playerChoice == "paper") {
      switch (computerChoice) {
        case "rock":
          roundStatus = "Congrats!!, U won!";
          roundScore += 1;
          break;
        case "paper":
          gameStatus = "Draw";
          break;
        case "scissors":
          roundStatus = "Opps, u lose";
          roundScore -= 1;
          break;
      }
    } else if (playerChoice == "scissors") {
      switch (computerChoice) {
        case "rock":
          roundStatus = "Opps, u lose";
          roundScore -= 1;
          break;
        case "paper":
          roundStatus = "Congrats!!, U won!";
          roundScore += 1;
          break;
        case "scissors":
          roundScore = "Draw";
          break;
      }
    }
    console.log(roundScore);
  }
}

function playTheGame() {
  let i = 0;
  while (i < 5) {
    let playerChoice = "";
    playerChoice = prompt("what is ur play? ");

    while (
      !(
        playerChoice == "rock" ||
        playerChoice == "paper" ||
        playerChoice == "scissors"
      )
    ) {
      playerChoice = prompt("what is ur play? ").toLowerCase();
    }
    if (
      playerChoice == "rock" ||
      playerChoice == "paper" ||
      playerChoice == "scissors"
    ) {
      playARound(playerChoice, computerChoice);
      score += roundScore;
      console.log(`Total score: ${score}`);
      console.log(`${roundStatus}`);
      i++;
    }
  }
}
playTheGame();
