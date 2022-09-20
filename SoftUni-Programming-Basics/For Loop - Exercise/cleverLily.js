function cleverLily(input) {
  let age = Number(input[0]);
  let washingMachinePrice = Number(input[1]);
  let toyPrice = Number(input[2]);

  let money = 0;
  let savings = 0;
  let toys = 0;
  let moneyLostToBrother = 0;

  for (let i = 1; i <= age; i++) {
    if (i % 2 === 0) {
      money += 10;
      savings += money;
      moneyLostToBrother += 1;
    } else {
      toys += 1;
    }
  }
  let toysSold = toys * toyPrice;
  savings = savings + toysSold - moneyLostToBrother;

  if (savings >= washingMachinePrice) {
    let moneyLeft = savings - washingMachinePrice;
    console.log(`Yes! ${moneyLeft.toFixed(2)}`);
  } else if (washingMachinePrice > savings) {
    let moneyNeeded = washingMachinePrice - savings;
    console.log(`No! ${moneyNeeded.toFixed(2)}`);
  }
}

cleverLily(['21', '1570.98', '3']);
