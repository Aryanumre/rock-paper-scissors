const vsScreen = document.getElementById("vsScreen");
const gameArea = document.querySelector(".game-area");

const userPick = document.getElementById("userPick");
const pcPick = document.getElementById("pcPick");
const resultText = document.getElementById("resultText");

const userScoreEl = document.getElementById("user-score");
const computerScoreEl = document.getElementById("computer-score");

export function showVsScreen(user, pc) {
  gameArea.classList.add("hidden");
  vsScreen.classList.remove("hidden");

  userPick.innerHTML = `
    <div class="choice-display">
      <img src="./assets/${user}.png" alt="${user}">
    </div>
  `;

  pcPick.innerHTML = `
    <div class="choice-display">
      <img src="./assets/${pc}.png" alt="${pc}">
    </div>
  `;
}

export function showResult(winner) {
  if (winner === "tie") {
    resultText.innerText = "TIE UP";
  } else if (winner === "user") {
    resultText.innerText = "YOU WIN";
    highlightWinner("user");
  } else {
    resultText.innerText = "YOU LOST";
    highlightWinner("computer");
  }
}

export function updateScoreUI(scores) {
  userScoreEl.innerText = scores.user;
  computerScoreEl.innerText = scores.computer;
}

export function highlightWinner(winner) {
  if (winner === "user") {
    document
      .querySelector("#userPick .choice-display")
      ?.classList.add("winner-ring");
  }

  if (winner === "computer") {
    document
      .querySelector("#pcPick .choice-display")
      ?.classList.add("winner-ring");
  }
}

export function resetGameScreen() {
  vsScreen.classList.add("hidden");
  gameArea.classList.remove("hidden");

  resultText.innerText = "";
  userPick.innerHTML = "";
  pcPick.innerHTML = "";
}
