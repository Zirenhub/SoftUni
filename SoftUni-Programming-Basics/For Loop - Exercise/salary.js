function salary(input) {
  let totalTabs = Number(input[0]);
  let salary = Number(input[1]);

  let totalLoss = 0;

  for (let i = 2; i <= totalTabs; i++) {
    if (input[i] === 'Facebook') {
      totalLoss += 150;
      if (salary - totalLoss <= 0)
        return console.log('You have lost your salary.');
    } else if (input[i] === 'Instagram') {
      totalLoss += 100;
      if (salary - totalLoss <= 0)
        return console.log('You have lost your salary.');
    } else if (input[i] === 'Reddit') {
      totalLoss += 50;
      if (salary - totalLoss <= 0)
        return console.log('You have lost your salary.');
    }
  }
  console.log(salary - totalLoss);
}

salary([
  '10',

  '750',

  'Facebook',

  'Dev.bg',

  'Instagram',

  'Facebook',

  'Reddit',

  'Facebook',

  'Facebook',
]);
