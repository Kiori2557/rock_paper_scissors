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

  console.log(`u chose ${playerChoice}`);
  console.log(`Computer chose ${computerChoice}`);
  //Comparison and result of the round
  if (
    playerChoice == "rock" ||
    playerChoice == "paper" ||
    playerChoice == "scissors" ||
    playerChoice == null
  ) {
    if (playerChoice == computerChoice) {
      roundStatus = "Draw";
    } else if (
      (playerChoice == "rock" && computerChoice == "scissors") ||
      (playerChoice == "paper" && computerChoice == "rock") ||
      (playerChoice == "scissors" && computerChoice == "paper")
    ) {
      roundScore++;
      roundStatus = "Congrats!, U won!🎉";
    } else {
      roundScore--;
      roundStatus = "Opps, u lost!😬";
    }
  }
}

function playTheGame() {
  let i = 0;

  //loop to let player play 5 rounds
  while (i < 5) {
    let playerChoice = "";
    playerChoice = prompt("what is ur play? ");

    //Loop to ask for input again if the input is not one of (rock,paper,scissors) or misspelled
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
      console.log(`${roundStatus}`);
      console.log(`Total score: ${score}`);
      i++;
    }
  }
}
playTheGame();
