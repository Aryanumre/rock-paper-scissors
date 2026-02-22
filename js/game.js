const choices = document.querySelectorAll(".choice");
const resultScreen = document.getElementById("resultScreen");
const resultText = document.getElementById("resultText");
const playAgainBtn = document.getElementById("playAgainBtn");
const nextBtn = document.getElementById("nextBtn");
const userPickedDiv = document.getElementById("userPicked");
const pcPickedDiv = document.getElementById("pcPicked");
const gameArea = document.getElementById("gameArea");

let userScore = parseInt(localStorage.getItem("userScore")) || 0;
let computerScore = parseInt(localStorage.getItem("computerScore")) || 0;

document.getElementById("userScore").innerText = userScore;
document.getElementById("computerScore").innerText = computerScore;

const options = ["stone", "paper", "scissor"];

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.dataset.choice;
    const computerChoice = options[Math.floor(Math.random() * 3)];
    showResult(userChoice, computerChoice);
  });
});

function showResult(userChoice, computerChoice) {
  gameArea.classList.add("hidden");
  resultScreen.classList.remove("hidden");

  userPickedDiv.className = `choice result-choice ${userChoice}`;
  pcPickedDiv.className = `choice result-choice ${computerChoice}`;

  userPickedDiv.innerHTML = `<img src="assets/${userChoice}.png">`;
  pcPickedDiv.innerHTML = `<img src="assets/${computerChoice}.png">`;

  const winner = getWinner(userChoice, computerChoice);

  if (winner === "user") {
    userScore++;
    localStorage.setItem("userScore", userScore);
    document.getElementById("userScore").innerText = userScore;
    resultText.innerText = "YOU WIN";
    userPickedDiv.classList.add("win-glow");
    nextBtn.classList.remove("hidden");
  } else if (winner === "computer") {
    computerScore++;
    localStorage.setItem("computerScore", computerScore);
    document.getElementById("computerScore").innerText = computerScore;
    resultText.innerText = "YOU LOST";
    pcPickedDiv.classList.add("win-glow");
  } else {
    resultText.innerText = "TIE UP";
  }
}

function getWinner(user, computer) {
  if (user === computer) return "draw";

  if (
    (user === "stone" && computer === "scissor") ||
    (user === "paper" && computer === "stone") ||
    (user === "scissor" && computer === "paper")
  ) {
    return "user";
  }
  return "computer";
}

playAgainBtn.onclick = () => location.reload();
nextBtn.onclick = () => (window.location.href = "hurray.html");

/* RULES */
document.getElementById("rulesBtn").onclick = () => {
  document.getElementById("rulesPopup").style.display = "flex";
};

document.getElementById("closeRules").onclick = () => {
  document.getElementById("rulesPopup").style.display = "none";
};
