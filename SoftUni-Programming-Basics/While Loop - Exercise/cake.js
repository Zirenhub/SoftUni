function cake(input) {
  let index = 0;
  let cakeWidth = Number(input[index]);
  index++;
  let cakeHeight = Number(input[index]);
  index++;

  let totalCakeMass = cakeHeight * cakeWidth;

  let pieceTaken = input[index];
  let sumPieces = totalCakeMass;

  while (sumPieces >= 0) {
    if (pieceTaken === 'STOP') {
      console.log(`${sumPieces} pieces are left.`);
      return;
    }
    sumPieces = sumPieces - pieceTaken;
    index++;
    pieceTaken = input[index];
  }
  if (sumPieces < 0) {
    console.log(
      `No more cake left! You need ${Math.abs(
        sumPieces
      )} pieces more.`
    );
  }
}

cake(['10', '2', '2', '4', '6', 'STOP']);
