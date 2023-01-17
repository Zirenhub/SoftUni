function extractIncreasingSubsequenceFromArray(arr) {
  const output = [];

  let currentBiggest = Number.MIN_SAFE_INTEGER;

  arr.forEach((num) => {
    if (num >= currentBiggest) {
      currentBiggest = num;
      output.push(currentBiggest);
    }
  });

  return output;
}

console.log(
  extractIncreasingSubsequenceFromArray([1, 3, 8, 4, 10, 12, 3, 2, 24])
);
console.log(extractIncreasingSubsequenceFromArray([1, 2, 3, 4]));
