function finalCompetition(input) {
  let totalDancers = input[0];
  let totalPoints = input[1];
  let season = input[2];
  let place = input[3];

  let winningTotal = +totalDancers * +totalPoints;

  let moneyAfterTax = 0;

  if (place === 'Abroad') {
    let placeWinning = winningTotal + winningTotal * 0.5;
    if (season === 'summer') {
      moneyAfterTax = placeWinning - placeWinning * 0.1;
    } else {
      moneyAfterTax = placeWinning - placeWinning * 0.15;
    }
  } else {
    if (season === 'winter') {
      moneyAfterTax = winningTotal - winningTotal * 0.08;
    } else {
      moneyAfterTax = winningTotal - winningTotal * 0.05;
    }
  }

  let moneyForCharity = moneyAfterTax * 0.75;
  let moneyLeftAfterCharity = moneyAfterTax - moneyForCharity;

  let pricePerDancer = moneyLeftAfterCharity / +totalDancers;
  console.log(`Charity - ${moneyForCharity.toFixed(2)}`);
  console.log(`Money per dancer - ${pricePerDancer.toFixed(2)}`);
}

finalCompetition(['25', '98', 'winter', 'Bulgaria']);
