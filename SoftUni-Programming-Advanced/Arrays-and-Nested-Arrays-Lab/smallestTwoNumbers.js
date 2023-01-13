function smallestTwoNumbers(arr) {
  const output = [];

  const sortedArr = arr.sort((a, b) => a - b);

  output.push(sortedArr.shift());
  output.push(sortedArr.shift());

  console.log(output.join(' '));
}

smallestTwoNumbers([30, 15, 50, 5]);
smallestTwoNumbers([3, 0, 10, 4, 7, 3]);
