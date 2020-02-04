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
