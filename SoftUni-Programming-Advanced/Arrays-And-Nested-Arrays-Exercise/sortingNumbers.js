function sortingNumbers(arr) {
  const sortedArr = arr.sort((a, b) => a - b);
  const output = [];

  while (sortedArr.length > 0) {
    output.push(sortedArr.shift());
    if (sortedArr.length > 0) {
      output.push(sortedArr.pop());
    }
  }

  return output;
}

console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));
