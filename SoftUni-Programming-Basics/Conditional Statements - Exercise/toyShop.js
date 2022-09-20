function toyShop(input) {
  let puzzle = 2.6;
  let puppet = 3;
  let bear = 4.1;
  let minion = 8.2;
  let truck = 2;

  let vacationCost = Number(input[0]);
  let puzzleSum = Number(input[1]);
  let puppetSum = Number(input[2]);
  let bearSum = Number(input[3]);
  let minionSum = Number(input[4]);
  let truckSum = Number(input[5]);

  let totalPrice =
    puzzleSum * puzzle +
    puppetSum * puppet +
    bearSum * bear +
    minionSum * minion +
    truckSum * truck;

  let toyTotal =
    puzzleSum + puppetSum + bearSum + minionSum + truckSum;

  if (toyTotal >= 50) {
    let discount = totalPrice * 0.25;
    totalPrice = totalPrice - discount;
  }

  let rent = totalPrice * 0.1;

  let money = totalPrice - rent;
  let moneyLeft = money - vacationCost;
  let moneyNeeded = vacationCost - money;

  if (money >= vacationCost) {
    console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`);
  } else if (money < vacationCost) {
    console.log(
      `Not enough money! ${moneyNeeded.toFixed(2)} lv needed.`
    );
  }
}

toyShop(['320', '8', '2', '5', '5', '1']);
