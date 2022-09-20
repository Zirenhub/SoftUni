function shopping(input) {
  let budget = Number(input[0]);
  let gpusBought = Number(input[1]);
  let cpusBought = Number(input[2]);
  let ramBought = Number(input[3]);

  let gpuPrice = 250 * gpusBought;

  let cpuPrice = gpuPrice * 0.35;
  let cpuFinalPrice = cpusBought * cpuPrice;
  let ramPrice = gpuPrice * 0.1;
  let ramFinalPrice = ramBought * ramPrice;

  let totalSum = gpuPrice + ramFinalPrice + cpuFinalPrice;

  if (gpusBought >= cpusBought) {
    let discount = totalSum * 0.15;
    totalSum += -discount;
  }
  if (totalSum <= budget) {
    let moneyLeft = budget - totalSum;
    console.log(`You have ${moneyLeft.toFixed(2)} leva left!`);
  } else if (totalSum >= budget) {
    let moneyNeeded = totalSum - budget;
    console.log(
      `Not enough money! You need ${moneyNeeded.toFixed(
        2
      )} leva more!`
    );
  }
}

shopping(['920.45', '3', '1', '1']);
