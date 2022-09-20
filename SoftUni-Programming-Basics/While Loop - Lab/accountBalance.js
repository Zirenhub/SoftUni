function accountBalance(input) {
  let index = 0;
  let check = input[index];

  let sum = 0;

  while (check !== 'NoMoreMoney') {
    if (check < 0) {
      console.log('Invalid operation!');
      break;
    }
    console.log(`Increase: ${Number(check).toFixed(2)}`);
    sum = +sum + +check;
    index++;
    check = input[index];
  }
  console.log(`Total: ${sum.toFixed(2)}`);
}

accountBalance(['5.51', '69.42', '100', 'NoMoreMoney']);
