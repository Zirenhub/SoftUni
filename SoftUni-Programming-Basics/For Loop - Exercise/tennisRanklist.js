function tennisRanklist(input) {
  let totalParticipation = Number(input[0]);
  let startPoints = Number(input[1]);

  let totalPoints = startPoints;
  let totalWon = 0;

  for (let i = 2; i <= totalParticipation + 1; i++) {
    if (input[i] === 'W') {
      totalPoints += 2000;
      totalWon += +1;
    } else if (input[i] === 'F') {
      totalPoints += 1200;
    } else if (input[i] === 'SF') {
      totalPoints += 720;
    }
  }
  let averagePoints =
    (totalPoints - startPoints) / totalParticipation;
  let percentWon = (totalWon / totalParticipation) * 100;
  console.log(`Final points: ${Math.floor(totalPoints)}`);
  console.log(`Average points: ${Math.floor(averagePoints)}`);
  console.log(`${percentWon.toFixed(2)}%`);
}

tennisRanklist(['7', '1200', 'SF', 'F', 'W', 'F', 'W', 'SF', 'W']);
