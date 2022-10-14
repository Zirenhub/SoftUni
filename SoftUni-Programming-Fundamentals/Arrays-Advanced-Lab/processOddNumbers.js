function processOddNumbers(arr) {
  const numsAtOddPositions = [];

  arr.forEach((num, index) => {
    if (index % 2 !== 0) {
      numsAtOddPositions.push(num);
    }
  });

  const doubled = numsAtOddPositions.map((num) => num * 2);

  console.log(doubled.reverse().join(' '));
}

processOddNumbers([10, 15, 20, 25]);
