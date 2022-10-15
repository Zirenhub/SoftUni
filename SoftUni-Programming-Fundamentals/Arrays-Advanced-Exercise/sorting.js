function sorting(arr) {
  const sortedArr = arr.sort((a, b) => b - a);

  const output = [];

  while (sortedArr.length) {
    const biggestNum = sortedArr.shift();
    const smallestNum = sortedArr.pop();

    output.push(biggestNum, smallestNum);
  }

  console.log(output.join(' '));
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
