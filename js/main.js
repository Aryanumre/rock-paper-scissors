import { playGame } from "./gameLogic.js";
import { resetGameScreen, updateScoreUI } from "./ui.js";
import { getScores } from "./storage.js";

const nextBtn = document.getElementById("next-btn");
const playAgainHurray = document.getElementById("playAgainHurray");
const choices = document.querySelectorAll(".choice");
const rulesBtn = document.getElementById("rules-btn");
const rulesPopup = document.getElementById("rules-popup");
const closeRules = document.getElementById("close-rules");
const playAgainBtn = document.getElementById("playAgain");

window.addEventListener("DOMContentLoaded", () => {
  const scores = getScores();
  updateScoreUI(scores);
});

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    playGame(choice.dataset.choice);
  });
});

rulesBtn.addEventListener("click", () => {
  rulesPopup.classList.remove("hidden");
});

closeRules.addEventListener("click", () => {
  rulesPopup.classList.add("hidden");
});

if (playAgainBtn) {
  playAgainBtn.addEventListener("click", () => {
    resetGameScreen();
  });
}
if (nextBtn) {
  nextBtn.addEventListener("click", () => {
    resetGameScreen();
  });
}

if (playAgainHurray) {
  playAgainHurray.addEventListener("click", () => {
    localStorage.clear();
    location.reload();
  });
}
