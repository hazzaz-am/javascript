// calculateStrikeRate
// two params => total runs, total balls
// return strike rate
// runs per 100 balls

function calculateStrikeRate(totalRuns, totalBalls) {
  const strikeRate = (totalRuns/totalBalls) * 100;
  return strikeRate.toFixed(2);
}

console.log(calculateStrikeRate(45, 30));