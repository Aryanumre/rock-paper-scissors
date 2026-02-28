export function getScores() {
  return {
    user: Number(localStorage.getItem("userScore")) || 0,
    computer: Number(localStorage.getItem("computerScore")) || 0,
  };
}

export function updateScore(winner) {
  const scores = getScores();

  if (winner === "user") scores.user++;
  if (winner === "computer") scores.computer++;

  localStorage.setItem("userScore", scores.user);
  localStorage.setItem("computerScore", scores.computer);

  return scores;
}
