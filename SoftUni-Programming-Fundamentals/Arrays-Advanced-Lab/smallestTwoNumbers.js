function smallestTwoNumbers(arr) {
  let output = arr.sort((a, b) => a - b);

  console.log(output[0], output[1]);
}

smallestTwoNumbers([30, 15, 50, 5]);
