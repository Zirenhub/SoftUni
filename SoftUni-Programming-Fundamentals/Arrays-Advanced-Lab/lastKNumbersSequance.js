function lastKNumbersSequance(firstNum, k) {
  const output = [1];

  for (let i = 1; i < firstNum; i++) {
    const previousKNums = output.slice(-k);
    const sumOfPrevious = previousKNums.reduce(
      (prevVal, currentVal) => prevVal + currentVal,
      0
    );
    output.push(sumOfPrevious);
  }

  console.log(output.join(' '));
}

lastKNumbersSequance(8, 2);
