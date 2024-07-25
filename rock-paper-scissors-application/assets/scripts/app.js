const startGameBtn = document.getElementById("start-game-btn");
const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = "DRAW";
const RESULT_PLAYER_WINS = "PLAYER_WINS";
const RESULT_COMPUTER_WINS = "COMPUTER_WINS";

let gameIsRunning = false;

const getPlayerChoice = () => {
  const selection = prompt(
    `${ROCK}, ${PAPER} or ${SCISSORS}?`,
    ""
  ).toUpperCase();
  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you`);
    return DEFAULT_USER_CHOICE;
  }
  return selection;
};

const getComputerChoice = () => {
  const randomValue = Math.random();
  if (randomValue <= 0.33) {
    return ROCK;
  } else if (randomValue <= 0.66) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

const getWinner = (cChoice, pChoice) => {
  if (cChoice === pChoice) {
    return RESULT_DRAW;
  } else if (
    (cChoice == ROCK && pChoice == SCISSORS) ||
    (cChoice == PAPER && pChoice == ROCK) ||
    (cChoice == SCISSORS && pChoice == PAPER)
  ) {
    return RESULT_COMPUTER_WINS;
  } else {
    return RESULT_PLAYER_WINS;
  }
};

startGameBtn.addEventListener("click", () => {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log("Game started!");
  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();
  let message = `You picked ${playerChoice}, Computer picked ${computerChoice}, Therefore `;
  const winner = getWinner(computerChoice, playerChoice);
  console.log(winner);
  if (winner === RESULT_COMPUTER_WINS) {
    alert(message + "you lost");
  } else if (winner === RESULT_PLAYER_WINS) {
    alert(message + "you won!");
  } else {
    alert(message + "Its a DRAW");
  }
  gameIsRunning = false;
});
