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
