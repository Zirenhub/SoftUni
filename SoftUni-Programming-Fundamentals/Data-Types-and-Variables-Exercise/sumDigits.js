function sumDigits(number) {
  let sum = 0;
  const numberToString = number.toString();
  for (let i = 0; i < numberToString.length; i++) {
    const currentDigit = numberToString[i];
    sum += Number(currentDigit);
  }

  console.log(sum);
}

sumDigits(245678);
