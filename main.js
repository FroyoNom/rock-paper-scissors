const computerPlay = () => {
  let computerChoice = Math.floor(Math.random() * 3) + 1;
  let result;

  switch (computerChoice) {
    case 1:
      result = "rock";
      return result;

    case 2:
      result = "paper";
      return result;

    case 3:
      result = "scissors";
      return result;
  }
};

const playerSelection = () => {
  let playerChoice = prompt(
    "Please enter your choice between rock, paper, scissors"
  );
  playerChoice = playerChoice.toLowerCase();

  if (
    playerChoice === "rock" ||
    playerChoice === "paper" ||
    playerChoice === "scissors"
  ) {
    return playerChoice;
  } else {
    return "Wrong input, you must select either rock, paper or scissors.";
  }
};

const playRound = (playerChoice, computerChoice) => {
  let playerScore = false;
  switch (playerChoice) {
    case "rock":
      if (computerChoice === playerChoice) {
        return "Rock! It's a tie!";
      } else if (computerChoice === "paper") {
        ("You Lose! Paper beats Rock!");
        playerScore = false;

        return playerScore;
      } else {
        ("You Win! Rock beats Scissors!");
        playerScore = true;

        return playerScore;
      }

    case "paper":
      if (computerChoice === playerChoice) {
        return "Paper! It's a tie!";
      } else if (computerChoice === "Paper") {
        ("You Lose! Scissors beats Paper!");
        playerScore = false;

        return playerScore;
      } else {
        ("You Win! Paper beats Scissors!");
        playerScore = true;

        return playerScore;
      }

    case "scissors":
      if (computerChoice === playerChoice) {
        return "Scissors! It's a tie!";
      } else if (computerChoice === "Scissors") {
        ("You Lose! Rock beats Scissors!");
        playerScore = false;

        return playerScore;
      } else {
        ("You Win! Scissors beats Scissors!");
        playerScore = true;

        return playerScore;
      }
  }
};

const game = () => {
  let result = false;
  let playerWin = 0;
  let computerWin = 0;
  let tie = 0;

  for (let i = 1; i <= 5; i++) {
    let roundMessage = `Round ${i}`;
    let computer = computerPlay();
    let player = playerSelection();
    console.log(roundMessage);

    result = playRound(player, computer);

    if (result == "tie") {
      tie++;
    } else if (result == true) {
      playerWin++;
    } else {
      computerWin++;
    }
  }

  console.log("End of the best of five match! results: ");
  console.log(`Player: ${playerWin} points`);
  console.log(`Computer: ${computerWin} points`);
  console.log(`Ties: ${tie}`);

  if (playerWin > computerWin) {
    console.log(
      `Player Wins! By a difference in points of: ${playerWin -
        computerWin} points.`
    );
  } else if (playerWin < computerWin) {
    console.log(
      `Computer Wins! By a difference in points of: ${computerWin -
        playerWin} points.`
    );
  } else {
    console.log(
      `Best of five ended in a tie, Player: ${playerWin}, Computer: ${computerWin}`
    );
  }
};
