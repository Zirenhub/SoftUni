function vacation(input) {
  let index = 0;
  let moneyNeededForVacation = input[index];
  index++;
  let budget = input[index];
  index++;

  let start = input[index];

  let moneySpend = 0;
  let moneySpendSum = 0;
  let moneySaved = 0;
  let moneySavedSum = 0;

  let daysMoneySpend = 0;
  let totalDays = 0;

  while (index < input.length) {
    if (start === 'save') {
      index++;
      moneySaved = input[index];
      moneySavedSum = budget + +moneySaved;
      budget = moneySavedSum;
      daysMoneySpend = 0;
      totalDays++;
    } else if (start === 'spend') {
      index++;
      moneySpend = input[index];
      moneySpendSum = budget - +moneySpend;
      budget = moneySpendSum;
      if (+moneySpendSum < 0) {
        budget = 0;
      }
      daysMoneySpend++;
      totalDays++;
      if (daysMoneySpend === 5) {
        break;
      }
    }
    index++;
    start = input[index];
  }
  if (moneySavedSum >= moneyNeededForVacation) {
    console.log(`You saved the money for ${totalDays} days.`);
  } else if (moneySavedSum < moneyNeededForVacation) {
    console.log(`You can't save the money. \n${totalDays}`);
  }
}

vacation([
  '110',

  '60',

  'spend',

  '10',

  'spend',

  '10',

  'spend',

  '10',

  'spend',

  '10',

  'spend',

  '10',
]);
