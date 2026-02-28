import { showVsScreen, showResult, updateScoreUI } from "./ui.js";
import { updateScore } from "./storage.js";

const choices = ["rock", "paper", "scissors"];
const WINNING_SCORE = 10;

export function playGame(userChoice) {
  const pcChoice = choices[Math.floor(Math.random() * 3)];

  showVsScreen(userChoice, pcChoice);

  let winner = "tie";

  if (userChoice === pcChoice) {
    winner = "tie";
  } else if (
    (userChoice === "rock" && pcChoice === "scissors") ||
    (userChoice === "paper" && pcChoice === "rock") ||
    (userChoice === "scissors" && pcChoice === "paper")
  ) {
    winner = "user";
  } else {
    winner = "computer";
  }

  const scores = updateScore(winner);
  updateScoreUI(scores);
  showResult(winner);

  /* 🔥 GAME WIN CHECK */
  if (scores.user >= WINNING_SCORE) {
    setTimeout(() => {
      window.location.href = "hurray.html";
    }, 1000);
  } else if (scores.computer >= WINNING_SCORE) {
    setTimeout(() => {
      alert("Computer Won The Game!");
      localStorage.clear();
      window.location.reload();
    }, 1000);
  }
}
