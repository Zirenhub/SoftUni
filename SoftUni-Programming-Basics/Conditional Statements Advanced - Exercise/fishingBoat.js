function fishingBoat(input) {
  let budget = Number(input[0]);
  let season = input[1];
  let numberOfFishers = Number(input[2]);

  let priceForBoat = 0;

  if (season === 'Spring') {
    priceForBoat = 3000;
  } else if (season === 'Summer' || season === 'Autumn') {
    priceForBoat = 4200;
  } else if (season === 'Winter') {
    priceForBoat = 2600;
  }
  if (numberOfFishers <= 6) {
    priceForBoat = priceForBoat - priceForBoat * 0.1;
  } else if (numberOfFishers > 7 && numberOfFishers <= 11) {
    priceForBoat = priceForBoat - priceForBoat * 0.15;
  } else if (numberOfFishers > 12) {
    priceForBoat = priceForBoat - priceForBoat * 0.25;
  }
  if (numberOfFishers % 2 == 0 && season != 'Autumn') {
    priceForBoat = priceForBoat - priceForBoat * 0.05;
  }

  if (budget >= priceForBoat) {
    let moneyLeft = budget - priceForBoat;
    console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`);
  } else {
    let moneyNeeded = priceForBoat - budget;
    console.log(
      `Not enough money! You need ${moneyNeeded.toFixed(2)} leva.`
    );
  }
}

fishingBoat(['3000', 'Summer', '11']);
