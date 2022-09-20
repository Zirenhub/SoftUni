function traveling(input) {
  let index = 0;
  let destination = input[index];
  index++;
  let moneyNeeded = input[index];
  index++;

  let totalMoneyCollected = 0;
  let moneyAdded = 0;

  while (input[index] !== 'End') {
    moneyAdded = Number(input[index]);
    index++;
    totalMoneyCollected += moneyAdded;
    if (totalMoneyCollected >= moneyNeeded) {
      console.log(`Going to ${destination}!`);
      totalMoneyCollected = 0;
      if (input[index] === 'End') {
        return;
      } else {
        destination = input[index];
        index++;
        moneyNeeded = Number(input[index]);
        index++;
      }
    }
  }
}

traveling([
  'France',

  '2000',

  '300',

  '300',

  '200',

  '400',

  '190',

  '258',

  '360',

  'Portugal',

  '1450',

  '400',

  '400',

  '200',

  '300',

  '300',

  'Egypt',

  '1900',

  '1000',

  '280',

  '300',

  '500',

  'End',
]);
