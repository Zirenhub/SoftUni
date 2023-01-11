function sumOfNumbersNM(a, b) {
  const numOne = Number(a);
  const numTwo = Number(b);

  let sum = 0;

  for (let i = numOne; i <= numTwo; i++) {
    sum += i;
  }

  console.log(sum);
}

sumOfNumbersNM('1', '5');
sumOfNumbersNM('-8', '20');
