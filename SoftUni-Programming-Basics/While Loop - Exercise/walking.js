function walking(input) {
  let index = 0;
  let start = Number(input[index]);

  let goal = 10000;

  let sum = 0;

  while (index < input.length) {
    start = input[index];
    if (start === 'Going home') {
      index++;
      start = input[index];
      sum = sum + +start;
      break;
    }
    sum = sum + +start;
    index++;
  }
  if (sum >= goal) {
    console.log('Goal reached! Good job!');
    console.log(`${sum - goal} steps over the goal!`);
  } else if (sum < goal) {
    console.log(`${goal - sum} more steps to reach goal.`);
  }
}

walking([
  '1500',

  '3000',

  '250',

  '1548',

  '2000',

  'Going home',

  '2000',
]);
