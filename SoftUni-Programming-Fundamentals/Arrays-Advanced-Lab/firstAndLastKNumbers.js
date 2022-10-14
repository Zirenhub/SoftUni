function firstAndLastKNumbers(arr) {
  const numbersInRow = arr[0];

  const firstHalf = arr.slice(1, numbersInRow + 1);
  const secondHalf = arr.slice(arr.length - numbersInRow);

  console.log(firstHalf.join(' '));
  console.log(secondHalf.join(' '));
}

firstAndLastKNumbers([2, 7, 8, 9]);
firstAndLastKNumbers([3, 6, 7, 8, 9]);
