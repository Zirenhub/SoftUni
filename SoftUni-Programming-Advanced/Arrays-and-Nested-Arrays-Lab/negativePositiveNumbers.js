function negativePositiveNumbers(arr) {
  const output = [];

  arr.forEach((num) => {
    num < 0 ? output.unshift(num) : output.push(num);
  });

  console.log(output.join('\n'));
}

negativePositiveNumbers([7, -2, 8, 9]);
negativePositiveNumbers([3, -2, 0, -1]);
