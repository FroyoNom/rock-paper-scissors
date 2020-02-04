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
