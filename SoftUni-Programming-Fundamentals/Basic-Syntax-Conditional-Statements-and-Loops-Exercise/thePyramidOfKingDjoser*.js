function thePyramidOfKingDjoser(base, increment) {
  let heightCounter = 0;
  let totalStone = 0;
  let totalLapis = 0;
  let totalMarble = 0;
  let totalGold = 0;

  for (let i = base; i > 0; i -= 2) {
    heightCounter += 1;

    let area = i * i;
    let reducedStep = i - 2;
    let stoneArea = reducedStep * reducedStep;
    let parameter = area - stoneArea;

    if (i <= 2) {
      let goldArea = area * increment;
      totalGold += goldArea;
      break;
    }

    function calculateStoneStep() {
      let stoneRequired = stoneArea * increment;
      totalStone += stoneRequired;
    }

    function calculateMarble() {
      let marbleRequired = parameter * increment;
      totalMarble += marbleRequired;
    }

    function calculateLapis() {
      let lapisArea = parameter * increment;
      totalLapis += lapisArea;
    }

    calculateStoneStep();

    if (heightCounter % 5 === 0) {
      calculateLapis();
    } else {
      calculateMarble();
    }
  }
  console.log(`Stone required: ${Math.ceil(totalStone)}`);
  console.log(`Marble required: ${Math.ceil(totalMarble)}`);
  console.log(`Lapis Lazuli required: ${Math.ceil(totalLapis)}`);
  console.log(`Gold required: ${Math.ceil(totalGold)}`);
  console.log(`Final pyramid height: ${Math.floor(heightCounter * increment)}`);
}

thePyramidOfKingDjoser(12, 1);
