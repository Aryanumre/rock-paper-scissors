const vsScreen = document.getElementById("vsScreen");
const gameArea = document.querySelector(".game-area");
const playAgainBtn = document.getElementById("playAgain");
const userPick = document.getElementById("userPick");
const pcPick = document.getElementById("pcPick");
const resultText = document.getElementById("resultText");

const userScoreEl = document.getElementById("user-score");
const computerScoreEl = document.getElementById("computer-score");

const nextBtn = document.getElementById("next-btn");

export function showVsScreen(user, pc) {
  gameArea.classList.add("hidden");
  vsScreen.classList.remove("hidden");

  userPick.innerHTML = `
    <div class="choice-display ${user}">
      <img src="./assets/${user}.png">
    </div>
  `;

  pcPick.innerHTML = `
    <div class="choice-display ${pc}">
      <img src="./assets/${pc}.png">
    </div>
  `;
}

export function showResult(winner) {
  // 🔥 RESET sabse pehle
  playAgainBtn.innerText = "PLAY AGAIN";
  nextBtn.classList.add("hidden");

  if (winner === "tie") {
    resultText.innerHTML = "TIE UP";

    playAgainBtn.innerText = "REPLAY"; // 👈 sirf tie me change
    nextBtn.classList.add("hidden"); // 👈 NEXT hide fix
  } else if (winner === "user") {
    resultText.innerHTML = "YOU WIN<br>AGAINST PC";

    highlightWinner("user");

    nextBtn.classList.remove("hidden"); // 👈 sirf win me NEXT
  } else {
    resultText.innerHTML = "YOU LOST<br>AGAINST PC";

    highlightWinner("computer");

    nextBtn.classList.add("hidden"); // 👈 lose me bhi hide
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

  userPick.innerHTML = "";
  pcPick.innerHTML = "";

  resultText.innerHTML = "";

  nextBtn.classList.add("hidden");

  // 🔥 IMPORTANT RESET
  playAgainBtn.innerText = "PLAY AGAIN";
}
