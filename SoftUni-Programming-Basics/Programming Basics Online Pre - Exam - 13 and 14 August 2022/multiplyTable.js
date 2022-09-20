function multiplyTable(input) {
  let number = Number(input[0]);

  let num = number;
  let digits = [];
  while (num > 0) {
    digits.push(num % 10);
    num = parseInt(num / 10);
  }

  let firstNum = digits[0];
  let secondNum = digits[1];
  let thirdNum = digits[2];

  let counterOne = 1;
  let counterTwo = 1;
  let counterThree = 1;

  for (let i = counterOne; i <= firstNum; i++) {
    for (let j = counterTwo; j <= secondNum; j++) {
      for (let b = counterThree; b <= thirdNum; b++) {
        console.log(`${i} * ${j} * ${b} = ${i * b * j};`);
      }
    }
  }
}

multiplyTable(['324']);
