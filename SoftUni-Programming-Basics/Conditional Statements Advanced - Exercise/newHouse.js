function newHouse(input) {
  let flowerType = input[0];
  let flowerNumber = Number(input[1]);
  let budget = Number(input[2]);

  let sum = 0;
  let discount = 0;
  let increase = 0;

  if (flowerType === 'Roses') {
    sum = flowerNumber * 5;
    if (flowerNumber > 80) {
      discount = sum * 0.1;
      sum = sum - discount;
    }
  } else if (flowerType === 'Dahlias') {
    sum = flowerNumber * 3.8;
    if (flowerNumber > 90) {
      discount = sum * 0.15;
      sum = sum - discount;
    }
  } else if (flowerType === 'Tulips') {
    sum = flowerNumber * 2.8;
    if (flowerNumber > 80) {
      discount = sum * 0.15;
      sum = sum - discount;
    }
  } else if (flowerType === 'Narcissus') {
    sum = flowerNumber * 3;
    if (flowerNumber < 120) {
      increase = sum * 0.15;
      sum = sum + increase;
    }
  } else if (flowerType === 'Gladiolus') {
    sum = flowerNumber * 2.5;
    if (flowerNumber < 80) {
      increase = sum * 0.2;
      sum = sum + increase;
    }
  }
  if (sum > budget) {
    let moneyNeeded = sum - budget;
    console.log(
      `Not enough money, you need ${moneyNeeded.toFixed(
        2
      )} leva more.`
    );
  } else if (sum <= budget) {
    let moneyLeft = budget - sum;
    console.log(
      `Hey, you have a great garden with ${flowerNumber} ${flowerType} and ${moneyLeft.toFixed(
        2
      )} leva left.`
    );
  }
}
newHouse(['Narcissus', '22', '2']);
